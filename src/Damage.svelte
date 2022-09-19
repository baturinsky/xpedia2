<script>
  import SpecialBonus from "./SpecialBonus.svelte";
  import { rul, sortFirstLast, damageTypes, internalBattleTypes } from "./Ruleset";
  import {Tr, Link, Value} from "./Components"
  export let attack;
</script>

{#if "damage" in attack || "damageType" in attack}
  {attack.pellets > 1 && attack.damageBonus ? "(" : ""}
  <em>{attack.damage || 0}</em>
  <small>
    <SpecialBonus plus={true} bonus={attack.damageBonus} />
    {attack.pellets > 1 && attack.damageBonus ? ")" : ""}
  </small>
  {attack.pellets > 1 ? " ×" + attack.pellets : ""}
  <br />
  {#if attack.damageType != null}
    <Link href={damageTypes[attack.damageType]} />
  {/if}
{/if}
