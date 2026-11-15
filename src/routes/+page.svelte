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
  const cardKeys2 = ["card_1", "card_2", "wellbeing"];
  const textosMessages1 = ["text1", "text2"];
  const textosMessages2 = ["text3", "text4"];
  const textosMessages3 = ["text5", "text6"];
  const textosMessages4 = ["text7", "text8"];
  let textosIndex = $state(0);
  let textosIndex2 = $state(0);
  let textosIndex3 = $state(0);
  let textosIndex4 = $state(0);
  let activeTab = $state(0);

  function activateNextTab() {
    activeTab = (activeTab + 1) % 2;
  }

  onMount(() => {
    const interval = window.setInterval(() => {
      textosIndex = (textosIndex + 1) % textosMessages1.length;
      textosIndex2 = (textosIndex + 1) % textosMessages2.length;
      textosIndex3 = (textosIndex + 1) % textosMessages3.length;
      textosIndex4 = (textosIndex + 1) % textosMessages4.length;
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
        {t(`terceiraseção.${textosMessages1[textosIndex]}`, language.value)}
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
        {t(`terceiraseção.${textosMessages2[textosIndex2]}`, language.value)}
      </p>
    </section>>

    <section class="cards-section" aria-label="BioShield highlights">
      <div class="cards-grid">
        {#each cardKeys2 as key}
          <Cards
            titulo={t(`cards2.${key}.title`, language.value)}
            text={t(`cards2.${key}.text`, language.value)}
          />
        {/each}
      </div>
    </section>

    <section class="textos">
      <p>
        {t(`terceiraseção.${textosMessages3[textosIndex3]}`, language.value)}
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

    <section class="textos">
      <p>
        {t(`terceiraseção.${textosMessages4[textosIndex4]}`, language.value)}
      </p>
    </section>

    <section id="abas2">
      <div class:ativa={activeTab === 0}>
        <Aba text={t("aba2.text1", language.value)} />
      </div>
      <div id="segunda" class:ativa={activeTab === 1}>
        <Aba text={t("aba2.text2", language.value)} />
      </div>
    </section>

    <footer class="site-footer">
      <small>© {new Date().getFullYear()} BioShield Space. All rights reserved.</small>
      <section class="references" aria-labelledby="references-title">
        <h2 id="references-title">Clinical &amp; Aerospace References</h2>
        <ol>
          <li>NASA-STD-3001 Vol. 1 &amp; 2: Space Flight Human-System Standard (NASA OCHMO).</li>
          <li>NASA HRP Evidence Reports: SANS (Brunstetter et al.) &amp; Adverse Cognitive/Behavioral Conditions and Psychiatric Disorders (Slack et al.).</li>
          <li>NASA ExMC Exploration Medical Conditions List (EMCL) &amp; ISS Integrated Medical Group (IMG) Medical Checklist.</li>
          <li>NASA HRP Spaceflight Standard Measures &amp; ARCHeR (Artemis Research for Crew Health and Readiness).</li>
          <li>Hinkelbein, J., et al. (2020). Cardiopulmonary resuscitation (CPR) during spaceflight – a guideline for CPR in microgravity. Scand J Trauma Resusc Emerg Med, 28(1), 108.</li>
          <li>Lee, A. G., et al. (2020). Spaceflight associated neuro-ocular syndrome (SANS) and the neuro-ophthalmologic effects of microgravity. npj Microgravity, 6, 7.</li>
          <li>Basner, M., et al. (2015). Development and validation of the Cognition test battery for spaceflight. Aerosp Med Hum Perform, 86(11), 942–952.</li>
          <li>Sharma T, Peng M, Curry S, Liu Y, Lohawala H, Sharma G. “The ex vivo human translaminar autonomous system to study spaceflight associated neuro-ocular syndrome pathogenesis (Retina, RT-PCR and electroretinography)”, NASA Open Science Data Repository, Version 1.</li>
          <li>Evetts SN, Evetts LM, Russomano T, Castro JC, Ernsting J. Basic life support in microgravity: evaluation of a novel method during parabolic flight. Aviat Space Environ Med. 2005 May;76(5):506-10. PMID: 15892553.</li>
          <li>Hinkelbein J, Kerkhoff S, Adler C, Ahlbäck A, Braunecker S, Burgard D, Cirillo F, De Robertis E, Glaser E, Haidl TK, Hodkinson P, Iovino IZ, Jansen S, Johnson KVL, Jünger S, Komorowski M, Leary M, Mackaill C, Nagrebetsky S, Neuhaus C, Rehnberg L, Romano GM, Russomano T, Schmitz J, Spelten O, Starck C, Thierry S, Velho R, Warnecke T. Cardiopulmonary resuscitation (CPR) during spaceflight - a guideline for CPR in microgravity from the German Society of Aerospace Medicine (DGLRM) and the European Society of Aerospace Medicine Space Medicine Group (ESAM-SMG). Scand J Trauma Resusc Emerg Med. 2020 Nov 2;28(1):108.</li>
          <li>Mader TH, Gibson CR, Pass AF, Kramer LA, Lee AG, Fogarty J, Tarver WJ, Dervay JP, Hamilton DR, Sargsyan A, Phillips JL, Tran D, Lipsky W, Choi J, Stern C, Kuyumjian R, Polk JD. Optic disc edema, globe flattening, choroidal folds, and hyperopic shifts observed in astronauts after long-duration space flight. Ophthalmology. 2011 Oct;118(10):2058-69.</li>
          <li>Stenger MB, Tarver WJ, Brunstetter T, et al. Evidence Report: Risk of Spaceflight Associated Neuro-ocular Syndrome (SANS). Houston, TX: NASA Lyndon B. Johnson Space Center, Human Research Program; 2017 Nov. Report No.: 20180000936. Available from: <a href="https://ntrs.nasa.gov/api/citations/20180000936/downloads/20180000936.pdf" target="_blank" rel="noreferrer">NASA Technical Reports Server</a>.</li>
          <li>Kanas, Nick &amp; Manzey, Dietrich. (2008). Space Psychology and Psychiatry. 10.1007/978-1-4020-6770-9.</li>
          <li>Lee AG, Mader TH, Gibson CR, Tarver W, Rabiei P, Riascos RF, Galdamez LA, Brunstetter T. Spaceflight associated neuro-ocular syndrome (SANS) and the neuro-ophthalmologic effects of microgravity: a review and an update. NPJ Microgravity. 2020 Feb 7;6:7.</li>
          <li>National Aeronautics and Space Administration (NASA). (n.d.). Central Nervous System, Behavioral Health, and Sensorimotor (CBS) Integrated Research Plan Problem Statement. NASA Human Research Program (HRP), Human Research Roadmap, Lyndon B. Johnson Space Center. <a href="https://humanresearchroadmap.nasa.gov/Evidence/other/Central%20Nervous%20System,%20Behavioral%20Health,%20and%20Sensorimotor%20(CBS)%20Integrated%20Research%20Plan%20Problem%20Statement.pdf" target="_blank" rel="noreferrer">NASA Human Research Roadmap</a>.</li>
          <li>Basner M, Savitt A, Moore TM, Port AM, McGuire S, Ecker AJ, Nasrini J, Mollicone DJ, Mott CM, McCann T, Dinges DF, Gur RC. Development and Validation of the Cognition Test Battery for Spaceflight. Aerosp Med Hum Perform. 2015 Nov;86(11):942-52.</li>
          <li>Blue, R., Nusbaum, D., &amp; Antonsen, E. (2019). Development of an Accepted Medical Condition List for Exploration Medical Capability Scoping (NASA Technical Memorandum No. NASA/TM-2019-220299; NTRS ID: 20190027540). National Aeronautics and Space Administration, Lyndon B. Johnson Space Center. <a href="https://ntrs.nasa.gov/citations/20190027540" target="_blank" rel="noreferrer">NASA Technical Reports Server</a>.</li>
        </ol>
      </section>
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

  #abas,
  #abas2 {
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
    box-sizing: border-box;
    flex-shrink: 0;
    font-family: "Righteous", sans-serif;
    text-align: center;
    height: 70vh;
  }

  .site-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem clamp(1rem, 5vw, 4rem);
    border-top: 1px solid rgb(255 255 255 / 12%);
    color: rgb(255 255 255 / 65%);
    font-family: "Sora", sans-serif;
    font-size: 0.8rem;
    text-align: center;
    background-color: black;
  }

  .references {
    width: min(100%, 1100px);
    text-align: left;
    color: rgb(255 255 255 / 65%);

    h2 {
      margin: 0 0 1rem;
      font-size: 1rem;
      text-align: justify;
    }

    ol {
      display: grid;
      gap: 0.65rem;
      margin: 0;
      padding-left: 1.5rem;
    }

    li {
      padding-left: 0.25rem;
      line-height: 1.6;
      overflow-wrap: anywhere;
    }
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

    #abas,
    #abas2 {
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

    #abas,
    #abas2 {
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

    #abas,
    #abas2 {
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

    #abas,
    #abas2 {
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
