<script>
  import { createEventDispatcher } from "svelte";
  import CheckoutProduct from "./CheckoutProduct.svelte";

  export let products = [];
  export let heading = "Any other products that you would like to buy?";
  export let active = false;
  export let info;
  export let uiFields = {};

  $: childrenValidStates = products.map(() => true);
  $: valid = childrenValidStates.every((v) => v === true);
  $: productStates = {};

  const updateValidity = (e, i) => {
    const { detail } = e;
    childrenValidStates[i] = detail.valid;
    productStates[detail.productSlug] = {
      variationId: detail.selectedVariation.variationId,
      amount: detail.amountValue,
      isRental: false,
    };
    dispatchState(valid);
  };

  const dispatch = createEventDispatcher();

  const dispatchState = (valid) =>
    dispatch("stateChange", {
      valid: valid,
      productStates,
    });

  $: dispatchState(valid);
</script>

<div id="miscControl" class="md:flex-1">
  <div class="p-6 md:p-12 w-full h-full flex flex-col">
    <div class="mb-6 md:mb-12 w-full">
      <legend class=" font-medium text-2xl text-gray-900">{heading}</legend>
      <p class="text-base text-gray-500">{info}</p>
    </div>
    <div class="mt-4 space-y-4 mb-6 md:mb-12 w-full flex-1 overflow-y-auto">
      {#each products as product, index}
        <hr />
        <CheckoutProduct
          {...product}
          {active}
          {uiFields}
          on:stateChange={(e) => updateValidity(e, index)}
        />
      {/each}
      <hr />
    </div>
  </div>
</div>
