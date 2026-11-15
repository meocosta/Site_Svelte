<script lang="ts">
  let {
    text,
    speed = 50,
    size = 130,
    font = 0.7,
    repeat = 3,
    separator = " • ",
  }: {
    text: string;
    speed?: number;
    size?: number | string;
    font?: number | string;
    repeat?: number;
    separator?: string;
  } = $props();

  let array = $derived(
    Array.from({ length: Math.max(0, Math.floor(repeat)) }, () => [
      ...text,
      ...separator,
    ]).flat(),
  );
  let circleSize = $derived(typeof size === "number" ? `${size}px` : size);
  let textSize = $derived(typeof font === "number" ? `${font}em` : font);
</script>

<div
  class="seal"
  style="--size: {circleSize}; --speed: {speed * 1000}ms; --font: {textSize}"
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
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    animation: rotation var(--speed) linear infinite;
    font-size: var(--font);
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
</style>
