import Fuse from "fuse.js";
import { emptyImg } from "./Components";

export let rul!: Ruleset;
export type SortFirsLastOptions = { first?: string[], last?: string[], exclude?: string[] }

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function backLink(id: string, list: string[], to: any, field: string) {
  if (!list) return;
  for (let key of list) {
    let back = to[key];
    if (!back) continue;
    back[field] = back[field] || [];
    back[field].push(id);
  }
}

function orderedFilteredEntries(item, fields) {
  if(item==null)
    return;
  return fields ? fields.map(key => item[key] != null ? [key, item[key]] : null).filter(v => v != null) : [];
}

export function sortFirstLast(item, options: SortFirsLastOptions = {}) {
  if(item==null)
    return;

  let first = orderedFilteredEntries(item, options.first);
  let last = orderedFilteredEntries(item, options.last);
  let exclude = orderedFilteredEntries(item, options.exclude);
  let special = new Set([...(options.first || []), ...(options.last || []), ...(options.exclude || [])]);
  let misc = Object.entries(item).filter(([k, v]) => !special.has(k));
  misc = misc.sort((a, b) => a[0] > b[0] ? 1 : -1)
  let all = [...first, ...misc.sort((a, b) => a[0] > b[0] ? 1 : -1), ...last]
  return { first, misc, last, exclude, all };
}

//console.log("test", sortFirstLast({a:1,b:2,c:3,d:4,e:5}, {first:["a","c"], last:["d","b"]}));

export class Search {
  articles: Fuse<Article, { keys: ("id" | "type" | "title" | "text")[]; }>;

  constructor() {
    this.articles = new Fuse(rul.articlesOrder, {
      keys: ["id", "type", "title", "text"],
      tokenize: true,
      matchAllTokens: true,

      distance: 10,
      threshold: 0.1,
    });
  }

  findArticles(query: string) {
    return this.articles.search(query);
  }
}

export class Manufacture {
  name: string;
  requires: string;
  producedItems: { [key: string]: number };
  requiredItems: { [key: string]: number };
  requiresBaseFunc: string[];
  randomProducedItems: [number, { [key: string]: number }][];
  chanceSum: number;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.manufacture[this.name] = this;

    if (this.requires) {
      for (let resName of this.requires) {
        let res = rul.research[resName];
        if (!res) continue;
        if (!res.manufacture) res.manufacture = [];
        res.manufacture.push(this.name);
      }
    }

    if (this.producedItems) {
      for (let itemName of Object.keys(this.producedItems)) {
        let item = rul.items[itemName];
        if (!item) continue;
        if (!item.manufacture) item.manufacture = {};
        item.manufacture[this.name] = this.producedItems[itemName];
      }
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
    }

    Service.add("allowsManufacture", this.name, this.requiresBaseFunc);

    Article.create({
      id: this.name,
      section: "MANUFACTURE",
      type_id: "MANUFACTURE",
    });
  }
}

export class SoldierBonuses {
  name: string;
  constructor(raw: any) {
    Object.assign(this, raw);
    rul.soldierBonuses[this.name] = this;
  }
}

export class Commendation {
  type: string;
  soldierBonusTypes: any[];
  criteria;
  killCriteria;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.commendations[this.type] = this;
    if(this.killCriteria)
      this.killCriteria = this.killCriteria.flat(2);
  }
}

export class Research {
  name: string;
  getOneFree: string[];
  unlocks: string[];
  dependencies: string[];
  leadsTo: string[];
  freeFrom: string[];
  manufacture: string[];
  requiresBaseFunc: string[];
  lookup: string;
  seeAlso: string[];
  spawnedItem: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.research[this.name] = this;

    Service.add("allowsResearching", this.name, this.requiresBaseFunc);

    Article.create({
      id: this.name,
      section: "RESEARCH",
      type_id: "RESEARCH",
    });
  }
}

export class Service {
  constructor(public id: string) {
    Article.create({
      id,
      type_id: "SERVICES",
      section: "SERVICES",
    });
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

export class AlienDeployment {
  type: string;
  startingCondition: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.alienDeployments[this.type] = this;
    let condition = rul.startingConditions[this.startingCondition];
    if (condition) condition.deployments.push(this.type);
  }
}

export class CraftWeapon {
  type: string;
  requiresBuyBaseFunc: string[];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.craftWeapons[this.type] = this;
    Service.add("canBuy", this.type, this.requiresBuyBaseFunc);
  }
}

export class Craft {
  type: string;
  startingConditions: string[] = [];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.crafts[this.type] = this;
  }
}

