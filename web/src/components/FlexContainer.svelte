<script>
  export let justify;
  export let align;

  $: j = () => {
    switch (justify) {
      case "start":
        return "justify-start";
      case "center":
        return "justify-center";
      case "end":
        return "justify-end";
    }
  };

  $: a = () => {
    switch (align) {
      case "start":
        return "items-start";
      case "center":
        return "items-center";
      case "end":
        return "items-end";
    }
  };
</script>

<div class="w-full h-full flex {j()} {a()}">
  <slot />
</div>
