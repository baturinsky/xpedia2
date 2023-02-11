import SearchApi from 'js-worker-search';
import { emptyImg } from "./Components";
import { loadData } from './load';
import { addAllIfNew, addIfNew, camelToUnderscore, capital, cullDoubles, delay, getFlagEmoji, imageToCanvas, loadImage, removeByValue, unique } from './util';
import * as util from "./util"
import { markersLoaded } from './store';
import { initPedipal } from './pedipal';

export let rul!: Ruleset;
export type SortFirstLastOptions = { first?: string[], last?: string[], exclude?: string[], sortBy?: Function }
type StringValue = [string, any]
export const defaultLanguage = "en-US"

const obsTables = { "BIGOBS.PCK": "big", "FLOOROB.PCK": "floor", "HANDOB.PCK": "hand", "BASEBITS.PCK": "base", "INTICON.PCK": "icon" };

function orderedFilteredEntries(item: Object, fields?: string[]) {
  if (item == null)
    return;
  return fields ? fields.map(key => item[key] != null ? [key, item[key]] as StringValue : null).filter(v => v != null) : [];
}

/**
 * Sorts item's keys, putting "first" first, "last" last, excluding "exclude" and using "sortBy" function
 * returns lists of key-value pairs
 * "misc" in return is everything that is not "first" or "last"
 */
export function sortFirstLast(item: Object, options: SortFirstLastOptions = {}): { first: StringValue[], misc: StringValue[], last: StringValue[], exclude: StringValue[], all: StringValue[] } {
  if (item == null)
    return { all: [], first: [], misc: [], last: [], exclude: [] };

  if(options.exclude){
    if(options.first)
      options.first = util.exclude(options.first, options.exclude);
    if(options.last)
      options.last = util.exclude(options.last, options.exclude);
  }

  let first = orderedFilteredEntries(item, options.first);
  let last = orderedFilteredEntries(item, options.last);
  let exclude = orderedFilteredEntries(item, options.exclude);
  let special = new Set([...(options.first || []), ...(options.last || []), ...(options.exclude || []), "id", "list", "name"]);
  let misc = Object.entries(item).filter(([k, v]) => !special.has(k));
  if (options.sortBy) {
    misc = misc.sort((a, b) => options.sortBy(a[1]) > options.sortBy(b[1]) ? 1 : -1)
  } else {
    misc = misc.sort((a, b) => a[0] > b[0] ? 1 : -1)
  }
  let all = [...first, ...misc, ...last]
  return { first, misc, last, exclude, all };
}

export class Search {
  articles = new SearchApi();

  constructor() {
    for (let a of Object.values(rul.articles)) {
      let texts = ["id", "type", "title", "text"].map(key => `${a[key]}`.toLowerCase()).join(" ");
      this.articles.indexDocument(a.id, texts);
    }
  }

  async findArticles(query: string) {
    return this.articles.search(query.toLowerCase());
  }
}

export class Entry {
  id: string;
  //article: Article;
  armors: string[];
  [id: string]: any;

  constructor(raw: any, collection: string) {
    Object.assign(this, JSON.parse(JSON.stringify(raw)));

    if (rul[collection] == null)
      rul[collection] = {};

    rul[collection][this.id] = this;

    this.addToSection(camelToUnderscore(collection).toUpperCase());
  }

  addToSection(section: string) {
    Article.create(this.id, section);
  }

  sortField(field: string, noTitle: any = false) {
    if (field == "id" && !noTitle)
      return this.title;
    return this[field];
  }

  get title() {
    return rul.tr(this.id);
  }

  static reserve(raw: any, collection) {
    let id = raw.id || raw.type || raw.name;
    if (rul[collection][id]) {
      return rul[collection][id];
    } else {
      return new Entry(raw, collection)
    }
  }

  get name() {
    return this.id;
  }

  set name(val) {
    if (this.id == null)
      this.id = val;
  }

  get type() {
    return this.id;
  }

  set type(val) {
    this.id = val;
  }

}

export class MissionScript extends Entry {
  researchTriggers;
  researchNeeded: string[];
  researchForbidden: string[];
  constructor(raw) {
    super(raw, "missionScripts")
    if (this.researchTriggers) {
      this.researchNeeded = Object.keys(this.researchTriggers).filter(k => this.researchTriggers[k]);
      this.researchForbidden = Object.keys(this.researchTriggers).filter(k => !this.researchTriggers[k]);
    }
    if (this.missionWeights) {
      this._missions = unique(Object.values(this.missionWeights).map(m => Object.keys(m)).flat());
    }
  }
}


export class Soldiers extends Entry {
  armors: string[];
  statCaps: { [id: string]: number }
  sortField(n: string) {
    return this[n] || this.statCaps[n];
  }
}

export class Event extends Entry {
  relatedScripts: string[] = [];
}


export class EventScript extends Entry {
  _relatedEvents: string[];
  _relatedResearch: string[];
  eventWeights;
  oneTimeRandomEvents;
  researchTriggers;
  xcomBaseInCountryTriggers;
  _xcomBaseInCountryTrue = [];
  _xcomBaseInCountryFalse = [];

  constructor(raw: any) {
    super(raw, "eventScripts")
    let relatedEvents = new Set<string>([
      ...Object.values(this.eventWeights || []).map(w => Object.keys(w)).flat(),
      ...Object.keys(this.oneTimeRandomEvents || {})
    ]);
    this._relatedEvents = [...relatedEvents];
    this._relatedResearch = [...new Set<string>(Object.keys(this.researchTriggers || {}))];
    if(this.xcomBaseInCountryTriggers){
      this._xcomBaseInCountryTrue = Object.keys(this.xcomBaseInCountryTriggers).filter(k=>this.xcomBaseInCountryTriggers[k] == true)
      this._xcomBaseInCountryFalse = Object.keys(this.xcomBaseInCountryTriggers).filter(k=>this.xcomBaseInCountryTriggers[k] == false)
    }
  }
}

function totalSellCost(items: { [key: string]: number } = {}) {
  let c = 0;
  for (let k in items) {
    c += items[k] * (rul.items[k] || rul.crafts[k])?.costSell || 0;
  }
  return c || 0;
}

function totalSize(items: { [key: string]: number } = {}) {
  let c = 0;
  for (let k in items) {
    c += items[k] * (rul.items[k] || rul.crafts[k])?.size || 0;
  }
  return c;
}


export class Manufacture extends Entry {
  requires: string;
  producedItems: { [key: string]: number };
  requiredItems: { [key: string]: number };
  totalProducedItems: { [key: string]: number };
  requiresBaseFunc: string[];
  randomProducedItems: [number, { [key: string]: number }][];
  chanceSum: number;
  cost: number;

  constructor(raw: any) {
    super(raw, "manufacture")

    this.cost = this.cost || 0;

    if (this.category) {
      rul.addCategory(this.category, this.id, rul.manufactureCategories);
    }

    if (this.requires) {
      for (let resName of this.requires) {
        let res = rul.research[resName];
        if (!res) continue;
        if (!res.manufacture) res.manufacture = [];
        res.manufacture.push(this.name);
      }
    }

    if (!this.producedItems) {
      this.producedItems = { [this.id]: 1 };
    }

    if (this.requiredItems) {
      for (let itemName of Object.keys(this.requiredItems)) {
        let item = rul.items[itemName];
        if (!item) continue;
        if (!item.componentOf) item.componentOf = {};
        item.componentOf[this.name] = this.requiredItems[itemName];
      }
    }

    if (this.randomProducedItems) {
      this.chanceSum = 0;
      for (let chance of this.randomProducedItems) this.chanceSum += chance[0];

      this.totalProducedItems = { ...this.producedItems };
      for (let chance of this.randomProducedItems) {
        for (let k in chance[1]) {
          this.totalProducedItems[k] = (this.totalProducedItems[k] || 0) + chance[1][k] * chance[0] / this.chanceSum;
        }
      }
    } else {
      this.totalProducedItems = this.producedItems;
    }

    this.profit = totalSellCost(this.producedItems) - totalSellCost(this.requiredItems) - this.cost;
    if (isNaN(this.profit)) {
      console.log(this.id, totalSellCost(this.producedItems), totalSellCost(this.requiredItems), this.cost);
    }
    this.profitPerHour = this.profit / this.time;
    this.sizeChange = totalSize(this.producedItems) - totalSize(this.requiredItems);

    backLink(this.id, Object.keys(this.totalProducedItems), rul.items, "manufacture")

    Service.add("allowsManufacture", this.name, this.requiresBaseFunc);
  }
}

