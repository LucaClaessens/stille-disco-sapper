<script>
  import { createEventDispatcher } from "svelte";
  import AvailabilityChip from "./AvailabilityChip.svelte";
  import { focusable } from "./../core/directives/focusable";
  import { onMount } from "svelte";
  import serializeImage from "../utils/image/serializeImage";
  import Image from "./Image.svelte";

  export let name = "name";
  export let variations = [];
  export let active = false;
  export let amountValue = 0;
  export let mounted = false;
  export let uiFields = {};
  export let image = {};
  export let info = "";
  export let slug;

  onMount(() => {
    mounted = true;
  });

  let price = 10;
  let availability = {};
  let amountDirty = false;

  const dispatch = createEventDispatcher();

  const mockData = {
    products: [
      {
        stock_counts: {
          total: 3,
          unavailable: 0,
        },
      },
    ],
  };

  $: totalPrice = amountValue * price || 0;
  $: selectedVariation = firstVariation();
  $: amountValueValid = amountValue >= 0 && amountValue <= maxSelectable;
  $: updateProductAvailability(variations, active, mounted);
  $: itemsInStock = stockById(selectedVariation.id);
  $: stockById = (id) =>
    availability[id] &&
    availability[id].products.reduce((a, v) => {
      const productItemsInStock =
        v.stock_counts.total - v.stock_counts.unavailable;
      return a + productItemsInStock;
    }, 0);

  $: maxSelectable = Math.min(itemsInStock, selectedVariation.maxAmount);

  const composeError = (string, maxAmount) =>
    string.replace("{maxAmount}", maxAmount);

  const updateProductAvailability = async (variations, active, mounted) => {
    if (variations.length > 0 && active && mounted) {
      for (const variation of variations) {
        const { id } = variation;
        fetch(`/netlify/product?id=${id}&rental=false`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.products) {
              availability[id] = mockData;
            } else {
              availability[id] = data;
            }
          });
      }
    }
  };

  const firstVariation = () => variations[0];

  const dispatchState = () =>
    dispatch("stateChange", {
      valid: Boolean(amountValueValid && selectedVariation),
      productSlug: slug.current,
      selectedVariation,
      amountValue,
    });

  export const subtract = () => (amountValue > 0 ? amountValue-- : void 0);
  export const add = () =>
    amountValue < maxSelectable ? amountValue++ : void 0;
</script>

<div class="flex items-center">
  <div class="w-24 h-24 bg-red-pure">
    <Image
      alt={image.alt}
      url={serializeImage(image, 200)}
      classes={"w-full h-full"}
    />
  </div>
  <div
    class="px-4 flex flex-1 flex-col md:flex-row items-start md:items-center"
  >
    <div class="h-full flex-1">
      <h6>{name}<span> <AvailabilityChip amount={itemsInStock} /></span></h6>
      <p>{info}</p>
    </div>
    <div class="flex items-center">
      <div class="w-36">
        <div class="relative rounded-md">
          <button
            use:focusable
            class="absolute inset-y-0 left-0 flex items-center py-2 px-4 border-gray-300 border-r-2 border-solid"
            on:click={() => {
              subtract();
              dispatchState();
            }}>-</button
          >
          <input
            min="0"
            step="1"
            on:keyup={() => {
              amountDirty = true;
              dispatchState();
            }}
            on:change={() => {
              dispatchState();
            }}
            max={maxSelectable}
            bind:value={amountValue}
            type="number"
            class="text-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-12 sm:text-sm {!amountValueValid &&
            amountDirty
              ? 'border-red-pure'
              : 'border-gray-300'} rounded-md"
            placeholder="0"
          />
          <button
            use:focusable
            class="absolute inset-y-0 right-0 flex items-center py-2 px-4 border-gray-300 border-l-2 border-solid"
            on:click={() => {
              add();
              dispatchState();
            }}>+</button
          >
        </div>
        {#if !amountValueValid && amountDirty}
          <p class="text-sm text-red-pure">
            {composeError(uiFields.amountError, maxSelectable)}
          </p>
        {/if}
      </div>
      <div class="flex justify-end ml-6 w-16">
        &euro; {totalPrice.toFixed(2)}
      </div>
    </div>
  </div>
</div>
