<script>
  import Button from "./../components/Button.svelte";
  import Icon from "./../components/Icon.svelte";
  import Menu from "./../components/icons/Menu.svelte";
  import LanguagePicker from "./../components/LanguagePicker.svelte";
  import LinkButton from "./../components/LinkButton.svelte";
  import { activeSection, globalSettings } from "./../stores/layout";
  import serializeImage from "./../utils/image/serializeImage";

  export let path;
  export let lang;
  export let links = [];
  let menuExpanded = false;

  $: logoImage = $globalSettings.logoImage;
</script>

<header
  class="z-50 sticky top-0 md:relative snap-start w-full p-5 flex justify-between items-center bg-transparent"
>
  <LinkButton url={lang}>
    <h1 class="font-heading" aria-label="Return to homepage">
      <div id="site-logo" class="w-12">
        <img
          loading="lazy"
          class="object-cover w-full h-full"
          src={serializeImage(logoImage, 48)}
          alt={logoImage.alt}
        />
      </div>
    </h1>
  </LinkButton>
  <div class="md:hidden">
    <Button on:click={() => (menuExpanded = true)}>
      <span class="sr-only">Open menu</span>
      <Icon>
        <Menu />
      </Icon>
    </Button>
  </div>
  <nav class="hidden md:flex space-x-10">
    <div class="flex items-center justify-end">
      <span class="ml-6">
        <LanguagePicker {lang} {path} mode="header" />
      </span>
      {#each links as link}
        {#if link.visibility == "all" || link.visibility === $activeSection}
          <span class="ml-6">
            <LinkButton url="/{lang}{link.href}" text={link.text} />
          </span>
        {/if}
      {/each}
    </div>
  </nav>
</header>

<div
  class="fixed z-50 top-0 inset-x-0 p-0 transition transform origin-top-right md:hidden {menuExpanded
    ? ''
    : 'hidden'}"
>
  <div
    class="transition duration-500 ease-in-out shadow-md dark:bg-black bg-white ring-1 ring-black ring-opacity-5 overflow-hidden {menuExpanded
      ? 'opacity-100'
      : 'opacity-0'}"
  >
    <div class="p-5 flex items-center justify-between">
      <LinkButton url={lang}>
        <div id="site-logo" class="w-12">
          <img
            loading="lazy"
            class="object-cover w-full h-full"
            src={serializeImage(logoImage, 48)}
            alt={logoImage.alt}
          />
        </div>
      </LinkButton>
      <Button on:click={() => (menuExpanded = false)}>
        <span class="sr-only">Close menu</span>
        <Icon>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </Icon>
      </Button>
    </div>
    <div
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="main-menu"
      class="divide-y divide-gray-100"
    >
      <div class="py-2">
        {#each links as link}
          {#if link.visibility == "all" || link.visibility === $activeSection}
            <LinkButton
              layout="block px-6 py-3 mb-3"
              role="menuitem"
              url="/{lang}{link.href}"
              text={link.text}
            />
          {/if}
        {/each}
      </div>
      <div class="py-1">
        <div class="p-6">
          <LanguagePicker {lang} {path} mode="header_opened" />
        </div>
      </div>
    </div>
  </div>
</div>
