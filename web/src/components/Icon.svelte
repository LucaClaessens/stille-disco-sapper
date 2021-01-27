<script>
  export let width = 18;
  export let height = 18;
  export let name = "";
  export let color = "currentColor";
  export let solid = false;

  $: fillType = solid ? color : "none";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 24 24"
  aria-labelledby={name}
  role="presentation"
  fill={fillType}>
  <title id={name} lang="en">{`${name} icon`}</title>
  <g stroke={color} fill={fillType}>
    <slot />
  </g>
</svg>
