<script context="module">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import { onMount } from "svelte";
  import serializeImage from "../../../utils/image/serializeImage";
  import Button from "./../../../components/Button.svelte";
  import FadeInBottom from "./../../../components/FadeInBottom.svelte";
  import Image from "./../../../components/Image.svelte";
  import GallerySlide from "./../../../components/rental/GallerySlide.svelte";
  import SEO from "./../../../components/SEO.svelte";
  import serializers from "./../../../components/serializers";
  import projectLanguage from "./../../../utils/i18n/projectLanguage";

  let layout, _lang;

  export async function preload({ host, params, path }) {
    const { lang } = params;

    if (!layout || _lang !== lang) {
      _lang = lang;
      try {
        const res = await this.fetch(
          `api/${projectLanguage(lang)}/rental-query`
        );
        const content = await res.json();
        return { content, lang, host, path };
      } catch (err) {
        this.error(500, err);
      }
    }
  }
</script>

<script>
  export let content;
  export let host;
  export let path;
  export let lang;

  let innerWidth;

  let ScrollAnimationComponent;

  onMount(async () => {
    const module = await import("./../../../components/Scrollanimation.svelte");
    ScrollAnimationComponent = module.default;
  });
</script>

<svelte:head>
  <SEO {host} {path} seo={content.seo} {lang} />
</svelte:head>

<svelte:window bind:innerWidth />

<div
  class="snap-end w-full h-auto md:h-full bg-gray-100 flex flex-col md:flex-row"
>
  <div class="flex flex-col px-6 py-12 justify-center align-start max-w-md">
    <FadeInBottom>
      <h2 class="text-4xl mb-12">
        {content.hero.tagline}
      </h2>
    </FadeInBottom>
    <p class="mb-6">
      {content.hero.body}
    </p>
    <span class="self-start">
      <a href="{lang}/checkout">
        <Button px={6} cta={true}>{content.hero.buttonText}</Button>
      </a>
    </span>
  </div>
  <div class="flex-1 bg-blue-pure h-2/3 md:h-auto">
    <Image
      alt={content.hero.image.alt}
      url={serializeImage(content.hero.image, 1920)}
      classes="w-full h-full"
    />
  </div>
</div>

{#if innerWidth < 768}
  {#each content.gallery as slide}
    <GallerySlide {...slide} />
  {/each}
{:else}
  <div class="w-screen bg-gray-100 min-h-full snap-start">
    <svelte:component
      this={ScrollAnimationComponent}
      sequence={content.sequence}
    />
  </div>
{/if}

<BlockContent blocks={content.body} {serializers} />
