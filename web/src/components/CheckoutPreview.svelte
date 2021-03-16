<script>
  import { focusable } from "./../core/directives/focusable";
  import { language } from "./../stores/language";
  import Icon from "./Icon.svelte";
  import Image from "./Image.svelte";

  export let backgroundImage = {
    alt: "alt text",
    url:
      "https://images.unsplash.com/photo-1532958447027-17ad18fa7887?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  };
  export let tagline = "Tagline content";
  export let customComposition = {
    title: "Make a customized Silent Disco",
    subtitle: "2-3 Channels, unlimited headphones",
  };
  export let textColor = "black";
</script>

<div class="md:flex snap-end h-96">
  <div
    class="md:flex-1 w-full h-96 md:h-auto relative flex items-end justify-start z-0"
  >
    <Image classes="w-full h-full" {...backgroundImage} />
    <h3
      class="absolute left-6 top-6 z-1 text-{textColor} text-2xl max-w-sm font-heading"
    >
      {tagline}
    </h3>
    <div
      class="md:flex-1 absolute bottom-0 right-0 bg-gray-100"
      id="checkout-options"
    >
      <a
        href="{$language}/checkout?composition=custom"
        use:focusable
        id="custom-checkout"
        class="flex hover:opacity-75"
      >
        <div class="flex-1 p-6 flex flex-col">
          <span class="text-xs">{customComposition.subtitle}</span>
          <p>{customComposition.title}</p>
        </div>
        <div
          class="flex justify-center items-center p-6 bg-blue-pure text-white w-20"
        >
          <Icon>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </Icon>
        </div>
      </a>
    </div>
  </div>
</div>

<!-- {#each bundles as bundle}
      <a
        href="{$language}/checkout?composition=predefined&bundle={bundle.id}"
        use:focusable
        class="bg-gray-100 flex flex-row hover:opacity-75">
        <div class="w-3 bg-{bundle.color}-pure" />
        <div class="flex-1 p-6 flex flex-col">
          <p>{bundle.title}</p>
          <span class="text-xs">{bundle.subtitle}</span>
        </div>
        <div
          class="flex-0 flex justify-center items-center p-6 bg-blue-400 text-white w-20"
        >
          <Icon>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </Icon>
        </div>
      </a>
    {/each} -->