export class SoldierTransformation extends Entry {
  forbiddenPreviousTransformations: string[];
  blocksTransformations: string[];

  constructor(raw: any) {
    super(raw, "soldierTransformation")
  }
}

export class DamageType extends Entry {
  items: string[];
  commendations: string[];
}

export class Commendation extends Entry {
  soldierBonusTypes: any[];
  criteria;
  killCriteria;
  finalBonus: Entry;
  damageTypes: string[] = [];
  battleTypes: string[] = [];
  items: string[] = [];
  kcd = [];
  killCriteria2 = []

  constructor(raw: any) {
    super(raw, "commendations")
    this.finalBonus = this.soldierBonusTypes && rul.soldierBonuses[this.soldierBonusTypes[this.soldierBonusTypes.length - 1]];
  }

  parseKillCriteria() {
    //if(this.id == "STR_MEDAL_SLASHER_NAME") debugger;

    if (this.killCriteria) {
      for (let deeds of this.killCriteria) {
        let group = [];
        for (let deedList of deeds) {
          let deed = { times: deedList[0] } as any;

          for (let [i, k] of Object.entries(deedList[1]) as [string, string][]) {

            let idt = internalDamageTypes.indexOf(k);
            if (idt != -1) {
              deed.element = damageTypes[idt];
              deedList[1][i] = damageTypes[idt];
              this.damageTypes.push(damageTypes[idt]);
              backLink(this.id, [deed.element], rul.damageTypes, "commendations");
              continue;
            }

            let ibt = internalBattleTypes.indexOf(k);
            if (ibt != -1) {
              deed.type = k;
              this.battleTypes.push(k);
              backLink(this.id, [k], rul.battleTypes, "commendations");
            }

            else if (killStatuses.includes(k)) {
              deed.status = k;
            } else if (killFactions.includes(k)) {
              deed.faction = k;
            } else if (rul.alienRaces[k]) {
              deed.race = k
              backLink(this.id, [k], rul.alienRaces, "commendations");
            } else if (rul.units[k]) {
              deed.unit = k
              backLink(this.id, [k], rul.units, "commendations");
            } else if (rul.items[k]) {
              deed.item = k
              backLink(this.id, [k], rul.items, "commendations");
            } else {
              deed[k] = true;
            }
          }

          if (deed.type || deed.element) {
            if (!deed.type) {
              backLink2(this, rul.damageTypes[deed.element].items, rul.items, "commendations", "items");
            } else if (!deed.element) {
              backLink2(this, rul.battleTypes[deed.type]["items"], rul.items, "commendations", "items");
            } else {
              let items = rul.damageTypes[deed.element].items.filter(id => rul.items[id]?.internalBattleType == deed.type)
              backLink2(this, items, rul.items, "commendations", "items");
            }
          }

          this.kcd.push(deed);
          group.push(deed);
        }
        this.killCriteria2.push(group);
      }
    }
  }

  matchesItem(item: Item) {
    let id = item.id;
    for (let deed of this.kcd) {
      if (deed.item == id)
        return true;
      if (deed.element == null && deed.type == null)
        continue;
      if (deed.element != null && !item.damageTypes?.includes(deed.element))
        continue;
      if (deed.type != null && item.battleType != deed.type)
        continue;
      return true;
    }
    return false;
  }

  sortField(n: string) {
    if (n == null)
      return;
    let fb = this.finalBonus;
    if (fb && n != "id") {
      if (fb[n])
        return fb[n];
      if (statsList.includes(n))
        return fb["stats"] ? fb["stats"][n] || 0 : 0;
      if (this.finalBonus.recovery && n.substring(0, 9) == "recovery.") {
        return this.finalBonus.recovery[n.substring(9)]?.flatOne;
      }
    }

    return this[n];
  }
}

export class Research extends Entry {
  getOneFree: string[];
  unlocks: string[];
  dependencies: string[];
  leadsTo: string[];
  freeFrom: string[];
  manufacture: string[];
  requiresBaseFunc: string[];
  lookup: string;
  seeAlso: string[];
  allowsBuying: string[];
  spawnedItem: string;

  constructor(raw: any) {
    super(raw, "research");
    Service.add("allowsResearching", this.name, this.requiresBaseFunc);
  }
}

export class Service {
  constructor(public id: string) {
    Article.create(id, "SERVICES");
  }

  static add(prop: string, id: string, entries: string[]) {
    if (entries) {
      for (let s of entries) {
        if (!(s in rul.baseServices)) rul.baseServices[s] = new Service(s);
        if (!(prop in rul.baseServices[s])) rul.baseServices[s][prop] = [];
        rul.baseServices[s][prop].push(id);
      }
    }
  }
}

export class AlienDeployment extends Entry {
  startingCondition: string;
  data: any[];
  loot: string[];

  constructor(raw: any) {
    super(raw, "alienDeployments");
    let allItems = new Set<string>();
    for (let d of this.data || []) {
      if (Array.isArray(d.itemSets)) {
        let items = d.itemSets.flat() as string[];
        for (let item of items)
          allItems.add(item)
      }
    }
    this.loot = [...allItems];
  }
}

export class CraftWeapon extends Entry {
  weaponType: string;
  requiresBuyBaseFunc: string[];

  constructor(raw: any) {
    super(raw, "craftWeapons");
    Service.add("canBuy", this.type, this.requiresBuyBaseFunc);
    //if(Number.isInteger(this.weaponType))
    this.weaponType = "weaponType" + (this.weaponType || 0)
    Entry.reserve({ id: this.weaponType }, "weaponTypes");
  }

}

export class Craft extends Entry {
  startingConditions: string[];
  weaponTypes: string[][];
  allWeaponTypes: string[];
  sprite: number;

  constructor(raw: any) {
    super(raw, "crafts");
    this.allWeaponTypes = this.allWeaponTypes || [];
    if (this.weaponTypes) {
      for (let slot in this.weaponTypes) {
        if (!Array.isArray(this.weaponTypes[slot]))
          this.weaponTypes[slot] = [this.weaponTypes[slot]] as any;
        this.weaponTypes[slot] = this.weaponTypes[slot].map(n => {
          let id = "weaponType" + n;
          Entry.reserve({ id }, "weaponTypes");
          this.allWeaponTypes.push(id);
          return id;
        })
      }
      this.allWeaponTypes = [...new Set(this.allWeaponTypes)];
    }
    //this.sprite = rul.obsSprite("baseSprite", +this.sprite + 33);
  }
}

export class Facility extends Entry {
  aliens: number;
  prisonType: number;
  provideBaseFunc: string[];
  requiresBaseFunc: string[];
  forbiddenBaseFunc: string[];
  buildCostItems: { [key: string]: { [key: string]: number } };

