<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  let imgPath;
  let sectionRef;
  let ScrollMagic;
  let bgColor = "white";
  const obj = { curImg: 0 };
  const animLength = 56;

  onMount(async () => {
    const s = await import("scrollmagic");
    ScrollMagic = s.default;

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
        imgPath = `201207_StilleDisco_scrollanim_v2_0${
          obj.curImg > 9 ? `${obj.curImg}0` : `0${obj.curImg}0`
        }`;

        if (obj.curImg < 25) {
          bgColor = "red";
        } else if (obj.curImg < 50) {
          bgColor = "green";
        } else {
          bgColor = "blue";
        }
      },
    });

    // build scene
    const scene = new ScrollMagic.Scene({
      offset: sectionRef.offsetTop,
      duration: "250%",
    })
      .setPin("#animation")
      .setTween(tween)
      .addTo(controller);
  });
</script>

<style>
  section#animation {
    transition: background-color 1.1s ease-in-out;
  }
  .red {
    background-color: rgb(255, 212, 212);
  }
  .green {
    background-color: rgb(212, 255, 212);
  }
  .blue {
    background-color: rgb(212, 212, 255);
  }
</style>

<section bind:this={sectionRef} id="animation" class={bgColor}>
  <picture>
    <source srcset="/sequence/{imgPath}.webp" type="image/webp" />
    <source srcset="/pngsequence/{imgPath}.png" type="image/png" />
    <img src="/pngsequence/{imgPath}.png" alt="Alt" />
  </picture>
</section>
