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
    font-size: 1.5vw;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
</style>
