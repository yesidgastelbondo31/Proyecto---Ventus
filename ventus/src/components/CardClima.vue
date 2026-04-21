<script setup>
defineProps(['data'])
</script>

<template>
  <div class="card">
    <h2>{{ data.name }}</h2>

    <img 
      :src="`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`" 
    />

    <h1>{{ data.main.temp }}°C</h1>

    <p>{{ data.weather[0].description }}</p>

    <div class="info">
      <span>💧 {{ data.main.humidity }}%</span>
      <span>💨 {{ data.wind.speed }} m/s</span>
    </div>
  </div>
</template>

<style>
.card {
  margin-top: 20px;
  color: white;
  animation: fade 0.5s ease;
}

.card h1 {
  font-size: 45px;
}

.info {
  display: flex;
  justify-content: space-around;
}

@keyframes fade {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>