  constructor(raw: any) {
    super(raw, "facilities")

    Service.add("providedBy", this.type, this.provideBaseFunc);
    Service.add("allowsBuilding", this.type, this.requiresBaseFunc);
    Service.add("forbidsBuilding", this.type, this.forbiddenBaseFunc);
    if (this.aliens) {
      Service.add("providedBy", this.type, [`prisonType${this.prisonType || 1}`]);
    }
    if(!this.prisonType && this.aliens)
      this.prisonType = 1;
  }

  get kennel() {
    return this.prisonType == 2 ? this.aliens : null;
  }

  get prison() {
    return this.prisonType == 2 ? null : this.aliens;
  }

}

export class StartingConditions extends Entry {
  allowedCraft: string[];
  allowedItemCategories: string[];
  allowedArmors: string[];
  forbiddenArmors: string[];
  allowedSoldierTypes: string[];
  forbiddenSoldierTypes: string[];
  allowedVehicles: string[];
  deployments: string[];

  constructor(raw: any) {
    super(raw, "startingConditions")
  }
}

export type Stats = {
  tu: number;
  stamina: number;
  health: number;
  bravery: number;
  reactions: number;
  firing: number;
  throwing: number;
  strength: number;
  psiStrength: number;
  psiSkill: number;
  melee: number;
}

export class Unit extends Entry {
  stats: Stats;
  armor: string;
  race: string;
  builtInWeaponSets: string[][];

  constructor(raw: any) {
    super(raw, "units")
    for (let k in { ...raw}) {
      if (typeof raw[k] == "string" || typeof raw[k] == "number") {
        rul.unitFields.add(k);
      }
    }

    let armor = rul.armors[raw.armor];
    if (armor) {
      armor.users = armor.users || [];
      armor.users.push(this.type);
    }
    if (this.builtInWeaponSets) {
      let weapons = new Set(this.builtInWeaponSets.flat());
      for (let w of weapons) {
        let item = rul.items[w];
        if (item) {
          item.heldBy = item.heldBy || new Set<string>();
          item.heldBy.add(this.type)
        }
      }
    }
  }

  sortField(n: string) {
    if (statsList.includes(n))
      return this.stats ? this.stats[n] || 0 : 0;
    return this[n]
  }

}

let defaultRange = { snap: 15, auto: 7, aimed: 200 };

export class Attack {
  possible = false;
  cost: { time: number; energy: number };
  flatTime = false;
  damage: number;
  damageBonus: { [key: string]: number };
  damageType: number;
  accuracy: number;
  accuracyMultiplier: { [key: string]: number };
  alter: { [key: string]: string };
  shots: number = 1;
  range: number;
  pellets: number = 1;
  name: string;
  tuPercent: number;

  constructor(public item: Item, public mode: string) {
    let capMode = mode.charAt(0).toUpperCase() + mode.substr(1);

    let isDefaultAttack =
      (mode == "ammo" && item.battleType == 2) ||
      (mode == "melee" && item.battleType == 3) ||
      (mode == "psi" && item.battleType == 9) ||
      (mode == "throw" && [4, 5].includes(item.battleType));

    if (mode == "throw" && !isDefaultAttack) return null;

    let exists =
      item["accuracy" + capMode] || item["cost" + capMode] || isDefaultAttack;

    if (!exists) return null;

    if (mode == "melee" && item.battleType != 3) {
      this.damage = item.meleePower;
      this.damageBonus = item.meleeBonus;
      this.damageType = item.meleeType;
    } else if (!item.compatibleAmmo) {
      this.damage = item.power;
      this.damageBonus = item.damageBonus;
      this.damageType = item.damageType;
    }

    this.pellets = item.shotgunPellets || 1;

    this.shots = mode == "auto" ? item.autoShots || 3 : 1;
    this.name = mode.substr(0, 1).toUpperCase() + mode.substr(1);

    let confId = "conf" + this.name;
    if (confId in item) {
      let conf = item[confId];
      if (conf.name) this.name = rul.str(conf.name);
      if (conf.shots) this.shots = conf.shots;
      delete item[confId];
    }

    if (item[mode + "AttackName"])
      this.name = rul.str(item[mode + "AttackName"]);

    if (mode == "melee") this.alter = item.meleeAlter;

    if (item.battleType == 3 || mode != "melee") this.alter = item.damageAlter;

    if (this.alter && this.alter.ResistType) {
      let dType = Number(this.alter.ResistType);
      if (Number.isNaN(this.damageType)) {
        console.error(this.item.id + "attack has string damage type")
      } else {
        this.damageType = dType;
        item.addDamageType(this.damageType);
      }
    }

    if (mode != "ammo") {
      if (
        ((mode == "melee" && item.battleType == 3) || mode != "melee") &&
        item.flatRate
      )
        this.flatTime = item.flatRate;

      if (item["flat" + capMode] && item["flat" + capMode].time)
        this.flatTime = true;

      if (capMode == "Psi") capMode = "Use";

      this.cost = this.cost = item["cost" + capMode] || {
        time: item["tu" + capMode],
        energy: 0,
      };

      this.accuracy = item["accuracy" + capMode] || 100;

      let accuracyMultiplier =
        mode == "throw"
          ? item.throwMultiplier
          : mode == "melee"
            ? item.meleeMultiplier
            : item.accuracyMultiplier;

      if (!accuracyMultiplier) {
        let defaultAccuracyStat =
          mode == "throw" ? "throwing" : mode == "melee" ? "melee" : "firing";
        accuracyMultiplier = {};
        accuracyMultiplier[defaultAccuracyStat] = 1;
      }

      this.accuracyMultiplier = accuracyMultiplier;

      if (this.damageType != null) {
        item.addDamageType(Number(this.damageType));
      }

      for (let k in this.accuracyMultiplier || [])
        backLink(item.id, [k], "stats", "weaponDamage");

    }

    if (mode + "Range" in item) {
      this.alter = Object.assign({}, this.alter || {});
      this.alter.range = item[mode + "Range"];
    }

    for (let k in this.alter) {
      if (k == "damageType" || k == "ResistType")
        this.alter[k] = damageTypes[this.alter[k]];
    }

    this.range =
      item[mode + "Range"] ||
      item[mode.substr(0, 3) + "Range"] ||
      (this.alter && this.alter.range) ||
      defaultRange[mode];

    if (item.maxRange < this.range) {
      this.range = item.maxRange;
    }

    if (this.alter && item.maxRange < +this.alter.range)
      this.alter.range = `${item.maxRange}`;

    this.possible = true;

    if(!this.flatTime && this.cost?.time){
      this.tuPercent = this.cost.time;
    }

    rul.attacks.push(this);
  }

  sortField(n: string) {

    switch (n) {
      case "internalBattleType":
        return this.item.internalBattleType;

      case "damageType":
        return damageTypes[this.damageType];

      case "item":
        return this.item.id;

      case "id":
        return this.item.id;
    }

    if (this.alter && this.alter[n]) {
      return this.alter[n];
    }

    if (this.damageBonus && this.damageBonus[n]) {
      return this.damageBonus[n];
    }

    if (n?.substring(0, 4) == "acc*" && this.accuracyMultiplier) {
      return this.accuracyMultiplier[n.substring(4)]
    }

    return this[n];
  }
}

export class Article {
  id: string;
  image_id: string;
  type_id: string;
  _text: string;
  _title: string;
  sections: Section[] = [];
  requires: string[];

  get section() {
    return this.sections[0]?.id;
  }

  static create(id: string, section: string) {
    if (rul.sections[section] == null) {
      new Section(section, true);
    }

    if (id in rul.articles) {
      let article = rul.articles[id];
      if (section && !article.sections.find(s => s.id == section)) {
        article.addToSection(section);
        //article.sections.push(rul.sections[section])
        rul.sections[section].add(article);
      }
      return article;
    }
    return new Article({ id, section });
  }

