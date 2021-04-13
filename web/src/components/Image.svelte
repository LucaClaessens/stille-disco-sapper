<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";

  export let url;
  export let alt;
  export let classes;
  export let cover = true;
</script>

<IntersectionObserver let:intersecting once={true}>
  <div class="overflow-hidden {classes}">
    {#if intersecting}
      <img
        loading="lazy"
        src={url}
        {alt}
        class="{intersecting ? 'animate-shrink-in' : ''} {cover == true
          ? 'object-cover'
          : 'object-contain'} h-full w-full"
      />
    {/if}
  </div>
</IntersectionObserver>
