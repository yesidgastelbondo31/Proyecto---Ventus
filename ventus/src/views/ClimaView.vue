<script setup>
import { ref, onMounted } from 'vue'
import { obtenerClima, obtenerPronostico } from '../services/apiClima'
import CardClima from '../components/CardClima.vue'
import Loader from '../components/Loader.vue'
import Pronostico from '../components/Pronostico.vue'
import Mapa from '../components/Mapa.vue'

const ciudad = ref('')
const clima = ref(null)
const pronostico = ref(null) 
const cargando = ref(false)
const error = ref('')
const esNoche = ref(false)

const API_KEY = "8a4da5d592076bd8ec093170cc9ba1c5" 

const buscar = async () => {
  if (!ciudad.value) return

  cargando.value = true
  error.value = ''
  clima.value = null
  pronostico.value = null

  try {
    clima.value = await obtenerClima(ciudad.value)
    pronostico.value = await obtenerPronostico(ciudad.value)
  } catch (e) {
    error.value = "Ciudad no encontrada"
  } finally {
    cargando.value = false
  }
}

const usarUbicacion = () => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    cargando.value = true
    error.value = ''

    try {
      const resClima = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"8a4da5d592076bd8ec093170cc9ba1c5"}&units=metric&lang=es`
      )
      clima.value = await resClima.json()

      const resPronostico = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${"8a4da5d592076bd8ec093170cc9ba1c5"}&units=metric&lang=es`
      )
      pronostico.value = await resPronostico.json()

    } catch {
      error.value = "No se pudo obtener ubicación"
    } finally {
      cargando.value = false
    }
  })
}

const getFondo = () => {
  if (!clima.value) return esNoche.value ? 'noche' : 'dia'

  const temp = clima.value.main.temp

  if (esNoche.value) return 'noche'
  return temp > 25 ? 'calor' : 'frio'
}

onMounted(() => {
  const hora = new Date().getHours()
  esNoche.value = hora >= 18 || hora <= 6
})
</script>

<template>
  <div :class="['clima', getFondo()]">

    <div class="box">
      <h1>🌦️ Ventus</h1>

      <div class="search">
        <input v-model="ciudad" placeholder="Buscar ciudad..." />
        <button @click="buscar">🔍</button>
      </div>

      <button class="ubicacion" @click="usarUbicacion">
        📍 Usar mi ubicación
      </button>

      <Loader v-if="cargando" />
      <p v-if="error">{{ error }}</p>

      <CardClima v-if="clima" :data="clima" />
      <Pronostico v-if="pronostico" :data="pronostico" />
      <Mapa 
        v-if="clima" 
        :lat="clima.coord.lat" 
        :lon="clima.coord.lon" 
      />
    </div>

  </div>
</template>

<style>
.clima {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; /* 🔥 CENTRA */
  padding: 20px;
  background: linear-gradient(135deg, #dfe9f3, #ffffff);
  height: 100%;
  flex: 1;
}

/* FONDOS */
.calor {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
}

.frio {
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
}

.noche {
  background: linear-gradient(135deg, #141e30, #243b55);
  color: white;
}

.dia {
  background: linear-gradient(135deg, #74ebd5, #9face6);
}

/* CAJA */
.box {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 30px;
  width: 340px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  animation: fadeIn 0.6s ease;
  margin: auto;
}

.search {
  margin-bottom: 10px;
}

/* INPUT */
input {
  width: 65%;
  padding: 10px;
  border-radius: 10px;
  border: none;
}

/* BOTÓN */
button {
  padding: 10px 15px;
  margin-left: 5px;
  border: none;
  border-radius: 10px;
  background: #111;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
}

.ubicacion {
  margin-top: 10px;
  background: #007bff;
}

.ubicacion:hover {
  background: #0056b3;
}

/* ANIMACIÓN */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>