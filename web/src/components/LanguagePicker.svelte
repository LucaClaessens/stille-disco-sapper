<script>
  import { goto } from "@sapper/app";
  import { focusable } from "./../core/directives/focusable";

  export let lang;
  export let path;
  export let mode;

  const updateLanguage = (e) => {
    if (e.target.value !== lang) {
      const newRoute = path.replace(lang, e.target.value);
      goto(`/${e.target.value}`, {
        replaceState: true,
      });
    }
  };
</script>

<label for="language_preference_{mode}" class="sr-only"
  >Language preference</label
>
<select
  use:focusable
  id="language_preference_{mode}"
  name="language_preference_{mode}"
  autocomplete="country"
  on:change={updateLanguage}
  on:blur={updateLanguage}
  bind:value={lang}
  class="block w-full py-2 pl-3 pr-8 border-none dark:bg-black bg-white rounded-md"
>
  <option value="en">English</option>
  <option value="nl">Nederlands</option>
  <option value="fr">Francais</option>
  <option value="de">Deutsch</option>
</select>
