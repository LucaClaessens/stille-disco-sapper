<script>
  import { Parallax, ParallaxLayer } from "svelte-parallax";
  import { fade, slide } from "svelte/transition";
  import serializeImage from "../utils/image/serializeImage";
  import FlexContainer from "./FlexContainer.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import serializers from "./serializers";
  import BlockContent from "@movingbrands/svelte-portable-text";

  export let gallery;

  let clientSide = process.browser;
  let bgColor = "";

  const updateIntersections = (intersecting, index) => {
    if (intersecting) {
      const color = gallery[index].background.color;

      bgColor = color || "bg-red-pure";
    }
  };
</script>

<section id="parallax-gallery">
  {#if clientSide}
    <Parallax sections={gallery.length} style="background-color: white;">
      {#each gallery as slide, i}
        {#if slide.background}
          <ParallaxLayer rate={0} offset={i} style="z-index:-1;">
            <div
              class="w-full h-full {bgColor} opacity-50 transition-colors duration-500"
            />
          </ParallaxLayer>
          {#each slide.background.images as entry}
            <ParallaxLayer offset={i} rate={0.5}>
              <FlexContainer
                justify={entry.position.justify}
                align={entry.position.align}
              >
                <img
                  loading="lazy"
                  in:fade={{ duration: 1000 }}
                  class="w-full md:h-full md:w-full object-cover"
                  src={serializeImage(entry.image, 2400)}
                  alt={entry.image.alt}
                />
              </FlexContainer>
            </ParallaxLayer>
          {/each}
        {/if}
        {#if slide.foreground}
          {#each slide.foreground.images as entry}
            <ParallaxLayer offset={i} rate={1.33}>
              <FlexContainer
                justify={entry.position.justify}
                align={entry.position.align}
              >
                <img
                  loading="lazy"
                  in:fade={{ duration: 1000 }}
                  class="w-full md:max-w-lg object-cover"
                  src={serializeImage(entry.image, 2400)}
                  alt={entry.image.alt}
                />
              </FlexContainer>
            </ParallaxLayer>
          {/each}
        {/if}
        <ParallaxLayer offset={i} rate={1.1}>
          <IntersectionObserver
            on:change={($event) => updateIntersections($event.detail, i)}
            wrap={true}
          >
            <FlexContainer
              justify={slide.message.position.justify}
              align={slide.message.position.align}
            >
              <div class="p-12">
                <h3 class="mb-3 text-xl font-heading {slide.message.textColor}">
                  <BlockContent blocks={slide.message.text} {serializers} />
                </h3>
              </div>
            </FlexContainer>
          </IntersectionObserver>
        </ParallaxLayer>
      {/each}
    </Parallax>
  {/if}
</section>
