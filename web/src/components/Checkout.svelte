<script>
  import { onDestroy } from "svelte";
  import { rentFrom, rentTill, userShoppingCart } from "../stores/checkout";
  import { language } from "../stores/language";
  import { focusable } from "./../core/directives/focusable";
  import AvailabilityChip from "./AvailabilityChip.svelte";
  import CheckoutDatePicker, { formatDate } from "./CheckoutDatePicker.svelte";
  import CheckoutMisc from "./CheckoutMisc.svelte";
  import CheckoutStep from "./CheckoutStep.svelte";
  import Icon from "./Icon.svelte";

  export let uiFields = {
    step: "step",
    dateSelection: "Date selection",
    miscItems: "Misc items",
  };

  export let dateSelection = {
    noDatesSelected: "No dates selected yet",
  };
  export let miscProducts = {};
  export let flow = [];

  let selectedDates = [];

  let _cart;
  let flowIndex = 0;
  let flowStepData = {};
  let checkoutPending = false;

  $: currentStep = flowIndex + 1;
  $: steps = flow.length + 2;

  $: hasPrevious = flowIndex > 0;
  $: hasNext = flowIndex < steps - 1;

  $: from = $rentFrom;
  $: till = $rentTill;
  $: lang = $language;

  $: formattedSelection =
    selectedDates.length === 0
      ? ""
      : `${formatDate(selectedDates[0])} → ${formatDate(selectedDates[1])}`;

  const unsubscribe = userShoppingCart.subscribe((cart) => {
    _cart = cart;
  });

  const updateValidity = (e) => {
    const { detail } = e;
    flowStepData = detail;
    console.log({ flowStepData });
  };

  const updateCart = () => {
    userShoppingCart.update((cart) => {
      cart[flowStepData.productSlug] = {
        variationId: flowStepData.selectedVariation.id,
        amount: flowStepData.amountValue,
      };
      return cart;
    });
  };

  const next = () => {
    if (flowIndex > 0) {
      updateCart();
    }
    flowIndex++;
  };

  const checkout = async () => {
    // updateCart();
    checkoutPending = true;
    const { cart } = await createOrder();
    checkoutPending = false;
    window.open(cart.checkout_url, "_blank");
  };

  const cartToPayload = () => {
    const payload = {};
    Object.entries(_cart).map(([_productSlug, { variationId, amount }]) => {
      payload[variationId] = amount;
    });
    return payload;
  };

  const createOrder = async () => {
    const order = {
      starts_at: `${from}T9:00:00.000Z`,
      stops_at: `${till}T23:00:00.000Z`,
    };
    const ids = cartToPayload();

    const orderData = await fetch(`/netlify/order`, {
      method: "post",
      body: JSON.stringify({ order, ids }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    return orderData;
  };

  const prev = () => flowIndex--;
  const propertyAt = (index, property) => {
    return index === 0
      ? uiFields.dateSelection
      : index === steps - 1
      ? uiFields.miscItems
      : flow[index - 1][property];
  };

  onDestroy(unsubscribe);
</script>

<div class="flex flex-col w-full h-full">
  <div class="flex-1 overflow-y-auto">
    <CheckoutDatePicker
      {...dateSelection}
      active={flowIndex == 0}
      bind:selected={selectedDates}
    />
    {#each flow as checkoutStep, index (checkoutStep._key)}
      <CheckoutStep
        {...checkoutStep}
        {uiFields}
        active={flowIndex == index + 1}
        on:stateChange={updateValidity}
      />
    {/each}
    <CheckoutMisc
      active={flowIndex == steps - 1}
      {...miscProducts}
      {uiFields}
      on:stateChange={updateValidity}
    />
  </div>
  <div id="controls" class="flex flex-0">
    <div class="flex-1 flex flex-col justify-start items-start p-6">
      <span class="text-sm text-gray-500">
        {formattedSelection || dateSelection.noDatesSelected}
      </span>
      <span class="text-base md:text-xl font-medium capitalize"
        >{uiFields.step}
        {currentStep}/{steps}: {propertyAt(flowIndex, "name")}</span
      >
    </div>
    <button
      use:focusable
      class="disabled:opacity-50 flex justify-center items-center p-6 bg-blue-pure text-white w-20 hover:opacity-75"
      on:click={prev}
      disabled={!hasPrevious}
    >
      <Icon>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </Icon>
    </button>
    {#if hasNext}
      <button
        disabled={flowIndex > 0
          ? !flowStepData.valid
          : selectedDates.length === 0}
        use:focusable
        on:click={next}
        class="disabled:opacity-50 flex justify-center items-center p-6 bg-blue-pure text-white w-20 hover:opacity-75"
      >
        <Icon>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </Icon>
      </button>
    {:else}
      <button
        disabled={!flowStepData.valid}
        use:focusable
        on:click={checkout}
        class="disabled:opacity-50 flex justify-center items-center p-6 bg-blue-pure text-white w-20  hover:opacity-75"
      >
        <Icon>
          {#if checkoutPending}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          {/if}
        </Icon>
      </button>
    {/if}
  </div>
</div>
