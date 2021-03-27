<script>
  import serializeImage from "../utils/image/serializeImage";
  import Icon from "./Icon.svelte";
  import Image from "./Image.svelte";
  import ShrinkIn from "./ShrinkIn.svelte";
  import CheckoutProduct from "./CheckoutProduct.svelte";

  const productsMock = [
    {
      name: "Prod A",
      price: 2.5,
      amount: 125,
    },
    {
      name: "Prod B",
      price: 3,
      amount: 4,
    },
  ];

  export let products = productsMock;
  export let heading = "Any other products that you would like to buy?";
  export let variationDescriptor;
  export let active = false;
  export let info;
  export let details;
  export let image = {};
  export let uiFields = {};

  let form;
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
      <div class="mb-6 md:mb-12">
        <legend class=" font-medium text-2xl text-gray-900">{heading}</legend>
        <p class="text-base text-gray-500">{info}</p>
      </div>
      <p class="text-sm text-gray-500">
        {variationDescriptor}
      </p>
      <div class="mt-4 space-y-4 mb-6 md:mb-12">
        {#each products as product}
          <CheckoutProduct {...product} {active} {uiFields} />
        {/each}
      </div>
    </div>
  </div>
</div>
