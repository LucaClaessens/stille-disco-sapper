<script context="module">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import SEO from "./../../components/SEO.svelte";
  import serializers from "./../../components/serializers";
  import projectLanguage from "./../../utils/i18n/projectLanguage";
  import Banner from "../../components/Banner.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import Radio from "../../components/Radio.svelte";
  import {
    footerData,
    globalSettings,
    navigationData,
    scaleLogo as scaleHeaderLogo,
  } from "./../../stores/layout";

  export async function preload({ host, params, path }) {
    const { lang, pageID } = params;
    try {
      const res = await this.fetch(`api/${projectLanguage(lang)}/${pageID}`);
      const content = await res.json();
      console.log(`api/${projectLanguage(lang)}/${pageID}`, { content });
      return { content, lang, host, path };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  export let host;
  export let path;
  export let lang;
  export let content;

  const { seo, scaleLogo = false } = content;

  scaleHeaderLogo.set(scaleLogo);
</script>

<svelte:head>
  <SEO {host} {path} {seo} {lang} />
</svelte:head>

<Header {lang} {path} {...$navigationData} />
<Banner {...$globalSettings.banner} />

{#if content.body}
  <BlockContent blocks={content.body} {serializers} />
{:else}
  <div class="w-full h-full flex justify-center items-center flex-col">
    <p />
    <h2 class="text-3xl md:text-5xl mb-6 font-heading">404</h2>
  </div>
{/if}

<Radio active={true} breakMd={false} />
<Footer {lang} {...$footerData} />
