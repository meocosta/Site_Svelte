<script lang="ts">
  const secoes = [
    { id: "astrocare", titulo: "AstroCare" },
    { id: "problem", titulo: "1. The problem" },
    { id: "solution", titulo: "2. The solution" },
    { id: "monitoring", titulo: "2.1 Continuous monitoring" },
    { id: "check-in", titulo: "2.2 Daily check-in and behavioral health" },
    { id: "emergency-mode", titulo: "2.3 Hands-free voice emergency mode" },
    { id: "repository", titulo: "3. What is in this repository" },
    { id: "architecture", titulo: "Architecture" },
    { id: "alert-rules", titulo: "Alert rules in the app" },
    { id: "data", titulo: "4. Data" },
    { id: "how-to-run", titulo: "5. How to run" },
    { id: "safety", titulo: "6. Safety principles and limitations" },
    { id: "roadmap", titulo: "7. Roadmap" },
    { id: "team", titulo: "8. Team" },
    { id: "ai-use", titulo: "9. Use of AI (disclosure)" },
    { id: "references", titulo: "10. References" },
    { id: "app-screens", titulo: "A. Screens of the app" },
    { id: "dialogue-rules", titulo: "B. Emergency dialogue rules" },
    { id: "protocols", titulo: "C. Emergency protocols" },
    { id: "pcr", titulo: "PCR — Cardiac Arrest" },
    { id: "sans", titulo: "SANS — Intracranial Hypertension" },
    { id: "psiq", titulo: "PSIQ — Psychiatric Emergencies" },
    { id: "metrics", titulo: "D. Monitoring — every metric" },
    { id: "timeline", titulo: "E. Simulated mission timeline" },
  ];

  let texto: HTMLElement | null = null;

  function irPara(id: string): void {
    if (typeof document === "undefined") return;

    const alvo = document.getElementById(id);
    if (alvo && texto) {
      texto.scrollTo({ top: alvo.offsetTop, behavior: "smooth" });
    }
  }
</script>

<div class="pagina">

<section id="top">
  <a href="/">Home</a>
