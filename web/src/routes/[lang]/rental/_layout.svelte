<script context="module">
  import Banner from "../../../components/Banner.svelte";
  import Footer from "../../../components/Footer.svelte";
  import Header from "../../../components/Header.svelte";
  import Radio from "../../../components/Radio.svelte";
  import RegionLayout from "../../../components/RegionLayout.svelte";
  import {
    footerData,
    globalSettings,
    navigationData,
  } from "./../../../stores/layout";
  export async function preload({ params, path }) {
    const { lang } = params;
    return { lang, path };
  }
</script>

<script>
  export let lang;
  export let path;
</script>

<RegionLayout {lang} {path}>
  <div
    slot="rental"
    class="overflow-y-auto snap-y md:snap snap-proximity w-full h-full bg-gray-100"
  >
    <Header {lang} {path} {...$navigationData} />
    <Banner {...$globalSettings.banner} />
    <slot />
    <Radio active={true} />
    <Footer {lang} {...$footerData} />
  </div>
</RegionLayout>
