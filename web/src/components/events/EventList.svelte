<script>
  import { fade, fly } from "svelte/transition";
  import { receive, send } from "../../core/directives/crossfade";
  import { focusable } from "../../core/directives/focusable";
  import Icon from "../Icon.svelte";
  import Search from "../icons/Search.svelte";
  import EventDetails, { formatDate } from "./EventDetails.svelte";

  export let lang;
  export let events;
  export let activeEventIndex;
  export let placeholder = "placeholder";
  export let ticketButtonText = "Buy now";
  export let soldOutText = "Sold out";
  let query = "";

  const match = (search, part) =>
    search.trim().toLowerCase().includes(part.trim().toLowerCase());

  $: filteredEvents = events.filter(
    (e) => match(e.venue.city, query) || match(e.venue.name, query)
  );

  $: activeEvent = events[activeEventIndex];
</script>

<form id="search" role="search" aria-label={placeholder}>
  <label for="price" class="sr-only">Search for an event here</label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <span class="text-gray-50 sm:text-sm">
        <Icon>
          <Search />
        </Icon>
      </span>
    </div>
    <label for="event-search" class="sr-only">{placeholder}</label>
    <input
      bind:value={query}
      use:focusable
      type="search"
      name="event-search"
      id="search-input"
      aria-controls="search-results"
      spellcheck="false"
      class="block w-full pl-10 sm:text-sm border-none bg-black text-white rounded-md"
      {placeholder}
    />
  </div>
</form>

<div
  id="search-results"
  aria-live="polite"
  role="region"
  class="max-h-screen md:max-h-screen overflow-y-auto transition-all"
>
  {#each filteredEvents as event, index (event.eventId)}
    {#if index === activeEventIndex && !event.soldOut}
      <div class="relative" in:fade>
        <EventDetails {...activeEvent} {index} {ticketButtonText} />
      </div>
    {:else}
      <a
        out:fly={{ y: -20, duration: 300 }}
        href="{lang}/events?eid={event.eventId}"
        class="{event.soldOut
          ? 'pointer-events-none'
          : ''} px-2 py-2 w-100 flex hover:opacity-75 transition-opacity rounded-md opacity-{activeEventIndex ===
          -1 || index === activeEventIndex
          ? 100
          : 50}"
        use:focusable
      >
        <div
          in:receive={{ key: `event-list-item-${index}` }}
          out:send={{ key: `event-list-item-${index}` }}
          class="flex-1 flex justify-between items-center"
        >
          {#if !event.soldOut}
            <span class="text-gray-100">{formatDate(event.startDate)}</span>
          {:else}
            <span class="text-red-300">{soldOutText}</span>
          {/if}
          <span class="text-gray-50 text-xl"
            >{event.venue.name},
            {event.venue.city}</span
          >
        </div>
      </a>
    {/if}
  {/each}
</div>