  constructor(raw: any) {
    this.id = raw.id;
    this._text = raw.text;
    this._title = raw.title || raw.id;
    this.image_id = raw.image_id;
    if (raw.requires)
      this.requires = Array.isArray(raw.requires) ? raw.requires : [raw.requires];

    rul.articles[this.id] = this;

    let id = raw.id;

    rul.articles[id] = this;

    if (raw.section) {
      this.addToSection(raw.section);
    }
  }

  addToSection(sectionId: string) {
    let section: Section;

    if (sectionId in rul.sections) section = rul.sections[sectionId];
    else section = rul.sections[sectionId] = new Section(sectionId);

    if (this.id != section.id) section.add(this);

    if (!this.sections.includes(section))
      this.sections.push(section)

    return section;
  }

  get text() {
    let t = rul.lang[this._text] || rul.lang[this.id + "_UFOPEDIA"] || rul.lang[rul.research[this.id]?.lookup];
    t = stripPediaMarkup(t);
    return t;
  }

  get title() {
    return rul.tr(this._title, { icon: "none" });
  }

}

export class Section {
  _articles: Article[] = [];

  get articles() {
    return this._articles;
  }

  constructor(public id: string, xpediaOwn = false) {
    rul.sections[id] = this;

    if (xpediaOwn) {
      rul.typeSectionsOrder.push(this);
    } else {
      rul.sectionsOrder.push(this);
    }

    Article.create(id, id);
  }

  get title() {
    return rul.tr(this.id);
  }

  add(article: Article) {
    if (!this._articles.includes(article)) this._articles.push(article);
    if (!article.sections.includes(this)) article.sections.push(this);
  }
}

export class Sprite {
  id: string;
  _path: string;
  modDir: string;

  constructor(raw: any) {
    this.id = raw.type || raw.typeSingle;
    this.modDir = raw.modDir;
    if (raw.files) {
      this._path = raw.files[0];
      if (obsTables[this.id]) {
        for (let [k, v] of Object.entries(raw.files)) {
          new Sprite({ modDir: this.modDir, type: obsTables[this.id], ind: k, fileSingle: v })
        }
      }
    }
    if (raw.fileSingle) this._path = raw.fileSingle;
    if (raw.ind) {
      rul.obs[this.id][raw.ind] = this;
    } else {
      rul.sprites[this.id] = this;
    }
  }

  get path() {
    let path = this.modDir + this._path;
    if (globalThis["gameDir"] && path[0] == "/") {
      path = globalThis["gameDir"] + path;
    } else if (globalThis["xpediaDir"] && path[0] != "/") {
      path = globalThis["xpediaDir"] + path;
    }
    return path;

  }

  async data() {
    let data = loadData(this.path);
    if (data != null)
      return data;
    else
      return this.path;
  }

  /*get extra(){
    return this.modDir + this._extra;
  }*/

}

export class Armor extends Entry {
  sprite: string;
  damageModifier: number[];
  armor: { [key: string]: number } = {};
  users: string[];
  startingConditions: string[] = [];
  size: number;
  layersDefinition;
  layersDefaultPrefix: string;
  spriteInv: string;
  storeItem: string;
  frontArmor: number;
  sideArmor: number;
  rearArmor: number;
  underArmor: number;
  units: string[];
  stats: string[];
  tags: string[];

  constructor(raw: any) {
    super(raw, "armors")
    if (!this.size)
      this.size = 1;

    this.armor = {
      Front: this.frontArmor,
      Side: this.sideArmor,
      Rear: this.rearArmor,
      Under: this.underArmor,
    };

    if (this.storeItem && rul.items[this.storeItem]) {
      let item = rul.items[this.storeItem];
      if (!item.armors) item.armors = [];
      item.armors.push(this.type);
    }

    for (let unit of this.units || []) {
      let s = rul.soldiers[unit];
      if (s) {
        s.armors = s.armors || [];
        s.armors.push(this.type);
      }
    }
  }

  async dollSprites(): Promise<{ [key: string]: string[] }> {
    let ds = {};
    if (this.layersDefinition) {
      let prefix = this.layersDefaultPrefix;
      for (let body in this.layersDefinition) {
        let layersDef = this.layersDefinition[body];
        let layers = [];
        for (let layer in layersDef) {
          let name = layersDef[layer];
          if (name && name.length) {
            let id = prefix + "__" + layer + "__" + name;
            layers.push(await rul.sprite(id));
          }
        }
        ds[body] = layers;
      }
    } else if (this.spriteInv) {
      let name: string = this.spriteInv;
      let l = name?.length;

      if (this.spriteInv + ".SPK" in rul.sprites) {
        ds = {
          0: [await rul.sprites[this.spriteInv + ".SPK"].data()],
        };
      } else {
        for (let s in rul.sprites) {
          if (s.substr(0, l) == name) {
            ds[s.substr(l, s.length - l - 4)] = [await rul.sprite(s)];
          }
        }
      }
    }
    console.log({ ds });
    return ds;
  }

  sortField(n:string, v) {
    if (statsList.includes(n))
      return this.stats ? this.stats[n] || 0 : 0;
    if (damageTypes.includes(n))
      return (this.damageModifier[damageTypes.indexOf(n)] || 0) * 100;
    if (this.tags && n in this.tags)
      return this.tags[n];

    if (n == "armorUsers") {
      if (v == "enemies")
        return Object.values(this.units || {}).length == 0
      if (v == "allies")
        return Object.values(this.units || {}).length > 0
      if (rul.soldiers[v]) {
        return this.units?.includes(v);
      }
    }

    if(n == "allowedIn"){      
      return this.allowedIn?.includes(v);
    }

    return this[n];
  }

}

export class Item extends Entry {
  //sprite: string;
  battleType: number;
  invWidth: number;
  invHeight: number;
  armors: string[];
  _attacks: Attack[];
  spawnedBy: string[];
  requiresBuyBaseFunc: string[];
  manufacture: { [key: string]: number };
  componentOf: { [key: string]: number };
  bigSprite: string;
  meleePower: number;
  meleeBonus: any;
  meleeType: number;
  power: number;
  damageBonus: any;
  damageType: number;
  shotgunPellets: number;
  meleeAlter: any;
  damageAlter: any;
  compatibleAmmo: string[];
  ammo: { compatibleAmmo: string[] }[];
  autoShots: number;
  flatRate: boolean;
  meleeMultiplier: any;
  throwMultiplier: any;
  accuracyMultiplier: any;
  compatibleWeapons: any;
  liveAlien: boolean;
  recover: boolean;
  prisonType: number;
  maxRange: number;
  categories: string[];
  requiresBuy: string[];
  commendations: string[];
  heldBy: Set<string>;
  dropoff: number;
  damageTypes: number[]
  psiVision: number;
  invSize: string;

  get sprite() {
    if (this.bigSprite) {
      return rul.obsSprite("big", +this.bigSprite);
    }
  }

  get internalBattleType() {
    let t = internalBattleTypes[this.battleType || 0]
    return t;
  }

  addDamageType(type: number) {
    this.damageTypes = this.damageTypes || [];
    addIfNew(this.damageTypes, type);
    backLink(this.id, [damageTypes[type]], "damageTypes", "items");
  }