export class Ufo {
  type: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.ufos[this.type] = this;
  }
}

export class Facility {
  type: string;
  aliens: number;
  prisonType: number;
  provideBaseFunc: string[];
  requiresBaseFunc: string[];
  forbiddenBaseFunc: string[];
  buildCostItems: { [key: string]: { [key: string]: number } };

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.facilities[this.type] = this;

    Service.add("providedBy", this.type, this.provideBaseFunc);
    Service.add("allowsBuilding", this.type, this.requiresBaseFunc);
    Service.add("forbidsBuilding", this.type, this.forbiddenBaseFunc);
    if (this.aliens) {
      Service.add("providedBy", this.type, [`prisonType${this.prisonType || 1}`]);
    }
  }
}

export class StartingConditions {
  allowedCraft: string[] = [];
  allowedItemCategories: string[] = [];
  allowedArmors: string[] = [];
  allowedVehicles: string[] = [];
  deployments: string[] = [];
  type: string;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.startingConditions[this.type] = this;
    rul.lang[this.type] = rul.tl(this.type.substr(11));
    for (let craft of this.allowedCraft)
      rul.crafts[craft].startingConditions.push(this.type);
    Article.create({
      id: this.type,
      section: "CONDITIONS",
      type_id: "CONDITIONS",
    });
  }
}

export class Stats {
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

export class Unit {
  type: string;
  stats: Stats;
  armor: string;
  builtInWeaponSets: string[][];

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.units[this.type] = this;
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
          item.heldBy.add(this.type)
        }
      }
    }
  }
}

let defaultRange = { snap: 15, auto: 7, aimed: 200 };

export class Attack {
  possible = false;
  cost: { time: number; energy: number };
  flatTime = false;
  damage: number;
  damageBonus: { [key: string]: number };
  damageType: string;
  accuracy: number;
  accuracyMultiplier: { [key: string]: number };
  alter: { [key: string]: string };
  shots: number = 1;
  range: number;
  pellets: number = 1;
  name: string;
  item: Item;

  constructor(item: Item, public mode: string) {
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

    if (item.type == "STR_THROWING_HAMMER") {
      console.log(item);
      console.log(mode);
    }

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
    }

    if (this.alter && this.alter.ResistType) {
      this.damageType = this.alter.ResistType;
    }

    if (mode + "Range" in item) {
      this.alter = Object.assign({}, this.alter || {});
      this.alter.range = item[mode + "Range"];
    }

    for (let k in this.alter) {
      if (k == "damageType" || k == "ResistType")
        this.alter[k] = rul.damageTypes[this.alter[k]];
    }

    this.range =
      item[mode + "Range"] ||
      item[mode.substr(0, 3) + "Range"] ||
      (this.alter && this.alter.range) ||
      defaultRange[mode];

    this.possible = true;
  }
}

export class Article {
  id: string;
  title: string;
  text: string;
  image_id: string;
  type_id: string;
  section: Section;

  static create(raw: any) {
    if (raw.id in rul.articles) {
      let article = rul.articles[raw.id];
      if (raw.section && article.section != raw.section) {
        rul.sections[raw.section].add(article);
      }
      return article;
    }
    return new Article(raw);
  }

  constructor(raw: any) {
    this.id = raw.id;
    this.title = raw.title || rul.tl(raw.id);
    rul.lang[this.id] = this.title;
    this.text = rul.lang[raw.text] || rul.lang[raw.id + "_UFOPEDIA"];
    this.image_id = raw.image_id;
    this.type_id = raw.type_id || "-1";
    rul.articles[this.id] = this;

    let id = raw.id;

    rul.articles[id] = this;

    if (raw.section) {
      rul.addToSection(this, raw.section);
    }
  }
}

export class Section {
  title: string;
  _articles: Article[] = [];

  get articles() {
    return this._articles;
  }

  isType() {
    return this.type_id == "TYPE";
  }

  constructor(public id: string, public type_id = "PEDIA") {
    rul.sections[id] = this;

    if (this.isType()) {
      rul.typeSectionsOrder.push(this);
    } else {
      rul.sectionsOrder.push(this);
    }

    this.title = rul.str(id);

    Article.create({ id, section: id, type_id });
  }

  add(article: Article) {
    if (!this._articles.includes(article)) this._articles.push(article);
    if (!article.section) article.section = this;
  }
}

export class Sprite {
  id: string;
  path: string;
  extra: string[];

