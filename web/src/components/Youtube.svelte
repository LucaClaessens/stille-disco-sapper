<script context="module">
  if (process.browser) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () =>
      window.dispatchEvent(new Event("iframeApiReady"));
  }
</script>

<script>
  import { createEventDispatcher } from "svelte";
  export let videoId;
  let player;
  let divId = "player_" + parseInt(Math.random() * 109999);
  export function play() {
    player.playVideo();
  }
  const dispatch = createEventDispatcher();
  window.addEventListener("iframeApiReady", function (e) {
    player = new YT.Player(divId, {
      height: "390",
      width: "640",
      videoId,
      events: {
        onReady: playerIsReady,
        onStateChange: playerStateChange,
      },
    });
  });
  function playerStateChange({ data }) {
    dispatch("PlayerStateChange", data);
    let strReturn = "";
    if (data == -1) {
      strReturn = "(unstarted)";
    }
    if (data == 0) {
      strReturn = "(ended)";
    }
    if (data == 1) {
      strReturn = "(playing)";
    }
    if (data == 2) {
      strReturn = "(paused)";
    }
    if (data == 3) {
      strReturn = "(buffering)";
    }
    if (data == 5) {
      strReturn = "(video cued).";
    }
    dispatch("PlayerStateChangeString", strReturn);
  }
  function playerIsReady() {
    dispatch("Ready");
    setInterval(() => {
      dispatch("currentPlayTime", player.getCurrentTime());
    }, 1000);
  }
</script>

<div id={divId} />
