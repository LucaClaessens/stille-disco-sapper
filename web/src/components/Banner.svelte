<script>
  import { onMount } from "svelte";
  import { language } from "./../stores/language";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  export let bgColor = "red-pure";
  export let textColor = "white";
  export let text = {
    default: "Stuff",
    large: "Big stuff",
    dismiss: "dismiss",
    button: "learn more",
  };
  export let href = "#";
  export let localHref = false;
  export let active = true;
  export let display = false;

  function dispose() {
    active = false;
    display = false;
    updateStorage(false);
  }

  const updateStorage = (value) => {
    sessionStorage.setItem("banner", value);
  };

  onMount(() => {
    const stored = JSON.parse(sessionStorage.getItem("banner"));
    display = active && stored !== false;
  });

  $: lang = $language;
</script>

{#if display && text}
  <div class="bg-{bgColor} text-{textColor}">
    <div class="container mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg">
            <!-- Heroicon name: speakerphone -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </span>
          <p class="ml-3 dark:bext-white truncate">
            <span class="md:hidden">{text.default || ""}</span>
            <span class="hidden md:inline">
              {text.large || ""}
            </span>
          </p>
        </div>
        <div
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        >
          <a
            href="{localHref ? lang : ''}{href}"
            class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm  hover:opacity-50"
          >
            {text.button || ""}
          </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <Button on:click={dispose}>
            <span class="sr-only">{text.dismiss || ""}</span>
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
      </div>
    </div>
  </div>
{/if}
