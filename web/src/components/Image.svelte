<script>
  export let url;
  export let alt;
  export let classes;
</script>

<div
  class="bg-gradient-to-br from-red-pure via-green-pure to-blue-pure {classes}"
>
  <img loading="lazy" src={url} {alt} class="object-cover h-full w-full" />
</div>