  constructor(raw: any) {
    super(raw, "items")
    for (let k in { ...raw, ...(raw.damageAlter || {}) }) {
      if (typeof raw[k] == "string" || typeof raw[k] == "number" || raw.damageAlter && raw.damageAlter[k] != null) {
        rul.itemFields.add(k);
      }
    }

    //this.addToSection(this.internalBattleType);

    if (this.damageType)
      this.addDamageType(this.damageType)

    this.invWidth = this.invWidth || 1;
    this.invHeight = this.invHeight || 1;
    if (this.dropoff == null) this.dropoff = 2;

    let t = this as any;

    if ("flatThrow" in t) {
      t.flatThrowTime = t.flatThrow.time;
      delete t.flatThrow;
    }

    Service.add("canBuyItem", this.type, this.requiresBuyBaseFunc);

    if (this.categories) {
      for (let cat of this.categories) rul.addCategory(cat, this.type);
    }

    if (this.liveAlien && this.recover && !this.prisonType)
      this.prisonType = 1

    if (this.ammo) {
      this.compatibleAmmo = [...(this.compatibleAmmo || []), ...Object.values(this.ammo).map(a => a.compatibleAmmo).flat()]
    }

    for (let k in this.damageBonus || []) {
      let b = this.damageBonus[k];
      if (b != 0)
        backLink(this.id, [k], "stats", "weaponDamage");
      if (Array.isArray(b)) {
        for (let p in b)
          if (b[p] > 0)
            backLink(this.id, [k], "stats", `weaponDamage${p != '0' ? `<sup>${+p + 1}</sup>` : ""}`);
      }
    }

    for (let k in this.meleeMultiplier || [])
      backLink(this.id, [k], "stats", "meleeAccuracy");

    if (this.damageType != null) {
      backLink(this.id, [damageTypes[this.damageType]], "damageTypes", "items");
    }

    if (this.damageAlter?.ResistType) {
      let rt = this.damageAlter?.ResistType;
      backLink(this.id, [damageTypes[rt] || rt], "damageTypes", "items");
    }

    this.attacks();

    this.invSize = `${this.invWidth}×${this.invHeight}`;
  }

  attacks() {
    if (!this._attacks) {
      this._attacks = [];
      for (let mode of battleTypes) {
        let attack = new Attack(this, mode);
        if (attack.possible) {
          this._attacks.push(attack);
        }
      }
    }

    if (this.battleType == 2) {
      this._attacks[0].item = this;
      this._attacks[0].mode = "ammo";
    }

    return this._attacks;
  }


  sortField(n: string, v) {
    if (n === "category" && this.categories)
      return this.categories.includes(v) ? v : null;

    if (n === "damageTypes") {
      if (v !== true) {
        let i = damageTypes.indexOf(v)
        return this.damageTypes?.includes(i);
      } else {
        return this.damageTypes?.map(d => damageTypes[d])
      }
    }

    if (n === "damageType" && this.damageTypes) {
      return this.damageTypes.map(n => damageTypes[n])
    }

    if (this.damageAlter && this.damageAlter[n] != null)
      return this.damageAlter[n];

    return super.sortField(n, v);
  }


}

export default class Ruleset {
  articles: { [key: string]: Article } = {};
  articlesOrder: Article[] = [];
  sections: { [key: string]: Section } = {};
  sectionsOrder: Section[] = [];
  typeSectionsOrder: Section[] = [];
  sprites: { [key: string]: Sprite } = {};
  src: { ruls, langs, mods };
  raw: any = {};
  search: { [key: string]: Search } = {};
  ourArmors: string[];
  items: { [key: string]: Item } = {};
  categories: { [key: string]: string[] } = {};
  manufactureCategories: { [key: string]: string[] } = {};
  armors: { [key: string]: Armor } = {};
  units: { [key: string]: Unit } = {};
  crafts: { [key: string]: Craft } = {};
  facilities: { [key: string]: Facility } = {};
  enviroEffects: { [key: string]: Entry } = {};
  craftWeapons: { [key: string]: CraftWeapon } = {};
  weaponTypes: { [key: string]: Entry } = {};
  itemTypes: { [key: string]: Entry } = {};
  stats: { [key: string]: Entry } = {};
  battleTypes: { [key: string]: Entry } = {};
  countries: { [key: string]: Entry } = {};
  damageTypes: { [key: string]: DamageType } = {};
  research: { [key: string]: Research } = {};
  soldierBonuses: { [key: string]: Entry } = {};
  commendations: { [key: string]: Commendation } = {};
  soldierTransformation: { [key: string]: SoldierTransformation } = {};
  soldiers: { [key: string]: Soldiers } = {};
  alienDeployments: { [key: string]: AlienDeployment } = {};
  alienRaces: { [key: string]: Entry } = {};
  manufacture: { [key: string]: Manufacture } = {};
  startingConditions: { [key: string]: StartingConditions } = {};
  events: { [key: string]: Event } = {};
  eventScripts: { [key: string]: EventScript } = {};
  missionScripts: { [key: string]: MissionScript } = {};
  alienMissions: { [key: string]: Entry } = {};
  ufos: { [key: string]: Entry } = {};
  terrains: { [key: string]: Entry } = {};
  obs = { big: [], floor: [], hand: [], base: [], icon: [] };
  sounds: string[] = [];
  config: any;
  baseServices: { [key: string]: Service } = {};
  redirect: { [key: string]: string } = {};
  attacks: Attack[] = [];
  globeMarkers: string[];
  pageScripts = {STR_PALETTE_CONVERTER:initPedipal}

  itemFields = new Set<string>();
  unitFields = new Set<string>();

  lang: { [key: string]: string } = {};
  langs: { [key: string]: { [key: string]: string } } = {};
  mods: { [key: string]: { [key: string]: string } } = {};
  langName: string;
  langNames: string[];
  convertedLangs = {};


  addCategory(catName: string, id: string, where?) {
    if (where == null)
      where = rul.categories;
    let cat = where[catName] || [];
    if (!cat.includes(id)) cat.push(id);
    where[catName] = cat;
  }

  damageTypeName(type: number) {
    return this.lang[damageTypes[type]];
  }

  sound(id: number) {
    return this.sounds[id];
  }

  obsSprite(type: string, num: number) {
    let path = (this.obs[type] || [])[num]?.path;
    if (!path)
      return emptyImg;

    return loadData(path);
  }

  combineFiles(data: any[], reversed = false) {
    for (let file of reversed ? data.reverse() : data) {
      if (file == null)
        continue;
      for (let key in file) {
        let table = file[key];

        let modDir = file.file.modDir;
        if (Array.isArray(table))
          for (let entry of table) {
            if (typeof entry == "object" && !Array.isArray(entry))
              entry.modDir = modDir;
          }

        if (key.substr(0, 4) == "lang") {
          Object.assign(this.lang, table);
        }
        if (!(key in this.raw)) {
          this.raw[key] = table;
        } else {
          let old = this.raw[key];
          let adding = table;

          if (old.concat) {
            this.raw[key] = old.concat(adding);
          } else {
            if (Array.isArray(adding))
              for (let k of adding) {
                if (k in old && typeof old[k] == "object")
                  Object.assign(old[k], adding[k]);
                else
                  old[k] = adding[k];
              }
          }
        }
      }
    }
  }

  mergeRuls(reversed = false) {
    for (let categoryName in this.raw) {
      let merged = {};
      let deleted = {};

      if (categoryName == "extraSprites")
        continue;

      let category = this.raw[categoryName];
      if (!Array.isArray(category)) {
        continue;
      }

      for (let data of category) {
        let id =
          data.type || data.id || data.name || data.delete || data.typeSingle;

        if (!id || deleted[id]) continue;

        if ("delete" in data) {
          if (reversed) deleted[id] = true;
          else delete merged[id];
          continue;
        }

        if (id && id in merged) {
          if (reversed) {
            for (let k in data) {
              if (!(k in merged[id])) merged[id][k] = data[k];
            }
          } else {
            if (data.files) {
              let files = { ...merged[id].files, ...data.files }
              Object.assign(merged[id], data);
              merged[id].files = files;
            } else {
              if (Array.isArray(data)) {
                debugger;
                merged[id] = merged[id].concat(data);
              } else
                Object.assign(merged[id], data);
            }
          }
        } else {
          merged[id] = data;
        }
      }
      this.raw[categoryName] = Object.values(merged);
    }
  }

