<template>
  <div class="sun-box">

    <div class="sun-card">
      <h3>🌅 Amanecer</h3>
      <p>{{ amanecer }}</p>
    </div>

    <div class="sun-card">
      <h3>🌇 Atardecer</h3>
      <p>{{ atardecer }}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: ['data'],

  computed: {
    amanecer() {
      return new Date(this.data.sys.sunrise * 1000)
        .toLocaleTimeString()
    },

    atardecer() {
      return new Date(this.data.sys.sunset * 1000)
        .toLocaleTimeString()
    }
  }
}
</script>

<style scoped>
.sun-box {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.sun-card {
  flex: 1;
  background: rgba(255,255,255,0.15);
  padding: 15px;
  border-radius: 15px;
  color: white;
}
</style>