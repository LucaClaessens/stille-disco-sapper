<script context="module">
  import { onMount } from "svelte";
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
        return { content, lang, host, path, eid: Number(eid) };
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

  let events = [];
  let loadingEvents = true;

  onMount(async () => {
    const res = await fetch(`/netlify/events`);
    events = await res.json();
    loadingEvents = false;
  });

  $: activeEventIndex = events.findIndex((e) => e.eventId === eid);
</script>

<svelte:head>
  <SEO {host} {path} seo={content.seo} {lang} />
</svelte:head>

<div class="w-full h-full overflow-y-auto flex flex-col justify-between">
  {#if activeEventIndex === -1}
    <span in:fly={{ duration: 500, y: -500 }}>
      <Callout px={6} py={12}>
        <h3 class="text-2xl font-heading">
          <FadeInBottom>{content.tagline}</FadeInBottom>
        </h3>
      </Callout>
    </span>
  {/if}

  <section
    in:fly={{ duration: 500, delay: 20, y: 500 }}
    id="events"
    class="p-6 flex-1 max-w-2xl"
  >
    {#if loadingEvents}
      <div class="animate-pulse">
        <div class="w-48 h-8 mt-1 mb-6 rounded-md bg-gray-700" />
        <div class="flex w-full justify-between mb-6">
          <div class="w-16 h-8 rounded bg-gray-700" />
          <div class="w-48 h-8 rounded bg-gray-700" />
        </div>
        <div class="flex w-full justify-between mb-6">
          <div class="w-16 h-8 rounded bg-gray-700" />
          <div class="w-48 h-8 rounded bg-gray-700" />
        </div>
        <div class="flex w-full justify-between mb-6">
          <div class="w-16 h-8 rounded bg-gray-700" />
          <div class="w-48 h-8 rounded bg-gray-700" />
        </div>
        <div class="flex w-full justify-between mb-6">
          <div class="w-16 h-8 rounded bg-gray-700" />
          <div class="w-48 h-8 rounded bg-gray-700" />
        </div>
        <div class="flex w-full justify-between mb-6">
          <div class="w-16 h-8 rounded bg-gray-700" />
          <div class="w-48 h-8 rounded bg-gray-700" />
        </div>
      </div>
    {:else if events.length > 0}
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
