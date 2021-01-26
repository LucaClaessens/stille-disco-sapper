<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";
</script>

<IntersectionObserver let:intersecting once={true} wrap={true}>
  <div class="overflow-hidden w-full h-full">
    <div class="{intersecting ? 'animate-shrink-in' : ''} w-full h-full">
      <slot />
    </div>
  </div>
</IntersectionObserver>
