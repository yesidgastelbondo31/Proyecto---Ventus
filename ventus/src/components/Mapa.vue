<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'

const props = defineProps(['lat', 'lon'])

onMounted(() => {
  const map = L.map('map').setView([props.lat, props.lon], 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map)

 const icono = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [40, 40]
})
L.marker([props.lat, props.lon], { icon: icono })
  .addTo(map)
  .bindPopup("📍 Ubicación actual")
  .openPopup()

L.marker([props.lat, props.lon], { icon: icono }).addTo(map)
})
</script>

<template>
  <div id="map"></div>
</template>

<style>
#map {
  height: 300px;
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}
</style>