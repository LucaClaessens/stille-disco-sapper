<script>
  import { fade, fly } from "svelte/transition";
  import ShrinkIn from "../ShrinkIn.svelte";
  import IntersectionObserver from "./../../components/IntersectionObserver.svelte";
  import { focusable } from "./../../core/directives/focusable";
  import { language } from "./../../stores/language";
  import serializeImage from "./../../utils/image/serializeImage";
  import Button from "./../Button.svelte";
  import Link from "./../Link.svelte";

  export let img;
  export let message = {
    justify: "start",
    align: "center",
    button: {
      href: "",
      target: "_self",
      text: "button",
    },
    text: "text",
  };

  $: lang = $language;
</script>

<article use:focusable class="snap-center p-6 w-full h-full relative">
  <IntersectionObserver
    let:intersecting
    once={true}
    top={700}
    containerClasses="flex justify-{message.justify} items-{message.align}"
  >
    {#if intersecting}
      <div class="absolute top-0 left-0 bottom-0 right-0 z-0">
        <ShrinkIn>
          <img
            loading="lazy"
            in:fade={{ duration: 1000 }}
            class="h-full w-full object-cover"
            src={serializeImage(img)}
            alt={img.alt}
          />
        </ShrinkIn>
      </div>
      <div
        in:fly={{ y: -20, delay: 900, duration: 300 }}
        class="max-w-xs relative z-10 flex flex-col justify-start items-start"
      >
        <h3 class="mb-3 text-xl">{@html message.text}</h3>
        <Link
          href={message.button.href.startsWith("http")
            ? message.button.href
            : `/${lang}${message.button.href}`}
          target={message.button.target}
        >
          <Button cta={true}>{message.button.text}</Button></Link
        >
      </div>
    {/if}
  </IntersectionObserver>
</article>
