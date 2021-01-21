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

  $: textColor = invert ? "black" : "white";
</script>

<a
  aria-label={text}
  href={url}
  target="_blank"
  use:focusable
  on:mouseenter={() => dispatch("focus", { key })}
  on:focus={() => dispatch("focus", { key })}
  id="channel-{key}"
  class="hover:opacity-75 transition-all bg-{key}-pure w-full h-{scale} md:w-{scale} md:h-full flex items-center justify-between text-{textColor} px-6 md:px-0">
  {#if active}
    <span class="mr-6" in:fade={{ delay: 200 }}>
      <Icon solid={true}>
        <PlayButton />
      </Icon>
    </span>
    <div class="flex-1" in:fade={{ delay: 200 }}>
      <!-- svelte-ignore a11y-distracting-elements -->
      <marquee class="w-full">{text}</marquee>
    </div>
  {/if}
</a>
