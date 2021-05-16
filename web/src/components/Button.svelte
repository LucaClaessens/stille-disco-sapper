<script>
  import { createEventDispatcher } from "svelte";
  import { focusable } from "./../core/directives/focusable";

  export let invert = false;
  export let cta = false;
  export let px = 6;
  export let py = 2;
  export let type = "button";
  export let disabled = false;
  export let text = "";
  const dispatch = createEventDispatcher();

  const colorClasses = cta
    ? "bg-blue-pure text-white hover:text-gray-100 hover:bg-blue-500"
    : invert
    ? "dark:bg-white bg-black dark:text-black text-white dark:hover:text-gray-700 dark:hover:bg-gray-100 hover:bg-gray-800 hover:text-gray-300"
    : "bg-white dark:bg-black text-black dark:text-white hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300";
</script>

<button
  use:focusable
  on:click={(event) => dispatch("click", { target: event.target })}
  {type}
  {disabled}
  class="rounded-md disabled:opacity-50 px-{px} py-{py} inline-flex items-center justify-center {colorClasses}"
>
  {#if text}
    {text}
  {:else}
    <slot />
  {/if}
</button>
