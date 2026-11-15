<script lang="ts">
  let { titulo, text }: { titulo: string; text: string } = $props();
</script>

<article class="card">
  <span class="card__accent" aria-hidden="true"></span>
  <h3 class="card__title">{titulo}</h3>
  <p class="card__text">{text}</p>
</article>

<style lang="scss">
  .card {
    position: relative;
    width: fit-content;
    padding: 2vw;
    overflow: hidden;
    border: 1px solid #fca311;
    border-radius: 1rem;
    background: #00000077;
    text-align: left;
    transition:
      transform 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease;
  }

  .card:hover {
    transform: translateY(-5px);
    border-color: #fca311;
  }

  .card__accent {
    display: block;
    height: 3px;
    margin-bottom: 1.1rem;
    border-radius: 999px;
    background: #fca311;
  }

  .card__title {
    margin: 0 0 0.65rem;
    color: #fff;
    font-family: "Righteous", sans-serif;
    font-weight: 400;
    line-height: 1.25;
  }

  .card__text {
    margin: 0;
    color: rgb(231 238 247 / 78%);
    font-family: "Sora", sans-serif;
    line-height: 1.7;
  }

  @media (prefers-reduced-motion: reduce) {
    .card {
      transition: none;
    }

    .card:hover {
      transform: none;
    }
  }

  /*computer*/

  @media (min-aspect-ratio: 1) {
    .card {
      max-width: 25vw;
      padding: 2vw;
    }

    .card__accent {
      width: 2.5rem;
    }

    .card__title {
      font-size: clamp(1.15rem, 1.8vw, 1.45rem);
    }

    .card__text {
      font-size: clamp(0.85rem, 1.15vw, 0.98rem);
    }
  }

  /*tablet*/

  @media (max-aspect-ratio: 1) and (min-aspect-ratio: 0.5){
    .card {
      max-width: 90vw;
      padding: 2vw;
    }

    .card__accent {
      width: 20%;
    }

    .card__title {
      font-size: 4vw;
    }

    .card__text {
      font-size: 3vw;
    }
  }

  /*tablet*/

  @media (max-aspect-ratio: 0.5) {
    .card {
      max-width: 90vw;
      padding: 2vw;
    }

    .card__accent {
      width: 20%;
    }

    .card__title {
      font-size: 5vw;
    }

    .card__text {
      font-size: 3.5vw;
    }
  }

</style>
