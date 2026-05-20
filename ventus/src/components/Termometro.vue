<template>
  <div class="termometro">

    <div
      class="nivel"
      :style="{ height: data.main.temp + '%' }"
    ></div>

  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.termometro {
  width: 60px;
  height: 200px;
  background: rgba(255,255,255,0.2);
  border-radius: 30px;
  margin: 20px auto;
  overflow: hidden;
}

.nivel {
  width: 100%;
  background: linear-gradient(red, orange);
  position: absolute;
  bottom: 0;
}
</style>