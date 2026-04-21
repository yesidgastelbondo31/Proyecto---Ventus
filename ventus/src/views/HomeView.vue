<template>
  <div class="page">
    <NavBar />
    <div class="content">
      <WeatherHero :ciudad="ciudad" :hora="horaActual" />
      <ForecastTable />
      <WeatherDetails :uv="ciudad.uv" :condiciones="condiciones" />
    </div>
  </div>
</template>

<script setup>
import NavBar        from '../components/NavBar.vue'
import WeatherHero   from '../components/WeatherHero.vue'
import ForecastTable from '../components/ForecastTable.vue'
import WeatherDetails from '../components/WeatherDetails.vue'

const horaActual = new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })

const ciudad = {
  nombre:   'Santa Marta',
  region:   'Santa Marta · Magdalena',
  icono:    '☀️',
  temp:     31,
  viento:   13,
  sensacion: 37,
  uv:       2,
  stats: [
    { label: 'Nubes',   val: '55%',  sub: 'Parcialmente nublado' },
    { label: 'Humedad', val: '66%',  sub: 'Alta' },
    { label: 'Rad. UV', val: 'Baja', sub: 'Índice 2' },
    { label: 'Presión', val: '1008', sub: 'hPa' },
  ],
}

const condiciones = [
  { icono: '💧', label: 'Humedad relativa',     val: '66%'      },
  { icono: '🌬️', label: 'Velocidad del viento', val: '13 km/h'  },
  { icono: '⏱️', label: 'Presión atmosférica',  val: '1008 hPa' },
  { icono: '👁️', label: 'Visibilidad',          val: '10 km'    },
]
</script>

<style scoped>
.page { min-height: 100vh; background: #f0f6ff; }
.content { max-width: 1080px; margin: 0 auto; padding: 36px 24px 60px; }
</style>
