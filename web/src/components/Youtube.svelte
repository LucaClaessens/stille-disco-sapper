<script context="module">
  if (process.browser) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
</script>

<script>
  import { createEventDispatcher, onDestroy } from "svelte";
  export let videoId;
  let player;
  let divId = "player_" + parseInt(Math.random() * 109999);
  let playtimeInterval;
  let iFrameApiInterval;
  let iFrameApiReady =
    process.browser &&
    document.querySelector("#www-widgetapi-script") &&
    window.YT;

  export function play() {
    player.playVideo();
  }

  const dispatch = createEventDispatcher();

  if (process.browser) {
    window.onYouTubeIframeAPIReady = () => (iFrameApiReady = true);

    iFrameApiInterval = setInterval(() => {
      if (iFrameApiReady) {
        player = new YT.Player(divId, {
          width: "100%",
          videoId,
          events: {
            onReady: playerIsReady,
            onStateChange: playerStateChange,
          },
        });
        clearInterval(iFrameApiInterval);
      }
    }, 100);
  }

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
    playtimeInterval = setInterval(() => {
      dispatch("currentPlayTime", player ? player.getCurrentTime() : 0);
    }, 1000);
  }

  onDestroy(() => {
    clearInterval(playtimeInterval);
    player = null;
  });
</script>

<div id={divId} />
