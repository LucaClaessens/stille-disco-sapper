<script>
  import { gsap, TweenMax } from "gsap";
  import ScrollMagic from "scrollmagic";
  import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Button from "./Button.svelte";

  let imgPath;
  let sectionRef;
  let bgColor = "white";
  export let sequence = {
    images: [],
    messages: [],
  };
  const obj = { curImg: 0 };
  const animLength = 56;

  let curIndex = 0;

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);

  onMount(async () => {
    const controller = new ScrollMagic.Controller();

    // create tween
    const tween = gsap.to(obj, 0.5, {
      curImg: animLength - 1, // animate propery curImg to number of images
      roundProps: "curImg", // only integers so it can be used as an array index
      repeat: 0, // only play once
      immediateRender: true, // load first image automatically
      ease: "Linear.easeNone", // show every image the same ammount of time
      onUpdate: function () {
        //update logica
        curIndex = obj.curImg;
        imgPath = `201207_StilleDisco_scrollanim_v2_0${
          obj.curImg > 9 ? `${obj.curImg}0` : `0${obj.curImg}0`
        }`;
      },
    });

    // build scene
    const scene = new ScrollMagic.Scene({
      triggerElement: "#animation",
      triggerHook: 0,
      offset: 0,
      duration: "250%",
    })
      .setPin("#animation")
      .setTween(tween)
      .addTo(controller);
  });
</script>

<section
  bind:this={sectionRef}
  id="animation"
  class="bg-{bgColor}-300 relative bg-gray-100 pointer-events-none"
  in:fade
>
  {#each sequence.messages as message}
    {#if message.startFrame <= curIndex && message.endFrame >= curIndex}
      <article
        class="snap-center p-6 w-full h-full absolute top-0 right-0 left-0 bottom-0 pointer-events-none"
      >
        <div
          class="w-full h-full flex justify-{message.justify} items-{message.align}"
        >
          <div
            transition:fly|local={{ y: -20, delay: 900, duration: 300 }}
            class="pointer-events-auto max-w-xs relative z-10 flex flex-col justify-start items-start"
          >
            <h3 class="mb-3 text-xl">{@html message.text}</h3>
            <Button cta={true}>{message.button}</Button>
          </div>
        </div>
      </article>
    {/if}
  {/each}

  <picture class="w-full h-full">
    <source srcset="/sequence/{imgPath}.webp" type="image/webp" />
    <source srcset="/pngsequence/{imgPath}.png" type="image/png" />
    <img class="object-cover" src="/pngsequence/{imgPath}.png" alt="Alt" />
  </picture>
</section>
