<script lang="ts">
  import closeIcon from "#lib/assets/close.svg";
  import minimizeIcon from "#lib/assets/minimize.svg";

  let { text }: { text: string } = $props();
</script>

<div id="aba">
  <div class="icons">
    <img style="margin-top: -40%" src={minimizeIcon} alt="" />
    <img src={closeIcon} alt="" />
  </div>
  <div id="inside">
    <p>*/ {text} */</p>
  </div>
</div>

<style lang="scss">
  #aba {
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 7px;
    background: white;
    border-radius: 10px;
    align-items: end;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #inside {
    background-color: #000000;
    color: white;
    font-family: "Sora", sans-serif;
    font-size: clamp(1rem, 2vw, 2rem);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
  }

  @media (min-aspect-ratio: 1) {
    #aba {
      width: 50vw;
      height: fit-content;
      display: flex;
      flex-direction: column;
      padding: 7px;
      background: white;
      border-radius: 10px;
      align-items: end;
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    #inside {
      background-color: #000000;
      color: white;
      font-family: "Sora", sans-serif;
      font-size: clamp(1rem, 1.5vw, 2rem);
      border-radius: 10px;
      width: 100%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
    }
  }

  @media (max-aspect-ratio: 1){
    #aba {
      width: 70vw;
      padding: 7px;
    }

    #inside {
      font-size: 3vw;
      border-radius: 10px;
      padding: 20px;
    }
  }
</style>
