<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import projectLanguage from "../utils/i18n/projectLanguage";
  import { languages } from "./../../../studio/schemas/languages";

  const languageParams = languages.map((lang) =>
    projectLanguage(lang.name, true)
  );

  onMount(async () => {
    const navigatorLanguage = navigator.language;
    const parsedLanguage = projectLanguage(
      navigatorLanguage.replace("-", "_"),
      true
    );
    await goto("/" + parsedLanguage);
  });
</script>

<svelte:head>
  <title>Stille disco</title>
</svelte:head>

{#each languageParams as param}
  <a href={param} class="hidden">{param}</a>
{/each}

<div
  transition:fade
  class="bg-black w-full h-full flex items-center justify-center"
>
  <p class="text-white">🙂</p>
</div>
