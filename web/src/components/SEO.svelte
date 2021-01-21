<script>
  import serializeImage from "../utils/image/serializeImage";
  import projectLanguage from "./../utils/i18n/projectLanguage";

  export let seo = {
    title: "",
    excerpt: "",
    image: {},
  };
  export let host;
  export let path;
  export let lang;

  $: url = `https://${host}${path}`;
</script>

<meta name="title" content={seo.title} />
<meta name="description" content={seo.excerpt} />
<meta property="og:description" content={seo.excerpt} />
<meta property="og:locale" content={projectLanguage(lang)} />
<meta property="og:type" content="article" />
<meta property="og:url" content={url} />
<meta property="og:site_name" content="Stille Disco" />
<meta property="og:image" content={serializeImage(seo.image)} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content={seo.excerpt} />
<meta name="twitter:image" content={serializeImage(seo.image)} />
<title>{seo.title}</title>
