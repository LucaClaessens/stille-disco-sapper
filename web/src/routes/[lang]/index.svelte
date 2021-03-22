<script context="module">
  import RegionLayout, { hover } from "../../components/RegionLayout.svelte";
  import { hoveredSection } from "../../stores/layout";
  import SEO from "./../../components/SEO.svelte";
  import projectLanguage from "./../../utils/i18n/projectLanguage";
  import serializeImage from "./../../utils/image/serializeImage";

  export async function preload({ host, params, path }) {
    const { lang } = params;

    try {
      const res = await this.fetch(`api/${projectLanguage(lang)}/landing`);
      const content = await res.json();
      return { content, lang, host, path };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  export let host;
  export let path;
  export let lang;
  export let content;
  const { events, rental, seo, landingImage } = content;

  const scaleText = (ref, match) => (ref === match ? "text-2xl" : "text-5xl");
</script>

<svelte:head>
  <SEO {host} {path} {seo} {lang} />
</svelte:head>

<div
  id="site-logo"
  class="absolute top-2 left-1/2 z-50 -translate-x-1/2 transform pointer-events-none w-80"
>
  <img
    loading="lazy"
    class="object-cover w-full h-full"
    src={serializeImage(landingImage, 350)}
    alt={landingImage.alt}
  />
</div>

<RegionLayout {lang} {path}>
  <a
    aria-label={events.label}
    on:focus={hover}
    slot="events"
    href="{lang}/events"
    class="relative w-full h-full flex justify-center items-center bg-black text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
  >
    <div
      class="transform transition-opacity absolute top-0 right-0 bottom-0 left-0 {$hoveredSection ===
      'rental'
        ? 'opacity-90 filter-blur scale-105'
        : ''} z-0"
    >
      <img
        loading="lazy"
        class="object-cover w-full h-full"
        src={serializeImage(events.image, 1200)}
        alt={events.image.alt}
      />
    </div>
    <h2
      class="{scaleText(
        $hoveredSection,
        'rental'
      )} z-50 transition-all duration-300 font-heading uppercase"
    >
      {events.title}
    </h2>
  </a>
  <a
    aria-label={rental.label}
    on:focus={hover}
    slot="rental"
    href="{lang}/rental"
    class="relative w-full h-full flex justify-center items-center bg-white text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
  >
    <div
      class="transform transition-opacity absolute top-0 right-0 bottom-0 left-0 {$hoveredSection ===
      'events'
        ? 'opacity-90 filter-blur scale-105'
        : ''} z-0"
    >
      <img
        loading="lazy"
        class="object-cover w-full h-full"
        src={serializeImage(rental.image, 1200)}
        alt={rental.image.alt}
      />
    </div>
    <h2
      class="{scaleText(
        $hoveredSection,
        'events'
      )} z-50 transition-all duration-300 font-heading uppercase"
    >
      {rental.title}
    </h2>
  </a>
</RegionLayout>

<style>
  .filter-blur {
    filter: blur(15px);
  }
</style>
