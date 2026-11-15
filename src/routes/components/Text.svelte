<script lang="ts">
  let {
    text,
    speed = 50,
    repeat = 3,
    separator = " • ",
  }: {
    text: string;
    speed?: number;
    repeat?: number;
    separator?: string;
  } = $props();

  let array = $derived(
    Array.from({ length: Math.max(0, Math.floor(repeat)) }, () => [
      ...text,
      ...separator,
    ]).flat(),
  );
</script>

<div
  class="seal"
  style=" --speed: {speed * 1000}ms;"
>
  {#each array as char, index}
    <div class="char" style="--angle: {`${(1 / array.length) * index}turn`}">
      {char}
    </div>
  {/each}
</div>

<style lang="scss">
  @keyframes rotation {
    0% {
      transform: rotate(0turn);
    }
    100% {
      transform: rotate(1turn);
    }
  }
  .seal {
    position: relative;
    width: 600px;
    height: 600px;
    border-radius: 100%;
    animation: rotation var(--speed) linear infinite;
    font-size: 1.5vw;
    font-family: "Sora", sans-serif;
  }

  .char {
    width: 1em;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotate(var(--angle, 0deg));
    text-align: center;
    text-transform: uppercase;
  }

  /*tablet*/
  @media (max-aspect-ratio: 1) and (min-aspect-ratio: 0.61) {
    .seal {
      width: 1000px;
      height: 1000px;
      font-size: 3vw;
    }
  }

  /*tablet2*/
  @media (max-aspect-ratio: 0.61) and (min-aspect-ratio: 0.5) {
    .seal {
      width: 500px;
      height: 500px;
      font-size: 3.5vw;
    }
  }

  /*tablet2*/
  @media (max-aspect-ratio: 0.5) {
    .seal {
      width: 700px;
      height: 700px;
      font-size: 4vw;
    }
  }
</style>