  convertLang(langName: string) {
    if (this.convertedLangs[langName])
      return false;

    let lang = this.langs[langName];

    if (lang == null || lang.ALREADYCONVERTED)
      return;
    lang.ALREADYCONVERTED = "true";

    if (langName == defaultLanguage)
      lang = {
        ...{
          dependencies: "STR_DEPENDS_ON",
          seeAlso: "STR_ITEM_REQUIRED",
          requiresBaseFunc: "STR_SERVICES_REQUIRED",
          freeFrom: "STR_GET_FOR_FREE_FROM",
          leadsTo: "STR_LEADS_TO",
          unlocks: "STR_UNLOCKS",
          disables: "STR_DISABLES",
          getOneFree: "STR_GIVES_ONE_FOR_FREE",
          manufacture: "STR_REQUIRED_BY",
          randomProducedItems: "STR_RANDOM_PRODUCTION_DISCLAIMER",
          cost: "STR_COST",
        }, ...lang
      };

    /*for (let k in lang) {
      let text: string = lang[k];
      if (typeof text === "string") {
        text = text.replace(/^({NEWLINE})+/, "");
        text = text.replace(/{NEWLINE}/g, "<br/>");
        text = text.replace(/{rul.str\("([^"]*)"\)}/g, (match, p1) =>
          rul.str(p1)
        );
        lang[k] = text;
      }
    }*/


    this.convertedLangs[langName] = true;
    return true;
  }

  parseType(type, klass) {
    for (let data of this.raw[type] || []) {
      new (klass || Entry)(data, type)
    }
  }

  deleteModDirs() {
    for (let tableKind in this.raw)
      if (Array.isArray(this.raw[tableKind]))
        for (let table of this.raw[tableKind]) {
          if ("modDir" in table)
            delete table.modDir;
        }
    //if (this.raw.musics?.lengths) this.sounds = [...this.sounds, ...this.raw.musics.map(v=>`SOUND/${v.type}.ogg`)]
  }

  parse(data: any) {
    let reversed = false;

    this.combineFiles(data, reversed);

    this.mergeRuls(reversed);

    this.sounds = []

    if (this.raw?.extraSounds?.length)
      for (let table of this.raw.extraSounds) {
        for (let e of Object.entries(table.files)) {
          this.sounds[e[0]] = table.modDir + e[1]
        }
      }

    if (this.raw?.extraSprites?.length)
      for (let spriteData of this.raw?.extraSprites) new Sprite(spriteData);

    this.deleteModDirs();

    this.parseArticles(this.raw.ufopaedia);

    for (let [typeName, typeConstructor] of Object.entries(entryConstructors) || []) {
      this.parseType(typeName, typeConstructor);
    }

    function blockItems(blocks) {
      if (blocks == null)
        return [];
      blocks = Object.values(blocks || []);
      if (blocks == null)
        return [];
      blocks = blocks.flat();
      let x = blocks.map(b => b.randomizedItems || []).flat().map(c => c?.itemList || []).flat();
      let y = blocks.map(b => b.items ? Object.keys(b.items) : []).flat();
      return [...x, ...y];
    }

    new Section("ATTACKS", true);

    crosslink(this.eventScripts, "_xcomBaseInCountryTrue", "countries", "events");
    crosslink(this.units, "race", "alienRaces", "hasThisRace");
    crosslink(this.units, "rank", "alienRanks", "hasThisRank");
    crosslink(this.alienRaces, "members", "units", "memberOf");
    crosslink(this.soldierTransformation, "forbiddenPreviousTransformations", this.soldierTransformation, "blocksTransformations");
    crosslink(this.alienDeployments, "loot", this.items, "loot");
    crosslink(this.alienDeployments, "enviroEffects", this.enviroEffects, "deployments");
    crosslink(this.craftWeapons, "weaponType", this.weaponTypes, "weapons", "weaponTypes");
    crosslink(this.crafts, "allWeaponTypes", this.weaponTypes, "crafts", "weaponTypes");
    crosslink(this.alienDeployments, "startingCondition", this.startingConditions, "deployments");
    crosslink(this.missionScripts, "researchNeeded", this.research, "unlocksMissions");
    crosslink(this.missionScripts, "researchForbidden", this.research, "stopsMissions");
    crosslink(this.alienMissions, t => Object.values(t.raceWeights)?.map(w => Object.keys(w)).flat(), "alienRaces", "missions");
    crosslink(this.ufos, t => blockItems(t.battlescapeTerrainData?.mapBlocks), this.items, "ufos");
    crosslink(this.terrains, t => blockItems(t.mapBlocks), this.items, "terrains");
    crosslink(this.terrains, "civilianTypes", this.units, "terrains");
    crosslink(this.items, "spawnUnit", this.units, "spawnedBy");
    crosslink(this.items, "internalBattleType", "battleTypes", "items");
    crosslink(this.items, "supportedInventorySections", "inventorySections", "items");
    crosslink(this.commendations, "damageTypes", this.damageTypes, "commendations");
    crosslink(this.events, "researchList", this.research, "events");
    crosslink(this.armors, "builtInWeapons", this.items, "builtIn");
    crosslink(this.armors, "specialWeapon", this.items, "builtIn");
    crosslink(this.eventScripts, "_relatedEvents", this.events, "relatedScripts");
    crosslink(this.eventScripts, "_relatedResearch", this.research, "relatedScripts");
    crosslink(this.manufacture, "spawnedPersonType", this.soldiers, "manufacture");
    crosslink(this.events, "spawnedPersonType", this.soldiers, "events");
    crosslink(this.missionScripts, "_missions", this.alienMissions, "scripts");
    crosslink(this.alienDeployments, "terrains", this.terrains, "alienDeployments");
    crosslink(this.terrains, "enviroEffects", this.enviroEffects, "terrains");

    let all = {
      Armors: Object.values(this.armors).filter(a => a.units).map(a => a.id),
      SoldierTypes: Object.keys(rul.soldiers),
      Vehicles: Object.keys(rul.units).filter(k=>rul.items[k]?.battleType == 3),
      Craft: Object.keys(rul.crafts)
    }

    for (let sc of Object.values(this.startingConditions)) {
      if (sc.forbiddenSoldierTypes?.length > 0) {
        let forbiddenSoldierTypes = new Set(sc.forbiddenSoldierTypes);
        sc.allowedSoldierTypes = Object.keys(rul.soldiers).filter(st => !forbiddenSoldierTypes.has(st));
      }

      sc.allowedSoldierTypes ||= all.SoldierTypes;
      sc.allowedArmors ||= all.Armors;

      if (sc.forbiddenArmors?.length > 0) {
        let forbiddenArmors = new Set(sc.forbiddenArmors);
        sc.allowedArmors = all.Armors.filter(a => !forbiddenArmors.has(a));
      }

      let armorsAllowedForSoldiers = new Set();
      for(let st of sc.allowedSoldierTypes)
        for(let a of rul.soldiers[st].armors)
          armorsAllowedForSoldiers.add(a)
      
      sc.allowedArmors = sc.allowedArmors.filter(a=>armorsAllowedForSoldiers.has(a));
    }

    for (let option of [
      ["Craft", this.crafts],
      ["SoldierTypes", this.soldiers],
      ["Vehicles", this.units],
      ["Armors", this.armors],
    ] as [string,{[key:string]:Craft|Soldiers|Unit|Armor}][]
    ) {
      for (let sc of Object.values(this.startingConditions)) {
        if(sc[`allowed${option[0]}`])
          sc[`forbidden${option[0]}`] = all[option[0]].filter(e=>!sc[`allowed${option[0]}`].includes(e))
      }
      crosslink(this.startingConditions, `allowed${option[0]}`, option[1], "allowedIn");
      crosslink(this.startingConditions, `forbidden${option[0]}`, option[1], "forbiddenIn");
    }

    for (let c of Object.values(this.commendations)) {
      c.parseKillCriteria();
    }

    for (let facility of Object.values(this.facilities)) {
      if (facility.buildCostItems) {
        for (let itemName of Object.keys(facility.buildCostItems)) {
          let item = rul.items[itemName];
          if (!item) continue;
          if (!item.componentOf) item.componentOf = {};
          item.componentOf[facility.type] =
            facility.buildCostItems[itemName].build;
          if (!item.manufacture) item.manufacture = {};
          item.manufacture[facility.type] =
            facility.buildCostItems[itemName].refund;
        }
      }
    }

    for (let item of Object.values(this.items)) {

      for (let ammoId of item.compatibleAmmo || []) {
        let ammo = this.items[ammoId];
        if (ammo) {
          ammo.compatibleWeapons = ammo.compatibleWeapons || [];
          ammo.compatibleWeapons.push(item.type);
        }
      }
      for (let rb of item.requiresBuy || []) {
        let r = this.research[rb];
        if (r) {
          r.allowsBuying = [...(r.allowsBuying || []), item.type];
        }
      }

    }

    for (let research of [...Object.values(this.research)]) {
      backLink(research.name, research.dependencies, rul.research, "leadsTo");
      backLink(research.name, research.getOneFree, rul.research, "freeFrom");

      if (
        research.lookup &&
        research.name != research.lookup &&
        this.research[research.lookup]
      ) {
        let lookup = this.research[research.lookup];
        lookup.seeAlso = lookup.seeAlso || [];
        lookup.seeAlso.push(research.name);
        let lookUpArticle = this.article(research.lookup);
        let article = this.article(research.name);
        if (!rul.lang[article.id]) article._title = lookUpArticle._title;
        article._text = lookUpArticle._text;
        article.image_id = lookUpArticle.image_id;
      }
      if (research.spawnedItem) {
        let item = rul.items[research.spawnedItem];
        item.spawnedBy = item.spawnedBy || [];
        item.spawnedBy.push(research.name);
      }
    }

    this.ourArmors = Object.values(this.armors)
      .filter((a) => a.units)
      .map((a) => a.type);

    for (let cat of Object.keys(this.categories)) {
      if (this.categories[cat].length)
        Article.create(cat, "CATEGORIES");
    }

    for (let cat of Object.keys(this.manufactureCategories)) {
      if (this.manufactureCategories[cat].length)
        Article.create(cat, "MANUFACTURE_CATEGORIES");
    }

    this.loadMarkers()

    console.log("parse done");
  }

