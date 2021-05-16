<script context="module">
  import * as sapper from "@sapper/app";
  import { language } from "./../../stores/language";
  import {
    activePath,
    activeSection,
    footerData,
    globalSettings,
    navigationData,
  } from "./../../stores/layout";
  import projectLanguage from "./../../utils/i18n/projectLanguage";
  import Logo from "./../../components/Logo.svelte";

  export async function preload({ params, path }) {
    const { lang } = params;
    try {
      const res = await this.fetch(`api/${projectLanguage(lang)}/layout`);
      const globalData = await res.json();
      return { globalData, lang, path };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  export let globalData;
  export let lang;

  // Bootstrap by setting locale
  if (process.browser) {
    document.querySelector("html").setAttribute("lang", lang);
  }

  $: {
    updateStaticComponents(globalData);
  }

  const sectionFromPath = (path) => {
    const suffix = path.replace(`/${lang}/`, "");
    const idx = suffix.indexOf("/") > -1 ? suffix.indexOf("/") : suffix.length;
    const section = suffix.slice(0, idx) || null;
    return section;
  };

  const { page } = sapper.stores();

  const updateStaticComponents = (data) => {
    navigationData.set(data.navigation);
    footerData.set(data.footer);
    globalSettings.set(data.settings);
  };

  page.subscribe((page) => {
    activePath.set(page.path);
    activeSection.set(sectionFromPath(page.path));
  });

  language.set(lang);
</script>

<Logo />

<slot />
