<script>
  import {
    globalSettings,
    activeSection,
    scaleLogo,
    onHomepage,
  } from "./../stores/layout";
  import serializeImage from "./../utils/image/serializeImage";
  import { send, receive } from "./../core/directives/crossfade";

  let y;
  let mobile =
    process.browser && !window.matchMedia("(min-width: 768px)").matches;

  $: logoImage = $globalSettings.logoImage;
  $: section = $activeSection;
  $: showLogo = !(section && y > 0) && $scaleLogo;
  $: homepageMobile = mobile && $onHomepage;
  $: topSpacing = homepageMobile ? "top-1/2 -translate-y-1/2" : "top-2";

  const handleResize = () => {
    mobile = window.innerWidth < 768;
  };
</script>

<svelte:window bind:scrollY={y} on:resize={handleResize} />

{#if showLogo}
  <div
    id="site-logo"
    class="fixed {topSpacing} left-1/2 z-50 -translate-x-1/2 transform pointer-events-none w-48 md:w-80 transition-all flex justify-center align-center"
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