  async loadMarkers(){
    if(rul.globeMarkers)
      return rul.globeMarkers;
    if(!window["GlobeMarkers"]){
      let markers = this.sprites["GlobeMarkers"];
      let path = markers?.path;
      /*let image = await util.loadImage(path);
      console.log(util.canvasToBase64(util.imageToCanvas(image)));*/
      let dataUrl = await util.pathToDataUrl(path);
      window["GlobeMarkers"] = dataUrl;
    }
    let dataURL = window["GlobeMarkers"];
    
    let canvas = imageToCanvas(await loadImage(dataURL));
    let parts = util.splitCanvas(canvas)
    rul.globeMarkers = parts.map(p=>p.toDataURL());
    markersLoaded.set(true);
    return rul.globeMarkers;
  }

  sortedTypeSections() {
    return this.sortStrings(this.typeSectionsOrder.map(s => s.id)).map(id => this.sections[id]);
  }

  parseArticles(data: any) {
    if (!data)
      return;
    for (let articleData of data) {
      if (articleData.id) {
        let article = new Article(articleData);
        this.articlesOrder.push(article);
        this.articles[article.id] = article;
      }
    }
  }

  findNextArticle(current: Article, delta: number, currentSection: Section, sorted = false) {
    if (!current) return null;
    if (!currentSection)
      currentSection = current.sections[0];
    let list = currentSection ? currentSection.articles : this.articlesOrder;
    if (sorted) {
      list = this.sortArticlesByName(list);
    }
    let index = list.findIndex((a) => a.id == current.id);
    if (index != undefined) {
      let nextIndex = index + delta;
      let nextArticle = list[nextIndex];
      return nextArticle;
    }
  }

  sortArticlesByName(list: Article[]) {
    return this.sortStrings(list.map(a => a.id)).map(id => this.articles[id]);
  }

  str(id: string) {
    return this.lang[id] || id;
  }

  icon(name: string) {
    return this.langs?.icon ? this.langs.icon[name] : null;
  }

  tr(id: string, options?: { icon?: string, capital?: boolean, nobr?: number, notip?: boolean }) {
    if (id == null)
      return "";

    const bigSnakeCase = /^[A-Z0-9_]+$/;

    let icon = this.icon(id);

    let str = id;

    if (id in rul.lang) {
      str = rul.lang[id]
      str = stripPediaMarkup(str);
    } else if (typeof id == "string") {
      if (icon)
        str = null;
      else {
        if (str.substr(0, 4) == "STR_")
          str = str.substr(4);

        if (str.match(bigSnakeCase))
          str = str.replace(/_/g, " ");

        str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
      }
    }

    if (options?.capital)
      str = capital(str);

    if (str?.length < options?.nobr)
      str = `<nobr>${str}</nobr>`

    if (icon) {
      if (options?.icon == "monospace")
        str = `<div class='inem'>${icon}</div>${str || ""}`
      else if (options?.icon == "simple")
        str = `${icon}${str || ""}`
      else if (options?.icon != "none")
        str = `<div class='comem'>${icon}</div>${str || ""}`
    }

    if (!options?.notip && ('tip_' + id) in rul.lang) {
      str = `<span tooltip=${'tip_' + id}>${str}<sup class="tipmark">?</sup></span>`;
    }
    return str;
  }

  hasSprite(id: string) {
    return this.sprites[id];
  }

  async sprite(id: string | Promise<any>, onlyIfExists = false) {
    if (id instanceof Promise)
      return id;
    if (id in this.sprites)
      return this.sprites[id].data();

    return onlyIfExists ? null : id;
  }

  constructor() {
    rul = this;
  }

  load({ ruls, langs, mods }) {
    this.src = { ruls, langs: {}, mods };
    this.mods = mods;
    this.langs = langs;
    for (let langName in this.langs) {
      this.src.langs[langName] = { ...this.langs[langName] };
    }
    let langWeight = Object.fromEntries(Object.keys(langs).map(n => [n, n == defaultLanguage ? 1e6 : Object.keys(langs[n]).length]));
    this.langNames = Object.keys(langs).sort((a, b) => langWeight[b] - langWeight[a]);
    if (this.langs.icon)
      this.langNames.splice(this.langNames.indexOf("icon"));

    for (let name of this.langNames) {
      if (!this.langs[defaultLanguage][name]) {
        let country = name.match(/([a-z]+)/i);
        if (country?.length > 0) {
          let flag = getFlagEmoji(country[1]);
          if (flag)
            this.langs[defaultLanguage][name] = flag;
        }
      }
    }

    this.parse(ruls);
    this.convertLang(defaultLanguage);
    let l = Object.keys(this.langs);
    if (l.length == 3) {
      this.selectLang(l.find(n => n != defaultLanguage && n != "icon"));
    } else {
      this.selectLang(defaultLanguage)
    }
  }

