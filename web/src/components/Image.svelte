<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";

  export let url;
  export let alt;
  export let classes;
</script>

<IntersectionObserver let:intersecting once={true}>
  <div class="overflow-hidden {classes}">
    {#if intersecting}
      <img
        loading="lazy"
        src={url}
        {alt}
        class="{intersecting
          ? 'animate-shrink-in'
          : ''} object-cover h-full w-full"
      />
    {/if}
  </div>
</IntersectionObserver>
