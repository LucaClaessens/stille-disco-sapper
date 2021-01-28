<script context="module">
  import { fly } from "svelte/transition";
  import FadeInBottom from "../../../components/FadeInBottom.svelte";
  import Callout from "./../../../components/Callout.svelte";
  import EventList from "./../../../components/events/EventList.svelte";
  import SEO from "./../../../components/SEO.svelte";
  import projectLanguage from "./../../../utils/i18n/projectLanguage";

  let layout, _lang;

  export async function preload({ host, params, path, query }) {
    const { lang } = params;
    const { eid } = query;

    if (!layout || _lang !== lang) {
      _lang = lang;
      try {
        const res = await this.fetch(
          `api/${projectLanguage(lang)}/events-query`
        );
        const content = await res.json();
        return { content, lang, host, path, eid };
      } catch (err) {
        this.error(500, err);
      }
    }
  }
</script>

<script>
  export let content = {
    tagline: "Tagline default value",
    searchPlaceholder: "Search placeholder",
    ticketButtonText: "Placeholder",
    emptyStateText: "Empty state text placeholder",
  };
  export let host;
  export let path;
  export let lang;
  export let eid;

  const events = [
    { id: "5543c", date: "22 Feb", location: "Haarlem", venue: "Patronaat" },
    { id: "3hgk", date: "29 Feb", location: "Amsterdam", venue: "Paradiso" },
    { id: "3bg3", date: "29 Feb", location: "Eindhoven", venue: "Café de bie" },
    { id: "3hg4", date: "29 Feb", location: "Aalst", venue: "Onder 't dak" },
    { id: "4hgk", date: "29 Feb", location: "Rotterdam", venue: "Slinge yard" },
    { id: "5hgk", date: "29 Feb", location: "Arnhem", venue: "Slootwaterhok" },
    { id: "hhnk", date: "29 Feb", location: "Nijmegen", venue: "Hottentent" },
  ];

  // let events = [];

  $: activeEventIndex = events.findIndex((e) => e.id === eid);
</script>

<svelte:head>
  <SEO {host} {path} seo={content.seo} {lang} />
</svelte:head>

<div class="w-full h-full overflow-y-auto flex flex-col justify-between">
  {#if activeEventIndex === -1}
    <span in:fly={{ duration: 500, y: -500 }}>
      <Callout px={6} py={12}>
        <h3 class="text-2xl"><FadeInBottom>{content.tagline}</FadeInBottom></h3>
      </Callout>
    </span>
  {/if}

  <section
    in:fly={{ duration: 500, delay: 20, y: 500 }}
    id="events"
    class="p-6 flex-1"
  >
    {#if events.length > 0}
      <EventList
        {lang}
        {events}
        placeholder={content.searchPlaceholder}
        ticketButtonText={content.ticketButtonText}
        {activeEventIndex}
      />
    {:else}
      <div class="w-full h-full flex justify-center items-center">
        <p>{content.emptyStateText}</p>
      </div>
    {/if}
  </section>
</div>
