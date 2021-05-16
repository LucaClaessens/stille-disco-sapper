<script context="module">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import SEO from "./../../../components/SEO.svelte";
  import serializers from "./../../../components/serializers";
  import projectLanguage from "./../../../utils/i18n/projectLanguage";

  let layout, _lang;

  export async function preload({ host, params, path }) {
    const { lang } = params;

    if (!layout || _lang !== lang) {
      _lang = lang;
      try {
        const res = await this.fetch(
          `api/${projectLanguage(lang)}/rental-query`
        );
        const content = await res.json();
        return { content, lang, host, path };
      } catch (err) {
        this.error(500, err);
      }
    }
  }
</script>

<script>
  export let content;
  export let host;
  export let path;
  export let lang;
</script>

<svelte:head>
  <SEO {host} {path} seo={content.seo} {lang} />
</svelte:head>

<BlockContent blocks={content.body} {serializers} />
