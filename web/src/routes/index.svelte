<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
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
  <a href={param}>{param}</a>
{/each}