  constructor(raw: any) {
    this.id = raw.type || raw.typeSingle;
    if (raw.files) {
      this.path = raw.files[0];
      this.extra = raw.files;
    }
    if (raw.fileSingle) this.path = raw.fileSingle;
  }
}

export class Armor {
  type: string;
  sprite: string;
  dollSprites: { [key: string]: string[] } = {};
  armor: { [key: string]: number } = {};
  users: string[];
  [key: string]: any;

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.armors[raw.type] = this;

    if (this.layersDefinition) {
      let prefix = this.layersDefaultPrefix;
      for (let body in this.layersDefinition) {
        let layersDef = this.layersDefinition[body];
        let layers = [];
        for (let layer in layersDef) {
          let name = layersDef[layer];
          if (name && name.length) {
            let id = prefix + "__" + layer + "__" + name;
            layers.push(rul.sprite(id));
          }
        }
        this.dollSprites[body] = layers;
      }
    } else if (this.spriteInv) {
      let name: string = this.spriteInv;
      let l = name.length;
      if (this.spriteInv + ".SPK" in rul.sprites) {
        this.dollSprites = {
          0: [rul.path + rul.sprites[this.spriteInv + ".SPK"].path],
        };
      } else {
        for (let s in rul.sprites) {
          if (s.substr(0, l) == name) {
            this.dollSprites[s.substr(l, s.length - l - 4)] = [
              rul.path + rul.sprites[s].path,
            ];
          }
        }
      }
    }

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
  }
}

export class Item {
  type: string;
  sprite: string;
  battleType: number;
  invWidth = 1;
  invHeight = 1;
  armors: string[];
  _attacks: Attack[];
  spawnedBy: string[];
  requiresBuyBaseFunc: string[];
  manufacture: { [key: string]: number };
  componentOf: { [key: string]: number };
  bigSprite: string;
  meleePower: number;
  meleeBonus: any;
  meleeType: string;
  power: number;
  damageBonus: any;
  damageType: string;
  shotgunPellets: number;
  meleeAlter: any;
  damageAlter: any;
  compatibleAmmo: any;
  autoShots: number;
  flatRate: boolean;
  meleeMultiplier: any;
  throwMultiplier: any;
  accuracyMultiplier: any;
  compatibleWeapons: any;
  liveAlien: boolean;
  recover: boolean;
  prisonType: number;
  categories: string[];
  heldBy = new Set<string>();

  constructor(raw: any) {
    Object.assign(this, raw);
    rul.items[raw.type] = this;

    this.sprite = rul.bigSprite[this.bigSprite];

    let t = this as any;

    if ("flatThrow" in t) {
      t.flatThrowTime = t.flatThrow.time;
      delete t.flatThrow;
    }

    Service.add("canBuyItem", this.type, this.requiresBuyBaseFunc);

    if (this.categories) {
      for (let cat of this.categories) this.addCategory(cat);
    }

    if (this.liveAlien && this.recover && !this.prisonType)
      this.prisonType = 1

    Article.create({
      id: this.type,
      type_id: "ITEMS",
      section: "ITEMS",
    });
  }

  attacks() {
    if (!this._attacks) {
      this._attacks = [];
      for (let mode of [
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
      ]) {
        let attack = new Attack(this, mode);
        if (attack.possible) {
          this._attacks.push(attack);
          if (attack.damageType)
            this.addCategory("dmg=" + rul.damageTypes[attack.damageType]);
          if (attack.damageBonus) {
            for (let k in attack.damageBonus) this.addCategory("dmg*" + k);
            for (let k in attack.accuracyMultiplier)
              this.addCategory("acc*" + k);
          }
        }
      }
    }

    if (this.battleType == 2) {
      this._attacks[0].item = this;
      this._attacks[0].mode = "ammo";
    }

    return this._attacks;
  }

  addCategory(catName: string) {
    let cat = rul.categories[catName] || [];
    if (!cat.includes(this)) cat.push(this);
    rul.categories[catName] = cat;
  }
}

