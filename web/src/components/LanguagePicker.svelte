<script>
  import { goto } from "@sapper/app";
  import { focusable } from "./../core/directives/focusable";

  export let lang;
  export let path;

  const updateLanguage = (e) => {
    if (e.target.value !== lang) {
      const newRoute = path.replace(lang, e.target.value);
      goto(`/${e.target.value}`, {
        replaceState: true,
      });
    }
  };
</script>

<label for="language_preference" class="sr-only">Language preference</label>
<select
  use:focusable
  id="language_preference"
  name="language_preference"
  autocomplete="country"
  on:change={updateLanguage}
  on:blur={updateLanguage}
  bind:value={lang}
  class="block w-full py-2 pl-3 pr-8 border border-gray-300 dark:bg-black bg-white rounded-md shadow-sm">
  <option value="en">English</option>
  <option value="nl">Nederlands</option>
  <option value="fr">Francais</option>
  <option value="de">Deutsch</option>
</select>
