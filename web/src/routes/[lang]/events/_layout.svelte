<script context="module">
  export async function preload({ params, path }) {
    const { lang } = params;
    return { lang, path };
  }
</script>

<script>
  import Banner from "../../../components/Banner.svelte";
  import Header from "../../../components/Header.svelte";
  import RegionLayout from "../../../components/RegionLayout.svelte";
  import { globalSettings, navigationData } from "./../../../stores/layout";

  export let lang;
  export let path;
</script>

<RegionLayout {lang} {path}>
  <div slot="events" class="w-full h-full flex flex-col bg-black">
    <Header {lang} {path} {...$navigationData} />
    <Banner {...$globalSettings.banner} />
    <slot />
  </div>
</RegionLayout>
