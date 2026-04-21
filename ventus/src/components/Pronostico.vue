<script setup>
defineProps(['data'])
</script>

<template>
  <div class="forecast">
    <h3>Pronóstico</h3>

    <div class="dias">
      <div 
        v-for="item in data.list.slice(0,5)" 
        :key="item.dt"
        class="dia"
      >
        <p>{{ new Date(item.dt_txt).toLocaleDateString() }}</p>

        <img 
          :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`"
        />

        <p>{{ item.main.temp }}°C</p>
      </div>
    </div>
  </div>
</template>

<style>
.forecast {
  margin-top: 20px;
  color: white;
}

.dias {
  display: flex;
  justify-content: space-between;
}

.dia {
  background: rgba(255,255,255,0.2);
  padding: 10px;
  border-radius: 10px;
  width: 60px;
  text-align: center;
}
</style>