  selectLang(name: string) {
    if (!this.langs[name]) {
      console.log("no language", name);
      return false;
    }

    this.langName = name

    if (name == defaultLanguage) {
      this.lang = this.langs[defaultLanguage];
    } else {
      this.convertLang(name)
      this.lang = { ...this.langs[defaultLanguage], ...this.langs[name] };
    }

    if (!this.search[name])
      this.search[name] = new Search();

    return true;
  }

  linksByType(type: string) {
    switch (type) {
      case "CONDITIONS":
        return Object.keys(this.startingConditions).map(
          (a) => "CONDITIONS_" + a
        );
    }
    return [];
  }

  bodiesCompare(strs: string[]) {
    for (let i in strs) {
      if (strs[i].length == 2)
        strs[i] =
          (strs[i].charAt(0) == "M" ? "A" : "B") + "0" + strs[i].substr(1);
    }
    return strs[0] > strs[1] ? 1 : -1;
  }

  article(id: string) {
    let redirect = this.redirect[id];
    let a = (redirect && this.articles[redirect]) || this.articles[id];
    return a;
  }

  sortStrings(s: string[]) {
    let tl: [string, string][] = s.map(s => [s, this.tr(s)])
    tl = tl.sort((a, b) => a[1] > b[1] ? 1 : -1)
    return tl.map(a => a[0]);
  }

  /*sortIds(s: {id:string}[]) {
    return this.sortStrings(s.map(v=>v.id)).map(v=?);
  }*/

}

/**Main class to figure what to do with data in Ruls */
export const entryConstructors = {
  items: Item,
  battleTypes: Entry,
  soldiers: Soldiers,
  alienRaces: Entry,
  countries: Entry,
  armors: Armor,
  units: Unit,
  crafts: Craft,
  craftWeapons: CraftWeapon,
  weaponTypes: Entry,
  ufos: Entry,
  facilities: Facility,
  events: Event,
  eventScripts: EventScript,
  soldierTransformation: SoldierTransformation,
  startingConditions: StartingConditions,
  missionScripts: MissionScript,
  alienMissions: Entry,
  alienDeployments: AlienDeployment,
  research: Research,
  soldierBonuses: Entry,
  manufacture: Manufacture,
  enviroEffects: Entry,
  terrains: Entry,
  mapScripts: Entry,
  stats: Entry,
  damageTypes: DamageType,
  commendations: Commendation,
}

export const statsList = ["tu", "stamina", "health", "bravery", "reactions", "firing", "throwing", "strength", "psiStrength", "psiSkill", "melee"];

export const damageTypes = [
  "STR_DAMAGE_NONE",
  "STR_DAMAGE_ARMOR_PIERCING",
  "STR_DAMAGE_INCENDIARY",
  "STR_DAMAGE_HIGH_EXPLOSIVE",
  "STR_DAMAGE_LASER_BEAM",
  "STR_DAMAGE_PLASMA_BEAM",
  "STR_DAMAGE_STUN",
  "STR_DAMAGE_MELEE",
  "STR_DAMAGE_ACID",
  "STR_DAMAGE_SMOKE",
  "STR_DAMAGE_10",
  "STR_DAMAGE_11",
  "STR_DAMAGE_12",
  "STR_DAMAGE_13",
  "STR_DAMAGE_14",
  "STR_DAMAGE_15",
  "STR_DAMAGE_16",
  "STR_DAMAGE_17",
  "STR_DAMAGE_18",
  "STR_DAMAGE_19",
  "STR_DAMAGE_20",
  "STR_DAMAGE_21",
  "STR_DAMAGE_22",
  "STR_MANA",
];

export const internalDamageTypes = [
  "DT_NONE", "DT_AP", "DT_IN", "DT_HE", "DT_LASER", "DT_PLASMA", "DT_STUN", "DT_MELEE", "DT_ACID", "DT_SMOKE",
  "DT_10", "DT_11", "DT_12", "DT_13", "DT_14", "DT_15", "DT_16", "DT_17", "DT_18", "DT_19"
];

export const killStatuses = ["STATUS_DEAD", "STATUS_UNCONSCIOUS", "STATUS_PANICKED", "STATUS_TURNING"];
export const killFactions = ["FACTION_HOSTILE", "FACTION_NEUTRAL", "FACTION_PLAYER"]

export const battleTypes = [
  "ammo",
  "melee",
  "snap",
  "aimed",
  "auto",
  "throw",
  "psi",
  "panic",
  "mindControl",
  "use",
]

export const internalBattleTypes = [
  "BT_NONE",
  "BT_FIREARM",
  "BT_AMMO",
  "BT_MELEE",
  "BT_GRENADE",
  "BT_PROXIMITYGRENADE",
  "BT_MEDIKIT",
  "BT_SCANNER",
  "BT_MINDPROBE",
  "BT_PSIAMP",
  "BT_FLARE",
  "BT_CORPSE",
]

export const battleStats = ["time", "energy", "morale", "health", "stun", "mana"]


function backLink2(entry: Entry, list: string[] | { [key: string]: any }, to: any, field: string, field2?: string) {
  backLink(entry.id, list, to, field);
  addAllIfNew(entry[field2], list as any);
}

function backLink(id: string, list: string[] | { [key: string]: any }, to: any, field: string, collection?: string) {
  /*if(list && list.includes("STR_LASER_PISTOL_CLIP_HI") && field == "commendation") 
    debugger;*/
  if (typeof to === "string") {
    collection = to;
    to = rul[to];
    if (!to)
      to = rul[to] = {};
  }
  if (list == null) return;
  if (typeof list == "object" && !Array.isArray(list)) {
    for (let key of Object.keys(list)) {
      let back = to[key];
      if (back == null && collection != null) {
        back = to[key] = new (entryConstructors[collection] || Entry)({ id: key }, collection)
      }
      if (back == null)
        continue;
      addFields(back, field, { [key]: list[key] })
    }

  } else {
    if (!Array.isArray(list))
      list = [list]

    for (let key of list as any[]) {
      let back = to[key];
      if (back == null && collection != null)
        back = to[key] = new Entry({ id: key }, collection)
      if (back == null)
        continue;
      addFields(back, field, [id])
    }
  }
}

function addFields(entry: Entry, field: string, list) {
  if (entry == null || field == null || list == null)
    return;
  if (Array.isArray(list)) {
    entry[field] = entry[field] || [];
    for (let id of list) {
      if (entry[field].indexOf(id) == -1)
        entry[field].push(id);
    }
  } else {
    entry[field] = { ...entry[field] || {}, ...list };
  }
}

function crosslink(collection1, prop1, collection2, prop2, prefix?) {
  let f = typeof prop1 === "function" ? prop1 : t => t[prop1];
  for (let t of [...Object.values(collection1)] as { id: string }[]) {
    backLink(t.id, f(t), collection2, prop2, prefix);
  }
}

export function deedDescription(deed) {
  let s = `${rul.tr(deed.status)} ${rul.tr(deed.times)} ${link(deed.race)} ${link(deed.unit)} ${link(deed.faction)}`;
  if (deed.element || deed.type || deed.item) {
    s += ` ${rul.tr("commendationWith")} ${link(deed.item)} ${link(deed.type)} ${link(deed.element)}`
  }
  return s;
}

export function link(id) {
  if (id == null)
    return "";
  return `<a href="${'##' + id}" class="${rul.article(id) ? "" : "dead"}">${rul.tr(id)}</a>`;
}

/*function nullIfEmpty(a){
  return a?.length == 0?undefined:a;
}*/

function stripPediaMarkup(t: string) {
  if (t != null && t.indexOf("{") != -1) {
    t = t.replace(/\{NEWLINE\}/g, "\n")
    t = t.replace(/^\s+/g, "")
    t = t.replace(/\{[^}]+\}/g, " ")
  }
  return t;
}