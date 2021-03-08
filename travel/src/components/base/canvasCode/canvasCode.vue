<template>
  <div class="verificationCode" ref="verificationCode">
    <canvas class="codeCanvas" ref="codeCanvas"></canvas>
    <img src="" alt="" class="codeImg" ref="codeImg" @click="refreshCode"/>
  </div>
</template>

<script>
import canvasCode from "./canvasCode"
export default canvasCode;
</script>

<style scoped lang="scss">
@import "./canvasCode.scss";
</style>
