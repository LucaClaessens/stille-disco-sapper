<script>
  export let height = "none";
  export let classList;

  const calculatedHeight = (height) => {
    switch (height) {
      case "none":
        return "";
      case "small":
        return "h-6";
      case "medium":
        return "h-12";
      case "large":
        return "h-24";
      case "huge":
        return "h-48";
      default:
        return "";
    }
  };
</script>

<div class="spacer w-full {calculatedHeight(height)} {classList}" />
