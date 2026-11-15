<script lang="ts">
  import { onMount } from "svelte";
  import type { Language } from "../lib/globals/language.svelte";
  import { t } from "#lib/functions/translate.ts";
  import Cards from "./components/Cards.svelte";
  import Text from "./components/Text.svelte";
  import Texttwo from "./components/Texttwo.svelte";
  import Aba from "./components/Abas.svelte";

  let language = $state({ value: "en-us" as Language });

  const cardKeys = ["monitoring", "research", "wellbeing"];
  const textosMessages = ["text1", "text2", "text3"];
  let textosIndex = $state(0);
  let activeTab = $state(0);

  function activateNextTab() {
    activeTab = (activeTab + 1) % 2;
  }

  onMount(() => {
    const interval = window.setInterval(() => {
      textosIndex = (textosIndex + 1) % textosMessages.length;
    }, 7000);
    const tabInterval = window.setInterval(activateNextTab, 10000);

    return () => {
      window.clearInterval(interval);
      window.clearInterval(tabInterval);
    };
  });
</script>

<section class="crt"></section>

<section id="site">
  <label class="language-picker">
    <span class="visually-hidden">Choose language / Escolha o idioma</span>
    <select
      aria-label="Choose language / Escolha o idioma"
      value={language.value}
      onchange={(event) =>
        (language.value = event.currentTarget.value as Language)}
    >
      <option value="en-us">EN</option>
      <option value="pt-br">PT</option>
    </select>
  </label>

  <section id="view" data-custom-scroll>
    <section id="intro">
      <h1 class="intro__title">ASTROCARE</h1>

      <div class="intro__copy">
        <Text
          text={t("intro.sub", language.value)}
          speed={50}
          repeat={2}
          separator=" • "
        />
      </div>
    </section>

    <section class="textos">
      <p>
        {t(`terceiraseção.text1`, language.value)}
      </p>
    </section>

    <section class="cards-section" aria-label="BioShield highlights">
      <div class="cards-grid">
        {#each cardKeys as key}
          <Cards
            titulo={t(`cards.${key}.title`, language.value)}
            text={t(`cards.${key}.text`, language.value)}
          />
        {/each}
      </div>
    </section>

    <section class="textos">
      <p>
        {t(`terceiraseção.text2`, language.value)}
      </p>
    </section>

    <section id="abas">
      <div class:ativa={activeTab === 0}>
        <Aba text={t("aba.text1", language.value)} />
      </div>
      <div id="segunda" class:ativa={activeTab === 1}>
        <Aba text={t("aba.text2", language.value)} />
      </div>
    </section>

    <section class="textos">
      <p>
        {t(`terceiraseção.text3`, language.value)}
      </p>
    </section>

    <section id="quem-somos">
      <div><h1>/* {t("quem", language.value)} */</h1></div>
      <div>
        <Texttwo
          names={[
            t("roles.elisa", language.value),
            t("roles.thais", language.value),
            t("roles.gustavo", language.value),
            t("roles.will", language.value),
          ]}
          duration={900}
          interval={5000}
        />
      </div>
      <div>
        <Texttwo
          names={[
            t("roles.frontend", language.value),
            t("roles.physician", language.value),
            t("roles.backend", language.value),
            t("roles.physicist", language.value),
          ]}
          duration={900}
          interval={5000}
        />
      </div>
    </section>
    <footer class="site-footer">
      <small
        >© {new Date().getFullYear()} BioShield Space. All rights reserved.</small
      >
    </footer>
  </section>
</section>

<style lang="scss">
  #quem-somos {
    align-items: center;
    background-color: black;
    flex-shrink: 0;
    font-family: "Righteous", sans-serif;
    white-space: pre-wrap;
    color: #fca311;
  }

  #abas {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 0vw;

    div {
      position: relative;
      z-index: 0;
      transition: top 600ms ease;
      opacity: 50%;
    }

    .ativa {
      z-index: 1;
      opacity: 100%;
    }
  }

  #segunda {
    margin-left: -20vw;
  }

  .crt {
    position: absolute;
    z-index: -1;
    min-height: 100vh;
    min-width: 100vw;
    background: #101a1300;
    overflow: hidden;
    isolation: isolate;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 10;

      background: repeating-linear-gradient(
        to bottom,
        transparent 0px,
        rgba(0, 0, 0, 0.15) 1px,
        transparent 2px,
        transparent 4px
      );
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 11;

      background: radial-gradient(
        ellipse,
        transparent 50%,
        rgba(0, 0, 0, 0.55) 100%
      );
    }
  }

  #site {
    background-color: rgba(0, 0, 0, 0.466);
  }

  #view {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  #intro {
    position: relative;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .language-picker {
    position: fixed;
    top: 2vh;
    left: 2vw;
    z-index: 1100;
  }

  .language-picker select {
    min-height: 40px;
    padding: 0.55rem 2rem 0.55rem 0.85rem;
    border: 1px solid rgb(255 255 255 / 28%);
    border-radius: 0.65rem;
    background: rgb(8 15 27 / 82%);
    color: #fff;
    font: inherit;
    font-family: "Sora", sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    backdrop-filter: blur(10px);
  }

  .language-picker option {
    background: #080f1b;
    color: #fff;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .intro__title {
    position: relative;
    z-index: 2;
    margin: 0;
    font-family: "Righteous", sans-serif;
    font-weight: 400;
    letter-spacing: 0.08em;
    line-height: 1;
  }

  .intro__copy {
    position: absolute;
    z-index: 1;
    font-family: "Sora", sans-serif;
  }

  .textos {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Righteous", sans-serif;
    text-align: center;
  }

  .site-footer {
    display: flex;
    min-height: 64px;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-top: 1px solid rgb(255 255 255 / 12%);
    color: rgb(255 255 255 / 65%);
    font-family: "Sora", sans-serif;
    font-size: 0.8rem;
    text-align: center;
  }
  /*computador*/
  @media (min-aspect-ratio: 1) {
    #quem-somos {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 5vw;
      min-height: 30vh;
      padding: 5vh 0vw;
      font-size: 1.5vw;

      h1 {
        font-size: 5vw;
      }

      div {
        width: 25vw;
      }
    }

    #abas {
      padding: 10vh 0vw;

      div {
        top: -5vh;
      }

      .ativa {
        top: 10vh;
      }
    }

    #segunda {
      margin-left: -20vw;
    }

    #intro {
      position: relative;
      display: flex;
      min-height: 100vh;
    }

    .language-picker {
      position: fixed;
      top: 2vh;
      left: 2vw;
      z-index: 1100;
    }

    .language-picker select {
      min-height: 40px;
      padding: 0.55rem 2rem 0.55rem 0.85rem;
      font-size: 0.9rem;
    }

    .intro__title {
      font-size: clamp(2rem, 4vw, 4.5rem);
    }

    .cards-section {
      padding: clamp(2rem, 5vw, 4rem) 0;
    }

    .cards-grid {
      display: grid;
      width: min(1120px, calc(100% - 3rem));
      margin: 0 auto;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(1rem, 2vw, 1.5rem);
    }

    .textos {
      font-size: 3vw;
      padding: 10vh 10vw;
    }
  }

  /*tablet*/
  @media (max-aspect-ratio: 1) and (min-aspect-ratio: 0.61) {
    #quem-somos {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 5vh 0vw;
      font-size: 4vw;

      h1 {
        font-size: 10vw;
        margin: 5vh 10vw;
      }
    }

    #abas {
      padding: 12vh 0vw;

      div {
        top: -10vh;
      }

      .ativa {
        top: 5vh;
      }
    }

    #segunda {
      margin-left: -60vw;
    }

    #intro {
      position: relative;
      display: flex;
      min-height: 100vh;
    }

    .language-picker select {
      min-height: 40px;
      padding: 0.55rem 2rem 0.55rem 0.85rem;
      font-size: 2vw;
    }


    .intro__title {
      font-size: 11vw;
    }

    .cards-section {
      padding: clamp(2rem, 5vw, 4rem) 0;
    }

    .cards-grid {
      display: flex;
      height: fit-content;
      gap: 5vh;
      justify-content: space-around;
      flex-direction: column;
      width: 90vw;
    }

    .textos {
      font-size: 4vw;
      padding: 3vh 10vw;
    }
  }

  /*tablet2*/
  @media (max-aspect-ratio: 0.61) and (min-aspect-ratio: 0.50) {
    #quem-somos {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 5vh 0vw;
      font-size: 5vw;

      h1 {
        font-size: 6vw;
        margin: 2vh 10vw;
      }
    }

    #abas {
      padding: 12vh 0vw;

      div {
        top: -10vh;
      }

      .ativa {
        top: 5vh;
      }
    }

    #segunda {
      margin-left: -80vw;
    }

    #intro {
      position: relative;
      display: flex;
      min-height: 100vh;
    }

    .language-picker select {
      min-height: 40px;
      padding: 0.55rem 2rem 0.55rem 0.85rem;
      font-size: 3vw;
    }


    .intro__title {
      font-size: 11vw;
    }

    .cards-section {
      padding: clamp(2rem, 5vw, 4rem) 0;
    }

    .cards-grid {
      display: flex;
      height: fit-content;
      gap: 4vh;
      justify-content: space-around;
      flex-direction: column;
      width: 90vw;
    }

    .textos {
      font-size: 5vw;
      padding: 3vh 10vw;
    }
  }

   /*celular*/
  @media (max-aspect-ratio: 0.5) {
    #quem-somos {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 5vh 0vw;
      font-size: 5vw;

      h1 {
        font-size: 6vw;
        margin: 2vh 10vw;
      }
    }

    #abas {
      padding: 9vh 0vw;

      div {
        top: -10vh;
      }

      .ativa {
        top: 5vh;
      }
    }

    #segunda {
      margin-left: -80vw;
    }

    #intro {
      position: relative;
      display: flex;
      min-height: 100vh;
    }

    .language-picker select {
      min-height: 40px;
      padding: 0.55rem 2rem 0.55rem 0.85rem;
      font-size: 3vw;
    }


    .intro__title {
      font-size: 11vw;
    }

    .cards-section {
      padding: clamp(2rem, 5vw, 4rem) 0;
    }

    .cards-grid {
      display: flex;
      height: fit-content;
      gap: 4vh;
      justify-content: space-around;
      flex-direction: column;
      width: 90vw;
    }

    .textos {
      font-size: 5vw;
      padding: 3vh 10vw;
    }
  }

</style>
