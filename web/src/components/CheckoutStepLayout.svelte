<script>
  import serializeImage from "../utils/image/serializeImage";
  import Icon from "./Icon.svelte";
  import Image from "./Image.svelte";
  import ShrinkIn from "./ShrinkIn.svelte";

  export let active;
  export let details;
  export let image = {};
</script>

<div
  class="{active
    ? ''
    : 'hidden'} flex-1 flex flex-col md:flex-row w-full h-full"
>
  <div class="flex-1 bg-gray-500 relative h-96 md:h-full">
    <ShrinkIn wrap="true">
      <Image
        alt={image.alt}
        url={serializeImage(image, 1200)}
        classes={"w-full h-full"}
      />
    </ShrinkIn>
    {#if details}
      <div class="absolute bottom-6 right-6 text-white">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div role="button" class="tooltip">
          <span class="tooltip-text">
            {details}
          </span>
          <Icon width="18" height="18">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </Icon>
        </div>
      </div>
    {/if}
  </div>
  <div id="variationControl" class="md:flex-1">
    <div class="p-6 md:p-12 max-w-lg">
      <slot {active} />
    </div>
  </div>
</div>

<style lang="postcss">
  .tooltip .tooltip-text {
    @apply invisible p-4 absolute z-50 inline-block text-sm max-w-md rounded-lg bg-gray-700 text-white right-6 bottom-0;
  }

  .tooltip:hover .tooltip-text,
  .tooltip:focus .tooltip-text {
    @apply visible;
  }
</style>
