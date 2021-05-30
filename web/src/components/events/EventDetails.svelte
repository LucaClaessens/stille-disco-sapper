<script context="module">
  import Button from "../../components/Button.svelte";
  import { receive, send } from "../../core/directives/crossfade";
  import projectLanguage from "../../utils/i18n/projectLanguage";

  export const formatDate = (date, lang) => {
    const locale = projectLanguage(lang, true);
    return new Date(date).toLocaleDateString(locale, {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
  };
</script>

<script>
  import Image from "../Image.svelte";

  export let startDate;
  export let publicity;
  export let venue;
  export let index;
  export let ticketButtonText;
</script>

<div
  in:receive={{ key: `event-list-item-${index}` }}
  out:send={{ key: `event-list-item-${index}` }}
  class="py-6 w-100 flex justify-between items-center"
>
  <span class="text-gray-100">{formatDate(startDate)}</span>
  <span class="text-gray-50 text-xl"
    >{venue.name},
    {venue.city}</span
  >
</div>
<div class="py-6">
  {#if !publicity.media.images || publicity.media.images.length == 0}
    <div
      class="bg-gradient-to-br from-red-pure via-green-pure to-blue-pure w-full h-64"
    />
  {:else}
    <Image
      cover={false}
      classes="h-64"
      url={publicity.media.images[0].url}
      alt={publicity.media.images[0].name}
    />
  {/if}
  <p class="py-6">
    {@html publicity.text_html}
  </p>
  <a href={publicity.ticketShopUrl} target="_blank" referrer="none"
    ><Button invert={true}>{ticketButtonText}</Button></a
  >
</div>
