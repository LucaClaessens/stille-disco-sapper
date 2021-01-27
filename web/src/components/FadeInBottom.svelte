<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";
</script>

<IntersectionObserver let:intersecting once={true} wrap={false}>
  <div class={intersecting ? "animate-fadein-bottom" : ""}>
    <slot />
  </div>
</IntersectionObserver>
