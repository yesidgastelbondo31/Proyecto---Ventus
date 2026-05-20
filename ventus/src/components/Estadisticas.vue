<template>
  <div class="stats">

    <div class="card">
      <h3>Temp Max</h3>
      <p>{{ data.main.temp_max }}°C</p>
    </div>

    <div class="card">
      <h3>Temp Min</h3>
      <p>{{ data.main.temp_min }}°C</p>
    </div>

  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.stats {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.card {
  flex: 1;
  background: rgba(255,255,255,0.2);
  padding: 15px;
  border-radius: 15px;
  color: white;
}
</style>