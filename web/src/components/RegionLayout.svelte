<script context="module">
  export function hover(event) {
    const { target } = event;
    if (target.dataset.section) {
      hoveredSection.set(event.target.dataset.section);
    }
    const closestNode = target.closest("[data-section]");
    if (closestNode) {
      hoveredSection.set(closestNode.dataset.section);
    }
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import { activeSection, hoveredSection } from "./../stores/layout";
  import Radio from "./Radio.svelte";

  export let lang;

  const leave = () => hoveredSection.set(null);
  const select = (event) => {
    const { target } = event;
    if (target.dataset.section) {
      activeSection.set(event.target.dataset.section);
    }
    const closestNode = target.closest("[data-section]");
    if (closestNode) {
      activeSection.set(closestNode.dataset.section);
    }
  };

  const scaleSection = (ref, activeRef, match) => {
    if (activeRef === null) {
      return ref === match ? "flex-2" : "flex-1";
    } else {
      return activeRef === match ? "flex-2" : "flex-0";
    }
  };
</script>

<div
  id="landing"
  class="flex flex-col md:flex-row h-full w-full"
  out:fade={{ delay: 500 }}
>
  <div
    class="{scaleSection(
      $hoveredSection,
      $activeSection,
      'events'
    )} dark transition-all duration-500 flex justify-center items-center bg-black text-white overflow-y-auto"
    data-section="events"
    on:click={select}
    on:mouseenter={hover}
    on:mouseleave={leave}
  >
    {#if $activeSection !== "rental"}
      <slot name="events" />
    {/if}
  </div>
  {#if $activeSection !== "rental"}
    <Radio active={$activeSection !== null} />
  {/if}
  <div
    on:click={select}
    on:mouseenter={hover}
    on:mouseleave={leave}
    data-section="rental"
    href="{lang}/rental"
    class="{scaleSection(
      $hoveredSection,
      $activeSection,
      'rental'
    )} transition-all duration-500 flex justify-center items-center overflow-y-auto"
  >
    {#if $activeSection !== "events"}
      <slot name="rental" />
    {/if}
  </div>
</div>
