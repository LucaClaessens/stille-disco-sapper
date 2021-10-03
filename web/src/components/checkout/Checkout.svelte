<script>
  import { onDestroy } from "svelte";
  import { checkoutService, userShoppingCart } from "../../stores/checkout";
  import { focusable } from ".../../../core/directives/focusable";
  import CheckoutDatePicker from "./CheckoutDatePicker.svelte";
  import CheckoutMisc from "./CheckoutMisc.svelte";
  import CheckoutStep from "./CheckoutStep.svelte";
  import CheckoutStepLayout from "./CheckoutStepLayout.svelte";
  import Icon from "../Icon.svelte";

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
  let state = {};

  const formatDateOffset = (date) => {
    var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
    var localTime = new Date(date.getTime() - tzoffset)
      .toISOString()
      .slice(0, 10);

    return localTime;
  };

  $: from = `${formatDateOffset(
    state.datePicker.from || new Date()
  )}T9:00:00.000Z`;
  $: till = `${formatDateOffset(
    state.datePicker.to || new Date()
  )}T23:00:00.000Z`;

  const unsubscribe = userShoppingCart.subscribe((cart) => {
    _cart = cart;
  });

  const updateState = (e) => {
    const { detail } = e;
    flowStepData = detail;
    updateCart();
  };

  const updateCart = () => {
    if (state.hasNext) {
      userShoppingCart.update((cart) => {
        cart[flowStepData.productSlug] = {
          variationId: flowStepData.selectedVariation.variationId,
          amount: flowStepData.amountValue,
          isRental: flowStepData.isRental,
        };
        return cart;
      });
    } else {
      userShoppingCart.update((cart) => {
        Object.entries(flowStepData.productStates).forEach(
          ([key, variation]) => {
            cart[key] = {
              variationId: variation.variationId,
              amount: variation.amount,
              isRental: variation.isRental,
              productId: variation.productId,
            };
          }
        );
        return cart;
      });
    }
  };

  const checkout = async () => {
    checkoutPending = true;
    const { cart } = await createOrder();
    checkoutPending = false;
    window.open(cart.checkout_url, "_self");
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
      starts_at: from,
      stops_at: till,
    };
    const ids = cartToPayload();

    const orderData = await fetch(`/netlify/order`, {
      method: "post",
      body: JSON.stringify({ order, ids }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    return orderData;
  };

  const unsubscribeState = checkoutService(flow, uiFields).subscribe(
    (_state) => {
      state = _state;
    }
  );

  onDestroy(unsubscribe);
  onDestroy(unsubscribeState);
</script>

<div class="flex flex-col w-full h-full">
  <div class="flex-1 overflow-y-auto">
    <CheckoutStepLayout
      details={dateSelection.details}
      image={dateSelection.image}
      active={state.index == 0}
    >
      <CheckoutDatePicker
        {...dateSelection}
        bind:selected={selectedDates}
        range={state.datePicker.rangeFormatted}
      />
    </CheckoutStepLayout>
    {#each flow as checkoutStep, index (checkoutStep._key)}
      <CheckoutStepLayout
        details={checkoutStep.details}
        image={checkoutStep.image}
        active={state.index == index + 1}
        let:active={stepActive}
      >
        <CheckoutStep
          {from}
          {till}
          {...checkoutStep}
          {uiFields}
          on:stateChange={updateState}
          active={stepActive}
        />
      </CheckoutStepLayout>
    {/each}
    <CheckoutStepLayout
      details={miscProducts.details}
      image={miscProducts.image}
      active={state.index == state.totalSteps - 1}
      let:active={miscActive}
    >
      <CheckoutMisc
        active={miscActive}
        {...miscProducts}
        {uiFields}
        on:stateChange={updateState}
      />
    </CheckoutStepLayout>
  </div>
  <div id="controls" class="flex flex-0">
    <div class="flex-1 flex flex-col justify-start items-start p-6">
      <span class="text-sm text-gray-500">
        {state.datePicker.rangeFormatted || dateSelection.noDatesSelected}
      </span>
      <h2 class="text-base md:text-xl font-medium capitalize">
        {uiFields.step}
        {state.current}/{state.totalSteps}: {state.stepName}
      </h2>
    </div>
    <button
      data-automation-id="prev"
      use:focusable
      class="disabled:opacity-50 flex justify-center items-center p-6 bg-blue-pure text-white w-20 hover:opacity-75"
      on:click={state.prev}
      disabled={!state.hasPrev}
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
    {#if state.hasNext}
      <button
        data-automation-id="next"
        disabled={state.current > 1
          ? !flowStepData.valid
          : selectedDates.length === 0}
        use:focusable
        on:click={state.next}
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
        data-automation-id="next"
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
