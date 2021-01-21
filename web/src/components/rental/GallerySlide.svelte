<script>
  import { fade, fly } from "svelte/transition";
  import IntersectionObserver from "./../../components/IntersectionObserver.svelte";
  import { focusable } from "./../../core/directives/focusable";
  import serializeImage from "./../../utils/image/serializeImage";
  import Button from "./../Button.svelte";

  export let img;
  export let message = {
    justify: "start",
    align: "center",
    button: "Button",
    text: "text",
  };
</script>

<article
  use:focusable
  class="bg-gradient-to-br from-red-pure via-green-pure to-blue-pure snap-center p-6 w-full h-full relative flex justify-{message.justify} items-{message.align}"
>
  <IntersectionObserver let:intersecting once={true} top={700}>
    {#if intersecting}
      <div class="absolute top-0 left-0 bottom-0 right-0 z-0">
        <img
          loading="lazy"
          transition:fade={{ duration: 1000 }}
          class="h-full w-full object-cover"
          src={serializeImage(img)}
          alt={img.alt}
        />
      </div>
      <div
        transition:fly={{ y: -20, delay: 900, duration: 300 }}
        class="max-w-xs relative z-10 flex flex-col justify-start items-start"
      >
        <h3 class="mb-3 text-xl">{@html message.text}</h3>
        <Button cta={true}>{message.button}</Button>
      </div>
    {/if}
  </IntersectionObserver>
</article>
