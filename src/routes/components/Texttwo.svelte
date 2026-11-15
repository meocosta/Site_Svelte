<script lang="ts">
  let {
    text = "",
    names = [],
    duration = 1200,
    interval = 3500,
  }: {
    text?: string;
    names?: string[];
    duration?: number;
    interval?: number;
  } = $props();

  let displayedText = $state("");
  let nameIndex = $state(0);

  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
  const randomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

  $effect(() => {
    if (names.length < 2) return;

    const timer = window.setInterval(() => {
      nameIndex = (nameIndex + 1) % names.length;
    }, Math.max(interval, duration));

    return () => window.clearInterval(timer);
  });

  $effect(() => {
    const target = names.length > 0 ? names[nameIndex % names.length] : text;
    const characters = [...target];
    const animationDuration = Math.max(1, duration);
    const startedAt = performance.now();

    displayedText = characters
      .map((character) => (character === " " ? character : randomSymbol()))
      .join("");

    const interval = window.setInterval(() => {
      const progress = Math.min(
        1,
        (performance.now() - startedAt) / animationDuration,
      );
      const revealedCount = Math.floor(progress * characters.length);

      displayedText = characters
        .map((character, index) => {
          if (character === " " || index < revealedCount || progress === 1) {
            return character;
          }

          return randomSymbol();
        })
        .join("");

      if (progress === 1) window.clearInterval(interval);
    }, 45);

    return () => window.clearInterval(interval);
  });
</script>

<span class="text-reveal" aria-label={names.length > 0 ? names[nameIndex % names.length] : text}>
  <span aria-hidden="true">{displayedText}</span>
</span>

<style>
  .text-reveal {
    display: inline-block;
    font-family: "Sora", sans-serif;
    white-space: pre-wrap;
  }
</style>
