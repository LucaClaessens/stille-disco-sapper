<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import { Parallax, ParallaxLayer } from "svelte-parallax";
  import { fade } from "svelte/transition";
  import serializeImage from "../utils/image/serializeImage";
  import FlexContainer from "./FlexContainer.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import serializers from "./serializers";
  import Spacer from "./Spacer.svelte";

  export let gallery;

  let clientSide = process.browser;
  let bgColor = "";
  let desktop = clientSide && window.matchMedia("(min-width: 768px)").matches;

  const handleResize = () => {
    desktop = window.innerWidth > 768;
  };

  const updateIntersections = (intersecting, index) => {
    if (intersecting) {
      const color = gallery[index].background.color;

      bgColor = color || "bg-red-pure";
    }
  };
</script>

<svelte:window on:resize={handleResize} />

<section id="parallax-gallery">
  {#if clientSide}
    <Parallax sections={gallery.length} style="background-color: white;">
      {#each gallery as slide, i}
        {#if slide.background}
          <ParallaxLayer rate={0} offset={i} style="z-index:-1;">
            {#if desktop}
              <Spacer
                height={(slide.spacer && slide.spacer.height) || "none"}
                classList="{bgColor} transition-colors duration-500"
              />
            {:else}
              <Spacer
                height={(slide.spacersm && slide.spacersm.height) ||
                  (slide.spacer && slide.spacer.height) ||
                  "none"}
                classList="{bgColor} transition-colors duration-500"
              />
            {/if}
            <div
              class="w-full h-full {bgColor} transition-colors duration-500"
            />
          </ParallaxLayer>
          {#each slide.background.images.filter((i) => i.position) as entry}
            <ParallaxLayer offset={i} rate={entry.rate || 0.5}>
              {#if desktop}
                <Spacer
                  height={(slide.spacer && slide.spacer.height) || "none"}
                />
              {:else}
                <Spacer
                  height={(slide.spacersm && slide.spacersm.height) ||
                    (slide.spacer && slide.spacer.height) ||
                    "none"}
                />
              {/if}
              <FlexContainer
                container={true}
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
          {#each slide.foreground.images.filter((i) => i.position) as entry}
            <ParallaxLayer offset={i} rate={entry.rate || 1.33}>
              {#if desktop}
                <Spacer
                  height={(slide.spacer && slide.spacer.height) || "none"}
                />
              {:else}
                <Spacer
                  height={(slide.spacersm && slide.spacersm.height) ||
                    (slide.spacer && slide.spacer.height) ||
                    "none"}
                />
              {/if}
              <FlexContainer
                container={true}
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
        <ParallaxLayer offset={i} rate={slide.message.rate || 1.1}>
          <IntersectionObserver
            on:change={($event) => updateIntersections($event.detail, i)}
            wrap={true}
          >
            {#if desktop}
              <Spacer
                height={(slide.spacer && slide.spacer.height) || "none"}
              />
            {:else}
              <Spacer
                height={(slide.spacersm && slide.spacersm.height) ||
                  (slide.spacer && slide.spacer.height) ||
                  "none"}
              />
            {/if}
            <FlexContainer
              container={true}
              justify={slide.message.position.justify}
              align={slide.message.position.align}
            >
              <div class="p-12">
                <h2
                  class="mb-3 text-xl md:text-3xl font-heading {slide.message
                    .textColor}"
                  style="text-align:{slide.message.position.align};"
                >
                  <BlockContent blocks={slide.message.text} {serializers} />
                </h2>
              </div>
            </FlexContainer>
          </IntersectionObserver>
        </ParallaxLayer>
      {/each}
    </Parallax>
  {/if}
</section>
