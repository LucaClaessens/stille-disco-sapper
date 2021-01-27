<script>
  import { createEventDispatcher } from "svelte";
  import { rentFrom, rentTill } from "../stores/checkout";
  import serializeImage from "../utils/image/serializeImage";
  import { focusable } from "./../core/directives/focusable";
  import { language } from "./../stores/language";
  import projectLanguage from "./../utils/i18n/projectLanguage";
  import slugify from "./../utils/slugify";
  import AvailabilityChip from "./AvailabilityChip.svelte";
  import Icon from "./Icon.svelte";
  import Image from "./Image.svelte";
  import ShrinkIn from "./ShrinkIn.svelte";

  export let amountValue;
  export let variations = [];
  export let heading;
  export let variationDescriptor;
  export let slug;
  export let active;
  export let info;
  export let details;
  export let image = {};

  let form;
  let availability = {};

  $: lang = $language;
  $: from = $rentFrom;
  $: till = $rentTill;

  $: selectedVariation = firstVariation();
  $: amountValueValid = amountValue > 0 && amountValue <= maxSelectable;
  $: updateProductAvailability(variations, active);
  $: itemsInStock = availableFor(selectedVariation.id);
  $: availableFor = (id) =>
    availability[id] &&
    availability[id].products.reduce((a, v) => {
      const productItemsInStock =
        v.stock_counts.total - v.stock_counts.unavailable;
      return a + productItemsInStock;
    }, 0);

  $: maxSelectable = Math.min(itemsInStock, selectedVariation.maxAmount);

  let amountDirty = false;
  const dispatch = createEventDispatcher();

  const updateProductAvailability = async (variations, active) => {
    if (variations.length > 0 && active) {
      for (const variation of variations) {
        const { id } = variation;
        fetch(
          `api/${projectLanguage(lang)}/product/${id}?till=${till}&from=${from}`
        )
          .then((res) => res.json())
          .then((data) => {
            availability[id] = data;
          });
      }
    }
  };

  const firstVariation = () => variations[0];

  const dispatchState = () =>
    dispatch("stateChange", {
      valid: amountValueValid && selectedVariation,
      productSlug: slug.current,
      selectedVariation,
      amountValue,
    });
</script>

<div
  class="{active
    ? ''
    : 'hidden'} flex-1 flex flex-col md:flex-row w-full h-full"
>
  <div class="flex-1 bg-gray-500 relative">
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
      <form bind:this={form} action="#">
        <fieldset>
          <div class="mb-6 md:mb-12">
            <legend class=" font-medium text-2xl text-gray-900"
              >{heading}</legend
            >
            <p class="text-base text-gray-500">{info}</p>
          </div>
          {#if variations.length > 1}
            <p class="text-sm text-gray-500">
              {variationDescriptor}
            </p>
            <div class="mt-4 space-y-4 mb-6 md:mb-12">
              {#each variations as variation, index (variation._key)}
                <div class="flex items-center">
                  <input
                    id="push_{slugify(variation.name)}"
                    name={slug.current}
                    type="radio"
                    on:blur={dispatchState}
                    on:change={() => {
                      selectedVariation = variations[index];
                      dispatchState();
                    }}
                    checked={selectedVariation._key === variation._key}
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    for="push_everything"
                    class="ml-3 block text-sm font-medium text-gray-700">
                    {variation.info}
                    <AvailabilityChip amount={availableFor(variation.id)} />
                  </label>
                </div>
              {/each}
            </div>
          {/if}
        </fieldset>
        <div>
          <label
            for="amount"
            class="block text-sm font-medium text-gray-700 mb-2">
            Quantity
            {#if variations.length === 1}
              <AvailabilityChip amount={itemsInStock} />
            {/if}
          </label>
          <p class="text-sm text-gray-500 mb-4">
            {selectedVariation.quantityHelper}
          </p>
          <input
            required
            use:focusable
            type="number"
            name="amount"
            id="amount"
            min="0"
            step="1"
            on:keyup={() => {
              amountDirty = true;
              dispatchState();
            }}
            on:change={() => {
              dispatchState();
            }}
            bind:value={amountValue}
            max={maxSelectable}
            class="mb-2 block w-48 sm:text-sm  rounded-md {!amountValueValid &&
            amountDirty
              ? 'border-red-pure'
              : 'border-gray-300'}"
          />
          {#if !amountValueValid && amountDirty}
            <p class="text-sm text-red-pure">
              Amount must be between 1 and {maxSelectable}
            </p>
          {/if}
        </div>
      </form>
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
