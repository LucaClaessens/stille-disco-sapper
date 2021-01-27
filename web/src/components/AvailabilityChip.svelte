<script>
  export let amount;
  export let available = "available";

  $: color = amount && amount > 0 ? "green" : "red";
  $: displayClasses = amount === undefined ? "hidden" : "";
  $: loaderClass = amount !== undefined ? "hidden" : "";
</script>

<span
  class="{loaderClass} absolute w-2 h-2 rounded-xl bg-{color}-pure mr-2 animate-ping opacity-75"
/>

<div
  class="ml-2 text-xs {displayClasses} inline-flex items-center justify-start"
>
  <span class="w-2 h-2 rounded-xl bg-{color}-pure mr-2" />
  {amount}
  {available}
</div>