</section>
<div class="layout">
  <nav>
    {#each secoes as secao}
      <a
        href="#{secao.id}"
        onclick={(event) => {
          event.preventDefault();
          irPara(secao.id);
        }}
      >
        {secao.titulo}
      </a>
    {/each}
  </nav>

  <section id="text" bind:this={texto}>
    <h2 id="astrocare">AstroCare</h2>
    <p>
      Autonomous clinical decision support and predictive health monitoring for
      deep-space missions.
    </p>
    <p>
      NASA International Space Apps Challenge 2026 · Challenge: Health
      Monitoring Software · Team BioShield Space
    </p>
    <p>
      AstroCare turns passive biomedical telemetry, daily crew check-ins and
      voice-activated emergency triage into real-time, autonomous medical
      guidance — built for communication blackouts and deep-space latency.
    </p>
    <p>
      All data in this project is SIMULATED. AstroCare is a hackathon prototype,
      not a medical device. It does not diagnose. Clinical content is pending
      validation by a physician.
    </p>

    <h2 id="problem">1. The problem</h2>
    <p>
      On missions to the Moon and Mars (NASA's Artemis program and beyond), a
      radio message to Earth can take up to ~20 minutes each way, and during
      solar conjunction the link can be silent for days or weeks. A medical
      event cannot wait for the ground.
    </p>
    <p>At the same time:</p>
    <p>
      The body changes in space. Microgravity, radiation and confinement shift
      each astronaut's physiology, so terrestrial "normal ranges" stop working.
      A value that is normal on Earth can be abnormal for a given astronaut in
      flight, and the reverse.
    </p>
    <p>
      Manual health logging fails over time. Long, repetitive forms lose
      adherence over months.
    </p>
    <p>
      Emergencies happen without a specialist and without free hands. Cardiac
      arrest, SANS (Spaceflight-Associated Neuro-ocular Syndrome) or an acute
      behavioral crisis may have to be handled by a non-physician crew member
      who is holding the patient, doing CPR or running an ultrasound, and cannot
      operate a screen.
    </p>
    <p>
      Crew health and spacecraft are coupled. A headache may be a high-CO₂
      problem, not a neurological one; a radiation spike changes what the crew
      should do next.
    </p>

    <h2 id="solution">2. The solution</h2>
    <p>
      AstroCare is an offline-first health hub for the crew. Its core principle
      is "AI observes, rules decide": AI is used only to turn unstructured
      inputs (speech, text) into data and to suggest. Every clinical step is a
      deterministic rule taken from published guidance, and the crew always
      confirms.
    </p>
    <p>It combines three capabilities.</p>

    <h2 id="monitoring">
      2.1 Continuous monitoring against a personal Earth baseline
    </h2>
    <p>
      Inputs: a smart biometric shirt (heart rate, SpO₂, respiration, skin
      temperature, HRV, blood pressure, sleep), personal and module radiation
      dosimeters, in-flight blood tests, and spacecraft ECLSS sensors (CO₂, O₂
      partial pressure, pressure, temperature, humidity).
    </p>
    <p>
      Personal baseline: every reading is compared with that astronaut's own
      baseline from the pre-flight period on Earth, not with population norms.
    </p>
    <p>
      Actionable alerts: deviations become clear next steps with the source of
      each rule. For example:
    </p>
    <p>
      "SpO₂ 91 % — below your baseline → recheck with a finger oximeter; if
      confirmed, lung ultrasound (POCUS)"
    </p>
    <p>
      "Radiation 5.7 mSv/h in Habitation, 77× normal → move the crew to the
      storm shelter"
    </p>
    <p>
      Environment first: crew health and spacecraft are treated as one system.
      Cabin CO₂ and radiation are checked before a symptom is attributed to a
      primary clinical cause (this is also step 1 of every emergency protocol).
    </p>

    <h2 id="check-in">
      2.2 Daily check-in and behavioral health (data-back loop)
    </h2>
    <p>
      Short daily voice/video check-in: the astronaut speaks for under a minute.
      The back end extracts voice features (speech rate, pauses, pitch
      variation, loudness), text features (positive/negative word ratio,
      sentiment) and self-reported mood, stress, fatigue, loneliness and sleep
      quality.
    </p>
    <p>
      Robust comparison: metrics are compared with the personal Earth baseline
      (median and MAD), smoothed over 7 days, and compared with the rest of the
      crew. A shared event, such as a CO₂ failure affecting everyone, does not
      trigger individual alerts.
    </p>
    <p>
      Persistence required: a signal needs ≥ 3 metrics deviating for ≥ 5
      consecutive days, so one bad day never raises an alarm.
    </p>
    <p>
      Two outputs: the crew gets an immediate Readiness index, and the flight
      surgeon gets a ground report (PDF + JSON) with charts, physiological
      monitoring, dosimetry and a "not a diagnosis" disclaimer. Full transcripts
      are never included (privacy).
    </p>

    <h2 id="emergency-mode">2.3 Hands-free voice emergency mode</h2>
    <p>
      Activation: voice ("AstroCare… Emergency") or the red microphone button.
    </p>
    <p>
      Identifying the emergency: the astronaut describes it in their own words,
      in English or Portuguese. An offline classifier suggests the protocol:
      "Understood: Cardiac Arrest in Microgravity. Confirm?". The AI never lists
      options, never decides alone, and anything outside its scope returns "I
      didn't understand".
    </p>
    <p>
      Step-by-step protocols: after confirmation and patient identification, a
      deterministic protocol engine guides one step at a time, spoken aloud and
      shown on screen.
    </p>
    <p>Decisions: questions the crew answers YES or NO.</p>
    <p>Mandatory alerts: steps the crew must acknowledge.</p>
    <p>
      Medication control: asks how many units were used and updates the onboard
      inventory (lot, expiry, location).
    </p>
    <p>
      Protocol gaps: if the protocol does not define the next step, the engine
      stops, says so and tells the crew to contact the medical team. Nothing is
      invented.
    </p>
    <p>
      Protocols in the prototype: Cardiac Arrest in Microgravity (PCR), SANS /
      acute intracranial hypertension, and Acute Psychiatric &amp; Behavioral
      Emergencies (PSIQ). Each is versioned and hashed (SHA-256) so the record
      proves exactly which version was followed.
    </p>
    <p>
      Automatic care record: every word, answer, step and medication goes into a
      timeline and an Emergency Care Record (PDF, PT and EN), queued for the
      ground.
    </p>

    <h2 id="repository">3. What is in this repository</h2>
    <p>
      Monitoring back end (astrocare/): audio check-in pipeline, voice and text
      features, personal baseline (median/MAD), comparison with the crew, daily
      status, SQLite history, daily and ground reports (PDF/JSON, PT/EN),
      physiological simulator.
    </p>
    <p>
      Emergency back end (astrocare/emergency/): offline emergency classifier,
      dialogue manager, protocol engine (JSON state machines), session log,
      medical inventory, care record PDF, offline voice (Vosk + pyttsx3).
    </p>
    <p>
      Protocols (astrocare/emergency/protocols/*.json): PCR, SANS and PSIQ
      decision trees, transcribed from the team's clinical protocol document.
    </p>
    <p>
      App — interface (streamlit_app.py, app/): mobile app: Crew, astronaut
      detail, Ship, Records and Emergency mode. Deterministic alert rules in
      app/rules.py.
    </p>
    <p>
      Simulated sensor feed (app/sim.py, app/sim_data/): 180 days of simulated
      hourly and daily data for 4 astronauts, cabin and modules, with mission
      events.
    </p>
    <p>
      Website (site/): landing page that runs the app inside an iPhone frame, so
      anyone can try it in a browser.
    </p>

    <h2 id="architecture">Architecture</h2>
    <p>
      Smart shirt · dosimeters · blood tests · cabin ECLSS → rules engine
      (app/rules.py) → actionable alerts
    </p>
    <p>
      Daily voice/video check-in → voice + text features → personal baseline ·
      7-day smoothing · crew comparison → status + ground report
    </p>
    <p>
      "AstroCare, emergency" → speech-to-text → classifier (suggests) → crew
      confirms → protocol engine → care record + inventory
    </p>
    <p>Everything runs on board · works with no link to Earth.</p>

    <h2 id="alert-rules">Alert rules in the app (deterministic)</h2>
    <p>
      SpO₂ — threshold: &lt; 94 % watch · &lt; 90 % act. Action: recheck with a
      finger oximeter; lung ultrasound (POCUS); oxygen per checklist. Basis:
      clinical practice; personal baseline.
    </p>
    <p>
      Resting heart rate — threshold: &gt; 100 bpm at rest. Action: 12-lead ECG;
      repeat in 15 min. Basis: clinical practice.
    </p>
    <p>
      Hemoglobin — threshold: ≤ −10 % vs Earth baseline (act ≤ −18 %). Action:
      repeat the blood count; monitor fatigue. Basis: space anemia / hemolysis
      (Trudel et al., 2022).
    </p>
    <p>
      Personal radiation dose — threshold: &gt; 3× usual daily dose. Action:
      stay in the storm shelter; log exposure. Basis: personal dosimeter.
    </p>
    <p>
      Mission dose — threshold: % of the 600 mSv career limit. Action: display
      only. Basis: NASA-STD-3001 Vol. 1.
    </p>
    <p>
      Cabin CO₂ — threshold: ≥ 3.0 mmHg watch · ≥ 4.0 act. Action: increase CO₂
      scrubbing; check for headache / blurred vision. Basis: NASA-STD-3001 Vol.
      2 [V2 6004]; ISS CO₂ operations data.
    </p>
    <p>
      O₂ partial pressure — threshold: outside 19.5–23.5 kPa. Action: check O₂
      supply and cabin pressure. Basis: cabin ECLSS.
    </p>
    <p>
      Module radiation — threshold: ≥ 5× the module's normal rate. Action: move
      the crew to the storm shelter; postpone EVAs. Basis: solar particle event
      response.
    </p>
    <p>
      Behavioral pattern — threshold: back-end status "alert" or "attention".
      Action: private psychological conference with the flight surgeon. Basis:
      NASA HRP behavioral health evidence.
    </p>

    <h2 id="data">4. Data</h2>
    <p>
      All data is simulated. Real astronaut medical data is restricted (NASA
      LSDA), so the team generated synthetic datasets calibrated to published
      NASA and CSA values: ~1.8 mSv/day in Mars cruise (MSL/RAD); bone loss of
      1–1.5 %/month; hemolysis +54 % in flight; cabin CO₂ ~2–4 mmHg; baseline
      vitals from the Bio-Monitor/Astroskin channels.
    </p>
    <p>
      Simulated mission events: launch fluid shift, a partial CO₂ scrubber
      failure (days 95–100), a solar particle event with the crew in the storm
      shelter (day 140), a hemoglobin drop in one astronaut and a progressive
      behavioral decline in another. Isolated bad days and crew-wide events are
      included on purpose, to show that they do not trigger individual alerts.
    </p>
    <p>
      Demo scenarios in the app: routine day · CO₂ scrubber failure · solar
      particle event · low blood oxygen (injected demo event).
    </p>
    <p>
      NASA and partner resources used: NASA-STD-3001 thresholds, HRP Evidence
      Reports, ExMC/EMCL, ARCHeR, MSL/RAD measurements, the NASA Open Science
      Data Repository and the CSA Astroskin / Bio-Monitor and MARROW studies.
      Full list in §9.
    </p>

    <h2 id="how-to-run">5. How to run</h2>
    <p>pip install -r requirements.txt</p>
    <p>
      python -m streamlit run streamlit_app.py — app on http://localhost:8501
    </p>
    <p>Then open site/index.html to see it inside the iPhone frame.</p>
    <p>
      First run: the app prepares its local data automatically (trains the
      classifier, loads the example inventory, builds the demo scenario and
      reports).
    </p>
    <p>
      Command-line tools of the back end: see README.md, e.g. python -m
      astrocare.emergency.dialogue --idioma en.
    </p>

    <h2 id="safety">6. Safety principles and limitations</h2>
    <p>
      No autonomous diagnosis or treatment. AI suggestions always require crew
      confirmation. Every clinical step comes from a versioned protocol.
    </p>
    <p>
      Protocols are demonstration content pending validation by a physician.
      Doses shown come from the team's protocol document and must be checked
      against the official medical checklist.
    </p>
    <p>
      No real measurements. The prototype uses simulated data only, and alert
      thresholds must be revalidated with real crew data.
    </p>
    <p>
      Voice in the web demo uses the browser's speech recognition. The onboard
      version uses Vosk (offline speech recognition) and pyttsx3 (offline
      speech), already implemented in astrocare/emergency/voice.py.
    </p>
    <p>
      The emergency classifier is trained on 280 emergency phrases written by
      the team (70 per class, PT and EN, including an "out of scope" class). It
      is not trained on real astronaut recordings.
    </p>
    <p>
      The ISS Medical Checklist is not public. Protocols were built from the
      public references listed below.
    </p>

    <h2 id="roadmap">7. Roadmap</h2>
    <p>
      1. Clinical validation. Review all protocols and thresholds with flight
      surgeons and emergency physicians; add more protocols from the NASA EMCL
      (DCS, toxic exposure, trauma, kidney stone, sepsis, MI with thrombolysis
      safety gate).
    </p>
    <p>
      2. Real sensor integration. Astroskin / Bio-Monitor, wearable SDKs,
      onboard dosimeters (HERA/CAD) and ECLSS telemetry via standard interfaces.
    </p>
    <p>
      3. Fully offline voice on device. On-device wake word and speech models;
      multilingual crew support.
    </p>
    <p>
      4. Ultrasound and imaging guidance. Step-by-step POCUS guidance with image
      capture attached to the care record.
    </p>
    <p>
      5. Store-and-forward to the ground. Automatic sync of care records and
      ground reports when the link returns, with priority queues.
    </p>
    <p>
      6. Predictive models. Validated trend models for anemia, bone loss, SANS
      progression and behavioral risk, trained on real (de-identified)
      spaceflight data.
    </p>
    <p>
      7. Analog missions. Field tests in HERA, CHAPEA or Antarctic stations
      before flight.
    </p>

    <h2 id="team">8. Team</h2>
    <p>Wildenbergue Gomes (Will): medical physics, project lead, front end.</p>
    <p>
      Thaís Alexandre: physician (emergency medicine), computer science student,
      UX; clinical protocols and research.
    </p>
    <p>
      Gustavo Enrico (Gu): back end: monitoring pipeline, emergency engine,
      classifier, reports.
    </p>
    <p>Elisa: front-end design and website.</p>

    <h2 id="ai-use">9. Use of AI (disclosure)</h2>
    <p>
      The NASA Space Apps rules require teams to disclose AI use. AI was used as
      follows:
    </p>
    <p>
      Claude (Anthropic): research support and source collection; simulated data
      generator; translation of the protocol document (PT→EN) and PDFs;
      interactive prototypes (medical cards, avatar recolor); the mobile app
      interface (app/, streamlit_app.py) built on the team's back end; website
      with the iPhone frame; pitch script; video editing and motion graphics;
      this documentation.
    </p>
    <p>
      ChatGPT (OpenAI): logo and graphic assets (icons, planets, voice orb,
      background, crew illustrations).
    </p>
    <p>
      Gemini (Google): drafting and structuring of the clinical protocol
      knowledge base (reviewed by the team physician); optional AI summary of
      aggregated indicators in the ground report (astrocare/llm.py, can be
      turned off with --sem-ia).
    </p>
    <p>
      Offline models in the software: emergency classifier (TF-IDF + logistic
      regression, scikit-learn, trained by the team); Vosk speech recognition;
      Whisper (transcription of the narration for video captions); Piper
      (synthetic assistant voice in the video).
    </p>
    <p>
      ⚠ To confirm by the team before submission: exact AI use per member (e.g.
      any AI assistance in the back-end code) and any other tools.
    </p>
    <p>
      Third-party assets: Lucide icons (ISC licence); Inter and Newsreader fonts
      (SIL Open Font License); royalty-free background music ("Futuristic Sci-Fi
      Cinematic", AudioCoffee).
    </p>

    <h2 id="references">10. References</h2>
    <p>NASA standards, evidence reports and data</p>
    <p>
      1. NASA. NASA-STD-3001 Space Flight Human-System Standard, Vol. 1 (Crew
      Health) and Vol. 2 (Human Factors, Habitability and Environmental Health).
      Office of the Chief Health &amp; Medical Officer.
      https://www.nasa.gov/ochmo/human-spaceflight-and-aviation-standards
    </p>
    <p>
      2. NASA OCHMO. Technical Brief OCHMO-TB-004: Carbon Dioxide.
      https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-004-carbon-dioxide.pdf
    </p>
    <p>
      3. Law J., et al. CO₂ on the International Space Station: An Operations
      Update. NASA NTRS 20150019624. https://ntrs.nasa.gov/citations/20150019624
    </p>
    <p>
      4. Stenger M.B., Tarver W.J., Brunstetter T., et al. Evidence Report: Risk
      of Spaceflight Associated Neuro-ocular Syndrome (SANS). NASA JSC, HRP;
      2017. NTRS 20180000936.
      https://ntrs.nasa.gov/api/citations/20180000936/downloads/20180000936.pdf
    </p>
    <p>
      5. Slack K.J., et al. Evidence Report: Risk of Adverse Cognitive or
      Behavioral Conditions and Psychiatric Disorders. NASA HRP; 2016. NTRS
      20160004365. https://ntrs.nasa.gov/citations/20160004365
    </p>
    <p>
      6. NASA HRP. Central Nervous System, Behavioral Health, and Sensorimotor
      (CBS) Integrated Research Plan Problem Statement. Human Research Roadmap.
      https://humanresearchroadmap.nasa.gov/
    </p>
    <p>
      7. NASA HRP. Evidence Report: Risk of Adverse Health Outcomes and
      Decrements in Performance due to In-Flight Medical Conditions (ExMC). NTRS
      20170004604.
    </p>
    <p>
      8. Blue R., Nusbaum D., Antonsen E. Development of an Accepted Medical
      Condition List for Exploration Medical Capability Scoping.
      NASA/TM-2019-220299; NTRS 20190027540.
      https://ntrs.nasa.gov/citations/20190027540
    </p>
    <p>
      9. NASA ISS Integrated Medical Group (IMG). ISS Medical Checklist (not
      public; referenced for structure only).
    </p>
    <p>
      10. NASA HRP. Spaceflight Standard Measures and ARCHeR — Artemis Research
      for Crew Health and Readiness (Artemis II).
    </p>
    <p>
      11. NASA. Communication Delays, Disruptions, and Blackouts for Crewed Mars
      Missions. NTRS 20220013418. https://ntrs.nasa.gov/citations/20220013418
    </p>
    <p>
      12. Zeitlin C., et al. Measurements of energetic particle radiation in
      transit to Mars on the Mars Science Laboratory. Science
      2013;340(6136):1080–1084. doi:10.1126/science.1235989
    </p>
    <p>
      13. NASA. Risk of Spaceflight-Induced Bone Changes.
      https://www.nasa.gov/reference/risk-of-spaceflight-induced-bone-changes/
    </p>
    <p>
      14. Stuster J. Behavioral Issues Associated With Long Duration Space
      Expeditions: Review and Analysis of Astronaut Journals.
      NASA/TM-2010-216130. https://ntrs.nasa.gov/citations/20100026549
    </p>
    <p>
      15. NASA Open Science Data Repository (OSDR).
      https://osdr.nasa.gov/bio/repo · NASA Life Sciences Data Archive (LSDA).
      https://lsda.jsc.nasa.gov/
    </p>
    <p>
      16. Sharma T., Peng M., Curry S., Liu Y., Lohawala H., Sharma G. The ex
      vivo human translaminar autonomous system to study spaceflight associated
      neuro-ocular syndrome pathogenesis (Retina, RT-PCR and
      electroretinography). NASA Open Science Data Repository, Version 1.
    </p>
    <p>Partner agencies (CSA)</p>
    <p>
      17. Canadian Space Agency. Bio-Monitor (Astroskin).
      https://www.asc-csa.gc.ca/eng/sciences/astroskin.asp
    </p>
    <p>
      18. Trudel G., et al. Hemolysis contributes to anemia during long-duration
      space flight. Nature Medicine 2022. doi:10.1038/s41591-021-01637-7
    </p>
    <p>
      19. Canadian Space Agency. TBone studies.
      https://www.asc-csa.gc.ca/eng/sciences/tbone.asp
    </p>
    <p>Clinical literature</p>
    <p>
      20. Hinkelbein J., Kerkhoff S., Adler C., et al. Cardiopulmonary
      resuscitation (CPR) during spaceflight — a guideline for CPR in
      microgravity from the German Society of Aerospace Medicine (DGLRM) and the
      European Society of Aerospace Medicine Space Medicine Group (ESAM-SMG).
      Scand J Trauma Resusc Emerg Med 2020;28(1):108.
    </p>
    <p>
      21. Evetts S.N., Evetts L.M., Russomano T., Castro J.C., Ernsting J. Basic
      life support in microgravity: evaluation of a novel method during
      parabolic flight. Aviat Space Environ Med 2005;76(5):506–510. PMID
      15892553.
    </p>
    <p>
      22. Mader T.H., Gibson C.R., Pass A.F., et al. Optic disc edema, globe
      flattening, choroidal folds, and hyperopic shifts observed in astronauts
      after long-duration space flight. Ophthalmology 2011;118(10):2058–2069.
    </p>
    <p>
      23. Lee A.G., Mader T.H., Gibson C.R., et al. Spaceflight associated
      neuro-ocular syndrome (SANS) and the neuro-ophthalmologic effects of
      microgravity: a review and an update. npj Microgravity 2020;6:7.
    </p>
    <p>
      24. Basner M., Savitt A., Moore T.M., et al. Development and validation of
      the Cognition Test Battery for spaceflight. Aerosp Med Hum Perform
      2015;86(11):942–952.
    </p>
    <p>
      25. Basner M., Dinges D.F. Maximizing sensitivity of the Psychomotor
      Vigilance Test (PVT) to sleep loss. Sleep 2011;34(5):581–591.
    </p>
    <p>
      26. Kanas N., Manzey D. Space Psychology and Psychiatry. Springer; 2008.
      doi:10.1007/978-1-4020-6770-9
    </p>
    <p>
      27. TNKase (tenecteplase) prescribing information — weight-tiered dosing
      (Genentech / FDA).
    </p>
    <p>Challenge</p>
    <p>
      28. NASA Space Apps Challenge — Judging &amp; Awards Guide.
      https://www.spaceappschallenge.org/resources/judging-awards-guide
    </p>

    <h2 id="app-screens">A. Screens of the app</h2>
    <p>
      Crew (home): header with mission day and time; hero arc placing each
      astronaut from Needs care to Thriving; serif headline summarising the crew
      state; short explanation; list of active alerts (crew + ship); one card
      per astronaut with Readiness index on a baseline range bar, role, current
      module, HR, SpO₂, respiration and activity. Interactions: demo scenario
      menu; "Hey AstroCare" emergency button; alerts expand to show detail,
      recommended action and the rule used; each astronaut opens the detail
      screen.
    </p>
    <p>
      Astronaut detail: Readiness; personal alerts; smart-shirt vitals (SpO₂,
      heart rate, respiration, HRV + blood pressure, sleep) each on a range bar
      against the personal Earth baseline; mission radiation dose vs the 600 mSv
      career limit; hemoglobin vs baseline; behavioral health from the daily
      journal with the metrics out of baseline. Interactions: download the
      ground report (PDF) for the flight surgeon.
    </p>
    <p>
      Ship: for each module (Habitation, Laboratory, Storm shelter): cabin CO₂
      vs the 3 mmHg limit, radiation dose rate vs the module's normal rate, O₂
      partial pressure, temperature, pressure and humidity; module alerts.
      Interactions: demo scenario menu.
    </p>
    <p>
      Records: emergency care sessions (protocol, patient, status, activation,
      time); medical inventory alerts (unavailable, expired, low stock, expiring
      soon) and stock list. Interactions: download each care record (PDF).
    </p>
    <p>
      Emergency: offline session header; voice orb; current question or protocol
      step (node ID + title + instruction); mandatory alerts highlighted.
      Interactions: tap-and-speak (speech recognition) or type; YES/NO; patient
      AST-01…04; units used 0–3; Done; voice read-out on/off; "End session"
      (asks for confirmation).
    </p>
    <p>
      Bottom bar: Crew · Ship · Records + red microphone (emergency) always
      reachable.
    </p>

    <h2 id="dialogue-rules">B. Emergency dialogue rules</h2>
    <p>
      Opening question: "What is the emergency?". The AI never reads options
      aloud; it waits for the crew's words.
    </p>
    <p>
      The classifier suggests one protocol only above a 0.50 confidence
      threshold; otherwise, or if the best class is out of scope, it answers "I
      didn't understand".
    </p>
    <p>
      Every suggestion must be confirmed: "Understood: &lt;protocol&gt;.
      Confirm?". "No", silence or an unclear answer counts as a failure.
    </p>
    <p>
      After 3 failures: "Emergency not identified. Please say again…"; after the
      4th, keyboard mode lists the protocol codes (or CANCEL).
    </p>
    <p>
      Patient: "Who is the patient? Say the astronaut number." After 2 failed
      attempts the protocol starts anyway as patient not identified (logged);
      care is never blocked.
    </p>
    <p>
      "End session" works at any moment and always asks for confirmation; a "no"
      resumes exactly where the crew stopped.
    </p>
    <p>
      In the protocol, silence never advances a step; information steps need an
      explicit "done".
    </p>
    <p>
      Medication steps ask how many units were used (0 allowed), check valid
      stock (non-expired lots, FEFO order) and refuse impossible withdrawals.
    </p>
    <p>
      Every utterance, classification (label, confidence, reason), confirmation,
      node, answer, alert, medication and error is written to the session
      timeline (SQLite) and to the care record (PDF, PT + EN) at the end.
    </p>

    <h2 id="protocols">C. Emergency protocols — every node</h2>
    <p>
      Transcribed from the team's clinical protocol document
      (Microgravity_Emergency_Protocols_EN.pdf). Each protocol file is versioned
      and its SHA-256 is printed on every care record. YES/NO questions are
      asked in the order of the document; the first YES wins, otherwise the ELSE
      path is followed.
    </p>

    <h2 id="pcr">PCR — Cardiac Arrest (CA) in Microgravity</h2>
    <p>
      Critical rules: Physical anchoring is required before chest compressions;
      a supraglottic airway is preferred over endotracheal intubation;
      termination-of-resuscitation criteria take into account the spacecraft's
      finite O2 supply.
    </p>
    <p>
      PCR-01 — Trigger and Environmental Safety. Trigger: Asystole, Ventricular
      Fibrillation (VF), Pulseless Ventricular Tachycardia (pVT) or sudden loss
      of consciousness. Check the cabin environmental sensors (CO2 leak, ammonia
      or fire). IF Environmental hazard = YES → PCR-02: Put on the PBA mask
      (Portable Breathing Apparatus) and evacuate the module before starting
      care. ELSE → PCR-02.
    </p>
    <p>
      PCR-02 — Clinical Confirmation and Alarm. Confirm unresponsiveness and
      absence of a central pulse in &lt; 10 seconds. Activate the spacecraft
      medical emergency alarm and request the AED and the ACLS Kit. → PCR-03.
    </p>
    <p>
      PCR-03 — Physical Anchoring and Start of CPR. Secure the patient to the
      restraint stretcher (Crew Medical Restraint System - CMRS) OR apply the
      Handstand / Evetts-Russomano anchoring technique. Start chest compressions
      (100–120 compressions/min, depth 5–6 cm) with the metronome on. → PCR-04.
    </p>
    <p>
      PCR-04 — Rhythm Analysis (AED). Attach the AED pads and analyze the
      cardiac rhythm. IF Rhythm = Shockable [VF or pVT] → PCR-04A. ELSE (Rhythm
      = Non-shockable [PEA or Asystole]) → PCR-04B.
    </p>
    <p>
      PCR-04A — Shockable Branch (VF / pVT). Move floating crew members away and
      check isolation from metal surfaces. Deliver a 200 J biphasic shock.
      Resume CPR for 2 min and secure intravenous (IV) or intraosseous (IO)
      access. IF Condition after the 2nd shock: If VF/pVT persists → PCR-05:
      Give Epinephrine 1 mg IV/IO every 3–5 min + Amiodarone 300 mg IV/IO.
      Insert a supraglottic airway device. Supplies: Epinephrine 1 mg,
      Amiodarone 300 mg. ELSE → gap → contact ground.
    </p>
    <p>
      PCR-04B — Non-Shockable Branch (PEA / Asystole). Resume CPR for 2 min and
      give Epinephrine 1 mg IV/IO immediately (repeat every 3–5 min). Insert a
      supraglottic airway device + capnography (ETCO2). Supplies: Epinephrine 1
      mg. → PCR-05.
    </p>
    <p>
      PCR-05 — Investigation of Space-Specific Reversible Causes. Assess and
      treat reversible causes: Hypoxia, Hypovolemia (baseline 10–15% reduction
      in plasma volume in space), Hyperkalemia, Cardiac tamponade, Tension
      pneumothorax, Pulmonary Embolism (PE) and Environmental toxins. → PCR-06.
    </p>
    <p>
      PCR-06 — Outcome Assessment. IF Return of Spontaneous Circulation [ROSC] =
      YES → end: Start post-cardiac arrest care: keep SpO2 between 94%–98%, SBP
      &gt; 90 mmHg, perform a 12-lead ECG and cardiac POCUS. IF No ROSC after
      20-30 min AND ETCO2 &lt; 10 mmHg → end: Apply the ethical/logistical
      termination-of-resuscitation criterion to preserve the mission's oxygen
      supply and pharmaceutical stock. ELSE → gap → contact ground.
    </p>

    <h2 id="sans">
      SANS — Spaceflight Associated Neuro-ocular Syndrome / Acute Intracranial
      Hypertension
    </h2>
    <p>
      Critical rules: Caused by the cephalad fluid shift and worsened by cabin
      hypercapnia (ppCO2). Acetazolamide use requires strict monitoring of
      hydration and urinary calcium because of the high risk of spaceflight
      kidney stones (nephrolithiasis).
    </p>
    <p>
      SANS-01 — Trigger and Environmental CO2 Control. Trigger: Complaint of
      blurred vision, headache, retro-orbital pressure, or scheduled periodic
      screening. Query the ECLSS environmental telemetry for the partial
      pressure of carbon dioxide (ppCO2). IF ppCO2 = Elevated → SANS-02:
      Immediately increase cabin CO2 scrubbing. ELSE → SANS-02.
    </p>
    <p>
      SANS-02 — Point-of-Care Eye Exams. Perform visual acuity, Amsler Grid and
      tonometry. Perform ocular POCUS to measure the Optic Nerve Sheath Diameter
      (ONSD) and Optical Coherence Tomography (OCT). → SANS-03.
    </p>
    <p>
      SANS-03 — Severity Stratification. Acute Alarm Criteria: ONSD &gt; 5.8 mm,
      optic disc edema (papilledema) Grade ≥ 2, visual field loss or focal
      neurological deficit. IF Any alarm criterion = YES → SANS-04B. ELSE (Mild
      or chronic presentation) → SANS-04A.
    </p>
    <p>
      SANS-04A — Conservative / Subacute Management. Adjust the
      variable-prescription glasses (Space Anticipation Glasses). Start the
      mechanical countermeasure with daily LBNP (Lower Body Negative Pressure)
      sessions. Reassess with OCT and ocular POCUS in 7 days. → end — End of
      cycle (continuous monitoring).
    </p>
    <p>
      SANS-04B — Acute Intracranial Pressure Reduction Protocol. Place the
      astronaut in the LBNP chamber/suit at -25 mmHg to -40 mmHg for 30–60 min
      to sequester fluids in the lower limbs. Start Acetazolamide 250–500 mg PO
      every 12h. ⚠ MANDATORY ALERT: Activate intensive monitoring of fluid
      intake and urinary calcium because of the high risk of kidney stones
      (nephrolithiasis) induced by acetazolamide in microgravity. Supplies:
      Acetazolamide 250 mg. → SANS-05.
    </p>
    <p>
      SANS-05 — Reassessment at 24–48 Hours. IF Clinical improvement = YES AND
      ONSD reduction = YES → end: Continue daily LBNP sessions and start gradual
      tapering of acetazolamide. ELSE (No improvement OR Neurological worsening)
      → end: Consider an ultrasound-guided diagnostic/therapeutic lumbar
      puncture and transmit a priority asynchronous teleconsultation package to
      mission control on Earth.
    </p>

    <h2 id="psiq">PSIQ — Acute Psychiatric and Behavioral Emergencies</h2>
    <p>
      Critical rules: Protect the integrity of the spacecraft first (lock
      hatches and controls); rule out space-related organic causes before
      psychiatric sedation; monitor the QTc interval on the ECG after
      antipsychotic administration.
    </p>
    <p>
      PSIQ-01 — Environmental Containment and Spacecraft Safety. Trigger:
      Extreme psychomotor agitation, delirium, acute paranoia, or risk of harm
      to self or others. Perform a primary crew safety assessment and activate
      Restricted Mode on the spacecraft panel (lock critical controls and
      hatches). → PSIQ-02.
    </p>
    <p>
      PSIQ-02 — Space-Related Organic Cause Screening. Measure capillary blood
      glucose, oximetry (SpO2), cabin ppCO2 level, body temperature and
      radiation dosimetry. IF Organic cause detected = YES → end: Immediately
      treat the underlying cause (hypoxia, hypercapnia, hypoglycemia or sepsis).
      End the primary psychiatric pathway. ELSE → PSIQ-03.
    </p>
    <p>
      PSIQ-03 — Cooperation Assessment. IF Patient accepts verbal approach = YES
      → PSIQ-03A. ELSE (Imminent physical risk) → PSIQ-03B.
    </p>
    <p>
      PSIQ-03A — Verbal De-escalation and Oral Therapy. Isolate the crew member
      in a quiet module and reduce light stimuli. Apply verbal de-escalation and
      offer oral medication: Lorazepam 1–2 mg PO OR Olanzapine 5–10 mg orally
      disintegrating tablet. Supplies: Lorazepam 1 mg VO, Olanzapine 5 mg
      orodispersível. → PSIQ-04.
    </p>
    <p>
      PSIQ-03B — Physical Restraint in Microgravity and Parenteral Sedation.
      Mobilize 3 to 4 anchored crew members. Apply restraint straps on the
      medical stretcher (CMRS), protecting the head and airway. Give rapid
      chemical sedation: Haloperidol 5 mg IM + Lorazepam 2 mg IM OR Midazolam 5
      mg IM/Intranasal. Supplies: Haloperidol 5 mg IM, Lorazepam 2 mg IM,
      Midazolam 5 mg. → PSIQ-04.
    </p>
    <p>
      PSIQ-04 — Mandatory Post-Sedation Monitoring. Maintain continuous
      monitoring of SpO2, respiratory rate, blood pressure and continuous ECG,
      focusing on the QTc interval (risk of antipsychotic-induced arrhythmia in
      microgravity). → PSIQ-05.
    </p>
    <p>
      PSIQ-05 — Stabilization and Complications Assessment. IF Stabilized = YES
      AND No respiratory depression → end: Reassess sleep deprivation, readjust
      the circadian light-dark cycle and activate asynchronous psychological
      support with the ground team. IF Respiratory depression OR Ventricular
      arrhythmia → end: Start ventilatory support with a bag-valve-mask; give
      Flumazenil for benzodiazepine overdose or Magnesium Sulfate for Torsades
      de Pointes caused by QTc prolongation. Supplies: Flumazenil, Magnesium
      sulfate. ELSE → gap → contact ground.
    </p>

    <h2 id="metrics">
      D. Behavioral and physiological monitoring — every metric
    </h2>
    <p>
      Voice (daily check-in audio): report duration (s); time spent in speech
      pauses (%); mean voice pitch (Hz); voice pitch variation (st); voice
      loudness (dB).
    </p>
    <p>
      Text (transcript of the check-in): speech rate (words/min); text sentiment
      balance (-1..1); share of positive words (%); share of negative words (%).
    </p>
    <p>
      Self-report (1–10): self-reported mood; self-reported fatigue;
      self-reported stress; self-reported loneliness.
    </p>
    <p>
      Sensors &amp; logs (monitoring only, not part of the behavioral alert):
      PVT — mean reaction time (ms); PVT — attention lapses (lapses); total
      sleep time (h); sleep efficiency (%); awakenings per night; resting heart
      rate (bpm); heart rate variability (RMSSD) (ms); water intake (mL);
      caloric intake (kcal); meals per day (meals); physical exercise (min);
      daily radiation dose (dosimeter) (µSv).
    </p>
    <p>Detection method (astrocare/comparison.py):</p>
    <p>
      1. Personal baseline — median and MAD×1.4826 of the Earth period (≥ 30
      records required).
    </p>
    <p>
      2. Individual deviation — z-score of each mission value against the
      personal baseline.
    </p>
    <p>
      3. Smoothing — 7-day rolling mean (≥ 4 records in the window), so one bad
      day never alerts.
    </p>
    <p>
      4. Crew comparison — the same-day deviation of the whole crew is
      subtracted (needs ≥ 3 astronauts), so collective events (CO₂ failure,
      crew-wide morale dip) do not alert individuals.
    </p>
    <p>
      5. Levels — attention at 1.5 deviations, alert at 2.0 deviations; a day is
      flagged only with ≥ 3 metrics deviating together, and a status needs ≥ 5
      consecutive days.
    </p>
    <p>
      6. Outputs — daily status (normal / attention / alert), short daily
      report, ground report PDF + JSON (PT/EN) with charts, monitoring tables,
      dosimetry, symptoms (literal) and medications; never the full transcripts.
    </p>

    <h2 id="timeline">E. Simulated mission timeline (demo dataset)</h2>
    <p>
      Days −180 to −1 — Earth baseline period (all crew). Expected: personal
      baselines computed.
    </p>
    <p>
      Day 0 — Launch: fluid shift, blood pressure drop, hemolysis +54 %.
      Expected: physiological shift visible; no false alarms.
    </p>
    <p>
      Day 30 → — AST-02 hemoglobin falls faster than the crew. Expected:
      hemoglobin WATCH/ACT with "repeat blood count".
    </p>
    <p>
      Day 60 → — AST-03 progressive behavioral decline (sleep, journal,
      loneliness). Expected: behavioral ALERT after persistence rules are met.
    </p>
    <p>
      Days 95–100 — Partial failure of the CO₂ removal system (~4 mmHg).
      Expected: CO₂ ACT in all modules; crew-wide symptoms not flagged as
      individual.
    </p>
    <p>
      Day 112 — Crew-wide morale dip. Expected: no individual alert (crew
      comparison).
    </p>
    <p>
      Day 140 — Solar particle event from 09:00; crew in the storm shelter.
      Expected: module radiation ACT; shelter shown as lowest dose; personal
      dose alert.
    </p>
    <p>
      Day 145 — Extra blood draw after the storm (lymphocytes ↓, cortisol ↑).
      Expected: blood values updated.
    </p>
  </section>
</div>
</div>

<style>
  :global(body) {
    margin: 0;
  }

  .pagina {
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 100%;
  }

  #top {
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.649);
    display: flex;
    align-items: center;
    padding: 2vw;

    a {
      color: white;
      text-decoration: none;
      border-radius: 10px;
      padding: 10px 20px;
      border: solid white 2px;
      font-family: "Sora", sans-serif;
    }
  }

  .layout {
    flex: 1;
    min-height: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.649);
    overflow-x: hidden;
    max-width: 100%;
  }

  #text {
    position: relative;
    overflow-y: auto;
    width: 75vw;
    font-family: "Sora", sans-serif;
    color: white;
    padding-right: 2vw;
    overflow-x: hidden;
    max-width: 100%;
  }

  nav {
    width: 25vw;
    align-self: flex-start;
    flex-direction: column;
    display: flex;
    gap: 3px;
    padding: 2vh;
    max-height: 100%;
    overflow-y: auto;
    box-sizing: border-box;

    a {
      font-family: "Sora", sans-serif;
      color: white;
    }
  }

  /* Tablet */
  @media (max-width: 1024px) {
    #text {
      width: 65vw;
    }

    nav {
      width: 35vw;
    }
  }

  /* Celular */
  @media (max-width: 768px) {
    #top {
      padding: 12px 16px;
    }

    .layout {
      flex-direction: column;
    
    }

    nav {
      width: 100%;
      max-height: none;
      align-self: stretch;
      flex-direction: row;
      flex-shrink: 0;
      gap: 16px;
      padding: 12px 16px;
      overflow-x: auto;
      overflow-y: hidden;

      a {
        white-space: nowrap;
      }
    }

    #text {
      flex: 1;
      min-height: 0;
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
    }
  }
</style>