export default class Ruleset {
  articles: { [key: string]: Article } = {};
  articlesOrder: Article[] = [];
  sections: { [key: string]: Section } = {};
  sectionsOrder: Section[] = [];
  typeSectionsOrder: Section[] = [];
  sprites: { [key: string]: Sprite } = {};
  raw: any = {};
  search: Search;
  ourArmors: string[];
  items: { [key: string]: Item } = {};
  categories: { [key: string]: Item[] } = {};
  armors: { [key: string]: Armor } = {};
  units: { [key: string]: Unit } = {};
  crafts: { [key: string]: Craft } = {};
  ufos: { [key: string]: Ufo } = {};
  facilities: { [key: string]: Facility } = {};
  craftWeapons: { [key: string]: CraftWeapon } = {};
  alienDeployments: { [key: string]: AlienDeployment } = {};
  research: { [key: string]: Research } = {};
  soldierBonuses: { [key: string]: SoldierBonuses } = {};
  commendations: { [key: string]: Commendation } = {};  
  manufacture: { [key: string]: Manufacture } = {};
  startingConditions: { [key: string]: StartingConditions } = {};
  bigSprite: string[] = [];
  floorSprite: string[] = [];
  handSprite: string[] = [];
  baseSprite: string[] = [];
  sounds: string[] = [];
  modName: string;
  config: Object;
  path: string;
  baseServices: { [key: string]: Service } = {};
  redirect: { [key: string]: string } = {};

  lang: { [key: string]: string } = {};

