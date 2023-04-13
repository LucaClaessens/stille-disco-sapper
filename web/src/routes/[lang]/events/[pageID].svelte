<script context="module">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import SEO from "./../../../components/SEO.svelte";
  import serializers from "./../../../components/serializers";
  import projectLanguage from "./../../../utils/i18n/projectLanguage";
  import { scaleLogo as scaleHeaderLogo } from "./../../../stores/layout";

  export async function preload({ host, params, path }) {
    const { lang, pageID } = params;
    try {
      const res = await this.fetch(
        `api/${projectLanguage(lang)}/events/${pageID}`
      );
      const content = await res.json();
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

{#if content.body}
  <BlockContent blocks={content.body} {serializers} />
{:else}
  <div class="w-full h-full flex justify-center items-center flex-col">
    <p />
    <h2 class="text-3xl md:text-5xl mb-6 font-heading">404</h2>
  </div>
{/if}
