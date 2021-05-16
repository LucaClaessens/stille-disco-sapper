<script>
  import { globalSettings, activeSection } from "./../stores/layout";
  import serializeImage from "./../utils/image/serializeImage";
  import { send, receive } from "./../core/directives/crossfade";

  let y;

  $: logoImage = $globalSettings.logoImage;
  $: section = $activeSection;
  $: showLogo = !(section && y > 0);
</script>

<svelte:window bind:scrollY={y} />

{#if showLogo}
  <div
    id="site-logo"
    class="fixed top-2 left-1/2 z-50 -translate-x-1/2 transform pointer-events-none w-48 md:w-80 transition-all flex justify-center align-center"
  >
    <img
      out:send={{ key: "logo" }}
      in:receive={{ key: "logo" }}
      loading="lazy"
      class="object-cover w-full h-full"
      src={serializeImage(logoImage, 320)}
      alt={logoImage.alt}
    />
  </div>
{/if}
