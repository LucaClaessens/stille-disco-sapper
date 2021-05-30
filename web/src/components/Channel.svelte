<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { focusable } from "./../core/directives/focusable";
  import Icon from "./Icon.svelte";
  import PlayButton from "./icons/PlayButton.svelte";

  const dispatch = createEventDispatcher();

  export let key;
  export let text;
  export let url;
  export let invert = false;
  export let active = false;
  export let scale;
  export let breakMd = true;

  $: textColor = invert ? "black" : "white";
  $: mdClasses = breakMd
    ? `md:items-start md:flex-col ${
        scale === 2 ? "md:w-2" : "md:w-10"
      } md:h-full md:px-0`
    : "";
</script>

<a
  aria-label={text}
  href={url}
  target="_blank"
  use:focusable
  on:mouseenter={() => dispatch("focus", { key })}
  on:focus={() => dispatch("focus", { key })}
  id="channel-{key}"
  class="hover:opacity-75 transition-all bg-{key}-pure w-full text-{textColor}"
>
  <div
    class="container mx-auto flex items-center justify-between px-6 {mdClasses} h-{scale}"
  >
    {#if active}
      <span
        class="mr-6 {breakMd ? 'md:transform md:rotate-90 md:p-3' : ''}"
        in:fade={{ delay: 200 }}
      >
        <Icon solid={true}>
          <PlayButton />
        </Icon>
      </span>
      <div class="flex-1" in:fade={{ delay: 200 }}>
        <!-- svelte-ignore a11y-distracting-elements -->
        <marquee
          class="w-full {breakMd
            ? 'md-invert md:transform md:rotate-90 md:w-screen-oppose md:h-9 md:origin-top-left md:w-full md:translate-x-8'
            : ''}">{text}</marquee
        >
      </div>
    {/if}
  </div>
</a>

<style>
  @media (min-width: 768px) {
    marquee.md-invert {
      width: calc(100vh - 30px);
    }
  }
</style>
