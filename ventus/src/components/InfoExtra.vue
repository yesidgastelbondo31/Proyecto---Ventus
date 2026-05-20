<template>
  <div class="extra">

    <div class="item">
      <h3>🌡️ Sensación</h3>
      <p>{{ data.main.feels_like }}°C</p>
    </div>

    <div class="item">
      <h3>💧 Humedad</h3>
      <p>{{ data.main.humidity }}%</p>
    </div>

    <div class="item">
      <h3>🌬️ Viento</h3>
      <p>{{ data.wind.speed }} m/s</p>
    </div>

    <div class="item">
      <h3>📈 Presión</h3>
      <p>{{ data.main.pressure }} hPa</p>
    </div>

  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.extra {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}

.item {
  background: rgba(255,255,255,0.15);
  padding: 15px;
  border-radius: 15px;
  color: white;
}
</style>