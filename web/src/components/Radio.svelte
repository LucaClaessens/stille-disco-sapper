<script>
  import { onDestroy } from "svelte";
  import { globalSettings } from "./../stores/layout";
  import Channel from "./Channel.svelte";

  export let active = false;
  export let breakMd = true;

  let activeChannelKey = "red";
  let channels = [];

  const unsubscribe = globalSettings.subscribe(($value) => {
    const { radio } = $value;

    activeChannelKey = radio.defaultChannel;
    channels = [radio.channels.red, radio.channels.green, radio.channels.blue];
  });

  const focusChannel = (event) =>
    active ? (activeChannelKey = event.detail.key) : void 0;

  const calculateScale = (active, aKey, key) =>
    active && aKey === key ? 10 : 2;

  onDestroy(unsubscribe);
</script>

<div class="z-10 flex flex-col {breakMd ? 'md:flex-row' : ''} flex-none">
  {#each channels as channel}
    <Channel
      {breakMd}
      on:focus={focusChannel}
      scale={calculateScale(active, activeChannelKey, channel.key)}
      active={active && activeChannelKey === channel.key}
      {...channel}
    />
  {/each}
</div>
