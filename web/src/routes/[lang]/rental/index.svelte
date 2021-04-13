<script context="module">
  import IntersectionObserver from "./../../../components/IntersectionObserver.svelte";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import FlexContainer from "./../../../components/FlexContainer.svelte";
  import serializeImage from "../../../utils/image/serializeImage";
  import Button from "./../../../components/Button.svelte";
  import FadeInBottom from "./../../../components/FadeInBottom.svelte";
  import Image from "./../../../components/Image.svelte";
  import { fade } from "svelte/transition";
  import SEO from "./../../../components/SEO.svelte";
  import serializers from "./../../../components/serializers";
  import projectLanguage from "./../../../utils/i18n/projectLanguage";
  import { Parallax, ParallaxLayer } from "svelte-parallax";

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

  let clientSide = process.browser;
  let bgColor = "";

  const updateIntersections = (intersecting, index) => {
    console.log({ intersecting: intersecting, index });
    if (intersecting) {
      switch (index) {
        case 0:
          bgColor = "bg-red-pure";
          break;
        case 1:
          bgColor = "bg-green-pure";
          break;
        case 2:
          bgColor = "bg-blue-pure";
          break;
        default:
          bgColor = "bg-red-pure";
          break;
      }
    }
  };

  $: console.log({ bgColor });
</script>

<svelte:head>
  <SEO {host} {path} seo={content.seo} {lang} />
</svelte:head>

<svelte:window bind:innerWidth />

<div class="w-full h-auto md:h-full bg-gray-100 flex flex-col md:flex-row">
  <div class="flex flex-col px-6 py-12 justify-center align-start max-w-md">
    <FadeInBottom>
      <h2 class="text-4xl mb-12 font-heading">
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

{#if clientSide}
  <Parallax sections={content.gallery.length} style="background-color: white;">
    {#each content.gallery as slide, i}
      {#if slide.background}
        <ParallaxLayer rate={0} offset={i} style="z-index:-1;">
          <div
            class="w-full h-full {bgColor} opacity-50 transition-colors duration-500"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={i} rate={0.5}>
          <FlexContainer
            justify={slide.background.position.justify}
            align={slide.background.position.align}
          >
            <img
              loading="lazy"
              in:fade={{ duration: 1000 }}
              class="w-full md:h-full md:w-full object-cover"
              src={serializeImage(slide.background.image, 2400)}
              alt={slide.background.image.alt}
            />
          </FlexContainer>
        </ParallaxLayer>
      {/if}
      {#if slide.foreground}
        <ParallaxLayer offset={i} rate={1.33}>
          <FlexContainer
            justify={slide.foreground.position.justify}
            align={slide.foreground.position.align}
          >
            <img
              loading="lazy"
              in:fade={{ duration: 1000 }}
              class="w-full md:max-w-lg object-cover"
              src={serializeImage(slide.foreground.image, 2400)}
              alt={slide.foreground.image.alt}
            />
          </FlexContainer>
        </ParallaxLayer>
      {/if}
      <ParallaxLayer offset={i} rate={1.1}>
        <IntersectionObserver
          on:change={($event) => updateIntersections($event.detail, i)}
          wrap={false}
        >
          <FlexContainer
            justify={slide.message.position.justify}
            align={slide.message.position.align}
          >
            <div class="p-12">
              <h3 class="mb-3 text-xl font-heading">
                {@html slide.message.text}
              </h3>
            </div>
          </FlexContainer>
        </IntersectionObserver>
      </ParallaxLayer>
    {/each}
  </Parallax>
{/if}

<BlockContent blocks={content.body} {serializers} />
