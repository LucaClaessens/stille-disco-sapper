<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let once = false;
  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;
  export let wrap = true;
  export let containerClasses = "";

  const dispatch = createEventDispatcher();

  let intersecting = false;
  let prevState = false;
  let container;

  onMount(() => {
    if (typeof IntersectionObserver !== "undefined") {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

      const observer = new IntersectionObserver(
        (entries) => {
          intersecting = entries[0].isIntersecting;
          if (intersecting && once) {
            observer.unobserve(container);
          }

          if (intersecting !== prevState) {
            dispatch("change", intersecting);
          }

          prevState = intersecting;
        },
        {
          rootMargin,
        }
      );

      observer.observe(container);
      return () => observer.unobserve(container);
    }

    function handler() {
      const bcr = container.getBoundingClientRect();
      intersecting =
        bcr.bottom + bottom > 0 &&
        bcr.right + right > 0 &&
        bcr.top - top < window.innerHeight &&
        bcr.left - left < window.innerWidth;

      if (intersecting && once) {
        window.removeEventListener("scroll", handler);
      }
    }

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });
</script>

<div
  bind:this={container}
  class="{wrap ? 'w-full h-full' : ''} {containerClasses}"
>
  <slot {intersecting} />
</div>
