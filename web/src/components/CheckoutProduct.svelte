<script>
  import AvailabilityChip from "./AvailabilityChip.svelte";
  import { focusable } from "./../core/directives/focusable";
  import { onMount } from "svelte";
  import serializeImage from "../utils/image/serializeImage";
  import Image from "./Image.svelte";

  export let name = "name";
  export let selectedAmount = 1;
  export let variations = [];
  export let active = false;
  export let amountValue;
  export let mounted = false;
  export let uiFields = {};
  export let image = {};

  onMount(() => {
    mounted = true;
  });

  let price = 10;
  let availability = {};
  let amountDirty = false;

  $: {
    console.log({ variations, selectedVariation });
  }

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

  $: totalPrice = selectedAmount * price || 0;
  $: selectedVariation = firstVariation();
  $: amountValueValid = amountValue > 0 && amountValue <= maxSelectable;
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

  export const subtract = () =>
    selectedAmount > 0 ? selectedAmount-- : void 0;
  export const add = () =>
    selectedAmount < maxSelectable ? selectedAmount++ : void 0;
</script>

<div class="flex rounded-md border-gray-700 border-2 md:border-0 border-solid">
  <div class="w-24 h-24 bg-red-pure">
    <Image
      alt={image.alt}
      url={serializeImage(image, 200)}
      classes={"w-full h-full"}
    />
  </div>
  <div class="p-4 h-full flex-1">
    <h6>{name}</h6>
    <AvailabilityChip amount={itemsInStock} />
    <div class="relative rounded-md">
      <button
        use:focusable
        class="absolute inset-y-0 left-0 flex items-center py-2 px-4 border-gray-300 border-r-2 border-solid"
        on:click={() => subtract()}>-</button
      >
      <input
        min="0"
        step="1"
        on:keyup={() => {
          amountDirty = true;
        }}
        on:change={() => {}}
        max={maxSelectable}
        bind:value={selectedAmount}
        type="number"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-12 sm:text-sm {!amountValueValid &&
        amountDirty
          ? 'border-red-pure'
          : 'border-gray-300'} rounded-md"
        placeholder="0"
      />
      <button
        use:focusable
        class="absolute inset-y-0 right-0 flex items-center py-2 px-4 border-gray-300 border-l-2 border-solid"
        on:click={() => add()}>+</button
      >
    </div>
    {#if !amountValueValid && amountDirty}
      <p class="text-sm text-red-pure">
        {composeError(uiFields.amountError, maxSelectable)}
      </p>
    {/if}
    <div class="flex justify-end">
      &euro; {totalPrice.toFixed(2)}
    </div>
  </div>
</div>
