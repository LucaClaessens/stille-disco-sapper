<script context="module">
  import { language } from "./../../stores/language";
  import {
    footerData,
    globalSettings,
    navigationData,
  } from "./../../stores/layout";
  import projectLanguage from "./../../utils/i18n/projectLanguage";

  export async function preload({ params }) {
    const { lang } = params;
    try {
      const res = await this.fetch(`api/${projectLanguage(lang)}/layout`);
      const globalData = await res.json();
      return { globalData, lang };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  export let globalData;
  export let lang;

  language.set(lang);
  navigationData.set(globalData.navigation);
  footerData.set(globalData.footer);
  globalSettings.set(globalData.settings);
</script>

<slot />
