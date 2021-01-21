<script>
  import gsap from "gsap";
  import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
  import { onMount } from "svelte";

  onMount(async () => {
    const s = await import("scrollmagic");

    ScrollMagicPluginGsap(s.default, gsap);
  });
</script>

<main class="h-full w-full overflow-hidden">
  <slot />
</main>

<style lang="postcss">
  main {
    @apply bg-white;
  }
</style>
