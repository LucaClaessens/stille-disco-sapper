<script context="module">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import SEO from "./../../../components/SEO.svelte";
  import serializers from "./../../../components/serializers";
  import projectLanguage from "./../../../utils/i18n/projectLanguage";

  export async function preload({ host, params, path }) {
    const { lang, pageID } = params;
    try {
      const res = await this.fetch(
        `api/${projectLanguage(lang)}/rental/${pageID}`
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

  const { seo } = content;
</script>

<svelte:head>
  <SEO {host} {path} {seo} {lang} />
</svelte:head>

{#if content.body}
  <BlockContent blocks={content.body} {serializers} />
{:else}
  <div class="w-full h-full flex justify-center items-center">
    <h2 class="text-3xl">404</h2>
  </div>
{/if}
