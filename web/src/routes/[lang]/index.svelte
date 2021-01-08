<script context="module">
  import projectLanguage from "./../../utils/i18n/projectLanguage";

  export async function preload(page) {
    const { lang } = page.params;

    try {
      const res = await this.fetch(`api/${projectLanguage(lang)}/settings`);
      const settings = await res.json();
      return { settings };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  export let settings;
</script>

<h1>The language is {settings.description}</h1>