  damageTypes = [
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

  battleTypes = [
    "None (Geoscape-only item)",
    "Firearm",
    "Ammo",
    "Melee",
    "Grenade",
    "Proximity Grenade",
    "Medi-Kit",
    "Motion Scanner",
    "Mind Probe",
    "Psi-Amp",
    "Electro-flare",
    "Corpse",
  ];

  damageTypeName(type: number) {
    return this.lang[this.damageTypes[type]];
  }

  sound(id: number) {
    return this.path + this.sounds[id];
  }

  str(id: string) {
    return this.lang[id] || id;
  }

  specialSprite(type: string, num: number) {
    return num in this[type] ? this.path + this[type][num] : emptyImg;
  }

  combineFiles(data: any[], reversed = false) {
    for (let file of reversed ? data.reverse() : data) {
      if (file == null)
        continue;
      for (let key in file) {
        if (key == "extraSprites")
          console.log(file.file);

        let field = file[key];
        if (key.substr(0, 4) == "lang") {
          Object.assign(this.lang, field);
        }
        if (!(key in this.raw)) {
          this.raw[key] = field;
        } else {
          let old = this.raw[key];
          let adding = field;

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

  categoriesNames: [
    "crafts",
    "items",
    "armors",
    "ufopaedia",
    "manufacture",
    "units",
    "alienDeployments",
    "research"
  ];

  mergeRuls(reversed = false) {
    for (let categoryName in this.raw) {
      let merged = {};
      let deleted = {};

      let category = this.raw[categoryName];
      if (!Array.isArray(category)) {
        //merged[categoryName] = category;
        continue;
      }

      //if (categoryName == "extraSprites") debugger;

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

  parse(data: any) {
    let reversed = false;

    this.combineFiles(data, reversed);

    let specialSections = [
      "ITEMS",
      "CONDITIONS",
      "CATEGORIES",
      "RESEARCH",
      "MANUFACTURE",
      "SERVICES",
    ];

    for (let type of specialSections) new Section(type, "TYPE");

    this.mergeRuls(reversed);

    this.path = "/user/mods/" + rul.modName + "/";

    for (let k in this.lang) {
      let text: string = this.lang[k];
      if (typeof text === "string") {
        text = text.replace(/^({NEWLINE})+/, "");
        text = text.replace(/{NEWLINE}/g, "<br/>");
        text = text.replace(/{rul.str\("([^"]*)"\)}/g, (match, p1) =>
          rul.str(p1)
        );
        this.lang[k] = text;
      }
    }

    for (let damage of rul.damageTypes) {
      rul.categories["dmg=" + damage] = [];
      this.redirect[damage] = "dmg=" + damage;
      this.lang["dmg=" + damage] = this.lang[damage];
    }

    this.parsePedia(this.raw.ufopaedia);
    //console.log(this.raw.extraSprites.filter(s=>s.type == "BIGOBS.PCK"));
    this.parseSprites(this.raw.extraSprites);

    if (this.sprites["BIGOBS.PCK"])
      this.bigSprite = this.sprites["BIGOBS.PCK"].extra;
    if (this.sprites["FLOOROB.PCK"])
      this.floorSprite = this.sprites["FLOOROB.PCK"].extra;
    if (this.sprites["HANDOB.PCK"])
      this.handSprite = this.sprites["HANDOB.PCK"].extra;
    if (this.sprites["BASEBITS.PCK"])
      this.baseSprite = this.sprites["BASEBITS.PCK"].extra;

    if (this.raw.extraSounds && this.raw.extraSounds[0])
      this.sounds = this.raw.extraSounds[0].files;

    for (let data of this.raw.items) new Item(data);
    for (let data of this.raw.armors) new Armor(data);
    for (let data of this.raw.units) new Unit(data);
    for (let data of this.raw.crafts) new Craft(data);
    for (let data of this.raw.craftWeapons) new CraftWeapon(data);
    for (let data of this.raw.ufos) new Ufo(data);
    for (let data of this.raw.facilities) new Facility(data);

    if (this.raw.startingConditions)
      for (let data of this.raw.startingConditions)
        new StartingConditions(data);

    for (let data of this.raw.alienDeployments) new AlienDeployment(data);

    for (let data of this.raw.research) new Research(data);

    for (let data of this.raw.soldierBonuses) new SoldierBonuses(data);
    for (let data of this.raw.commendations) new Commendation(data);

    for (let data of this.raw.manufacture) new Manufacture(data);

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
      item.attacks();
      if (item.compatibleAmmo) {
        for (let ammoId of item.compatibleAmmo) {
          let ammo = this.items[ammoId];
          if (ammo) {
            ammo.compatibleWeapons = ammo.compatibleWeapons || [];
            ammo.compatibleWeapons.push(item.type);
          }
        }
      }
    }

    for (let research of Object.values(this.research)) {
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
        if (!rul.lang[article.id]) article.title = lookUpArticle.title;
        article.text = lookUpArticle.text;
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

    for (let sectionName of specialSections)
      rul.sections[sectionName]._articles = rul.sections[
        sectionName
      ].articles.sort((a, b) => (a.title < b.title ? -1 : 1));

    /*Article.create({
      id: "BASE_FUNC",
      title: "Base Services",
      type_id: "OTHER",
      section: "OTHER"
    });*/

    for (let cat of Object.keys(this.categories)) {
      Article.create({
        id: cat,
        type_id: "CATEGORIES",
        section: "CATEGORIES",
      });
    }

    console.log(this);

    this.search = new Search();
  }

  parsePedia(data: any) {
    for (let articleData of data) {
      if (articleData.id) {
        let article = new Article(articleData);
        this.articlesOrder.push(article);
        this.articles[article.id] = article;
      }
    }
  }

  parseSprites(sprites: any) {
    for (let spriteData of sprites) {
      /*if(spriteData.type == "BIGOBS.PCK")
        debugger;*/
      let sprite = new Sprite(spriteData);
      let old = this.sprites[sprite.id];
      if (old != null) {
        Object.assign(old.extra, spriteData.files);
      } else
        this.sprites[sprite.id] = sprite;
    }
  }

  findNextArticle(current: Article, delta: number) {
    if (!current) return null;
    let section = current.section;
    let list = section ? section.articles : this.articlesOrder;
    let index = list.findIndex((a) => a.id == current.id);
    if (index != undefined) {
      let nextIndex = index + delta;
      let nextArticle = list[nextIndex];
      return nextArticle;
    }
  }

  tl(str, separ = " ") {
    if (typeof str === "string") {
      if (rul.lang[str]) {
        str = rul.lang[str]
        if (str.substr(0, 4) != "STR_")
          return str;
      }
      if (this.lang[fieldNames[str]]) return this.lang[fieldNames[str]];

      if (str.substr(0, 4) == "STR_")
        str = str.substr(4);

      if (str.includes("_") && str.search(/[a-z]/) == -1)
        str = str.replace(/_/g, " ");
      else str = str.replace(/([^A-Z0-9])([A-Z0-9])/g, "$1" + separ + "$2");
      str = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    }
    return str;
  }

  sprite(id: string) {
    if (id in this.sprites) return this.path + this.sprites[id].path;

    return this.path + id;
  }

  constructor() {
    rul = this;
  }

  load({ ruls, langs }) {
    this.modName = "Piratez";
    this.lang = langs["en-US"];
    this.parse(ruls);
  }

  addToSection(article: Article, sectionId: string) {
    let section: Section;

    if (sectionId in rul.sections) section = rul.sections[sectionId];
    else section = rul.sections[sectionId] = new Section(sectionId);

    if (article.id != section.id) section.add(article);

    article.section = section;
    return section;
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
    let a = this.articles[this.redirect[id] || id];
    return a;
  }

  sortStrings(s: string[]) {
    let tl: [string, string][] = s.map(s => [s, this.tl(s)])
    tl = tl.sort((a, b) => a[1] > b[1] ? 1 : -1)
    return tl.map(a => a[0]);
  }
}

const fieldNames = {
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
};