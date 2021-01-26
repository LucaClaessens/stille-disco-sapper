<script context="module">
  import Checkout from "../../components/Checkout.svelte";
  import SEO from "../../components/SEO.svelte";
  import projectLanguage from "../../utils/i18n/projectLanguage";

  export async function preload({ host, params, path }) {
    const { lang } = params;
    try {
      const res = await this.fetch(`api/${projectLanguage(lang)}/checkout`);
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

  const { seo, checkoutFlow, dateSelection } = content;
</script>

<svelte:head>
  <SEO {host} {path} {seo} {lang} />
</svelte:head>

<Checkout flow={checkoutFlow} {dateSelection} />
