<script>
  import { createEventDispatcher } from "svelte";
  import { focusable } from "./../core/directives/focusable";
  import slugify from "./../utils/slugify";
  import AvailabilityChip from "./AvailabilityChip.svelte";

  export let amountValue;
  export let variations = [];
  export let heading;
  export let variationDescriptor;
  export let slug;
  export let active;
  export let info;
  export let uiFields = {};
  export let isRental;
  export let from = "";
  export let till = "";

  let form;
  let availability = {};

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

  $: selectedVariation = firstVariation();
  $: amountValueValid = amountValue > 0 && amountValue <= maxSelectable;
  $: updateProductAvailability(variations, active);
  $: itemsInStock = stockById(selectedVariation.id);
  $: stockById = (id) =>
    availability[id] &&
    availability[id].products.reduce((a, v) => {
      const productItemsInStock =
        v.stock_counts.total - v.stock_counts.unavailable;
      return a + productItemsInStock;
    }, 0);

  $: maxSelectable = Math.min(itemsInStock, selectedVariation.maxAmount);

  let amountDirty = false;
  const dispatch = createEventDispatcher();

  const composeError = (string, maxAmount) =>
    string.replace("{maxAmount}", maxAmount);

  const updateProductAvailability = async (variations, active) => {
    if (variations.length > 0 && active) {
      for (const variation of variations) {
        const { id } = variation;
        fetch(`/netlify/product?id=${id}&till=${till}&from=${from}`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.products) {
              availability[id] = mockData;
            } else {
              const product = data.products[0];
              availability[id] = data;
              selectedVariation.variationId = product.id;
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
      isRental,
    });
</script>

<div id="variationControl" class="md:flex-1" data-checkout-step-active={active}>
  <div class="p-6 md:p-12 max-w-lg">
    <form bind:this={form} action="#">
      <fieldset>
        <div class="mb-6 md:mb-12">
          <h1 class=" font-medium text-2xl text-gray-900">{heading}</h1>
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
                  for="push_{slugify(variation.name)}"
                  class="ml-3 block text-sm font-medium text-gray-700"
                >
                  {variation.info}
                  <AvailabilityChip amount={stockById(variation.id)} />
                </label>
              </div>
            {/each}
          </div>
        {/if}
      </fieldset>
      <div>
        <label
          for="amount"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          {uiFields.quantity}
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
            {composeError(uiFields.amountError, maxSelectable)}
          </p>
        {/if}
      </div>
    </form>
  </div>
</div>
