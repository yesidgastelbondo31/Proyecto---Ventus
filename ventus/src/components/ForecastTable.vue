<template>
  <div>
    <!-- TABS -->
    <div class="tabs">
      <button
        v-for="t in tabs"
        :key="t.id"
        class="tab"
        :class="{ active: tabActivo === t.id }"
        @click="tabActivo = t.id"
      >{{ t.label }}</button>
    </div>

    <!-- TABLE -->
    <div class="forecast-card">
      <table class="forecast-table">
        <thead>
          <tr>
            <th style="width:110px"></th>
            <th v-for="(dia, i) in dias" :key="i" :class="{ 'today-col': i === 0 }">
              <span class="day-name">{{ dia.nombre }}</span>
              <span class="day-date">{{ dia.fecha }}</span>
              <div class="temp-range">
                <span class="temp-hi">↑{{ dia.hi }}°</span>
                <span class="temp-lo">↓{{ dia.lo }}°</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fila in filas" :key="fila.hora">
            <td class="row-label"><span class="row-icon">{{ fila.icono }}</span>{{ fila.hora }}</td>
            <td v-for="(celda, i) in fila.celdas" :key="i" :class="celda.clase">
              <template v-if="celda.icono">
                <span class="weather-icon">{{ celda.icono }}</span>
                <span class="icon-temp">{{ celda.val }}</span>
              </template>
              <template v-else-if="celda.arrow">
                <span class="wind-arrow">{{ celda.arrow }}</span>{{ celda.val }}
              </template>
              <template v-else>{{ celda.val }}</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabActivo = ref('dias')
const tabs = [
  { id: 'dias',  label: 'Días' },
  { id: 'horas', label: 'Horas' },
  { id: 'finde', label: 'Fin de semana' },
]

const dias = [
  { nombre: 'Hoy', fecha: '21 MAR', hi: 33, lo: 26 },
  { nombre: 'Mañ', fecha: '22 MAR', hi: 28, lo: 25 },
  { nombre: 'Lun', fecha: '23 MAR', hi: 30, lo: 25 },
  { nombre: 'Mar', fecha: '24 MAR', hi: 30, lo: 26 },
  { nombre: 'Mié', fecha: '25 MAR', hi: 30, lo: 26 },
  { nombre: 'Jue', fecha: '26 MAR', hi: 29, lo: 26 },
  { nombre: 'Vie', fecha: '27 MAR', hi: 29, lo: 26 },
]

const filas = [
  { hora: '08:00', icono: '🌅', celdas: [
    { val: '—' },
    { icono: '🌧️', val: '27°' }, { icono: '⛅', val: '27°' }, { icono: '⛅', val: '27°' },
    { icono: '⛅', val: '27°' }, { icono: '⛅', val: '27°' }, { icono: '⛅', val: '27°' },
  ]},
  { hora: '14:00', icono: '☀️', celdas: [
    { val: '—' },
    { icono: '🌧️', val: '28°' }, { icono: '🌧️', val: '30°' }, { icono: '⛅', val: '30°' },
    { icono: '⛅', val: '30°' }, { icono: '🌤️', val: '29°' }, { icono: '🌤️', val: '29°' },
  ]},
  { hora: '20:00', icono: '🌙', celdas: [
    { icono: '🌙', val: '28°' }, { icono: '🌙', val: '26°' }, { icono: '🌙', val: '27°' },
    { icono: '🌙', val: '27°' }, { icono: '🌙', val: '27°' }, { icono: '🌙', val: '27°' }, { icono: '🌙', val: '27°' },
  ]},
  { hora: 'Lluvia', icono: '🌧️', celdas: [
    { val: '0.3 mm', clase: 'rain-val' }, { val: '0.2 mm', clase: 'rain-val' },
    { val: '0.2 mm', clase: 'rain-val' }, { val: '0.1 mm', clase: 'rain-val' },
    { val: '0 mm', clase: 'rain-val' },   { val: '0 mm', clase: 'rain-val' }, { val: '0 mm', clase: 'rain-val' },
  ]},
  { hora: 'Nieve', icono: '❄️', celdas: Array(7).fill({ val: '0 cm' }) },
  { hora: 'Viento', icono: '💨', celdas: [
    { arrow: '↑',  val: '14 km/h', clase: 'wind-val' }, { arrow: '↑',  val: '23 km/h', clase: 'wind-val' },
    { arrow: '↙', val: '27 km/h', clase: 'wind-val' }, { arrow: '↙', val: '30 km/h', clase: 'wind-val' },
    { arrow: '↙', val: '27 km/h', clase: 'wind-val' }, { arrow: '↙', val: '28 km/h', clase: 'wind-val' },
    { arrow: '↙', val: '29 km/h', clase: 'wind-val' },
  ]},
  { hora: 'Salida sol', icono: '🌅', celdas: ['05:59','05:58','05:57','05:57','05:56','05:56','05:55'].map(v => ({ val: v, clase: 'sun-time' })) },
  { hora: 'Puesta sol', icono: '🌇', celdas: Array(7).fill({ val: '18:08', clase: 'sun-time' }) },
]
</script>

<style scoped>
.tabs { display: flex; gap: 4px; margin-bottom: 20px; }
.tab {
  padding: 9px 22px;
  border-radius: 30px;
  border: 1.5px solid #e2e8f0;
  background: white;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  cursor: pointer;
  color: #64748b;
  transition: all .2s;
}
.tab:hover { border-color: #0ea5e9; color: #0ea5e9; }
.tab.active { background: #0ea5e9; border-color: #0ea5e9; color: white; font-weight: 600; }

.forecast-card {
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  box-shadow: 0 4px 24px rgba(14,165,233,0.07);
}
.forecast-table { width: 100%; border-collapse: collapse; min-width: 640px; }
.forecast-table th {
  padding: 20px 16px 16px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #64748b;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
}
.day-name { font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; color: #0f172a; display: block; margin-bottom: 2px; }
.day-date { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; }
.today-col .day-name { color: #0ea5e9; }
.temp-range { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; margin-top: 6px; }
.temp-hi { color: #ef4444; font-weight: 600; }
.temp-lo { color: #0369a1; font-weight: 500; }
.forecast-table td {
  padding: 14px 16px;
  text-align: center;
  vertical-align: middle;
  border-bottom: 1px solid #f1f5f9;
  font-size: 14px;
}
.forecast-table tr:last-child td { border-bottom: none; }
.forecast-table tr:hover td { background: #f8faff; }
.row-label { font-weight: 600; font-size: 13px; color: #64748b; text-align: left; padding-left: 20px; white-space: nowrap; }
.row-icon { margin-right: 6px; font-size: 15px; }
.weather-icon { font-size: 28px; display: block; }
.icon-temp { font-size: 13px; font-weight: 600; color: #0f172a; margin-top: 4px; display: block; }
.rain-val { color: #0369a1; font-weight: 500; }
.wind-val { display: flex; align-items: center; justify-content: center; gap: 4px; font-weight: 500; }
.wind-arrow { font-size: 18px; }
.sun-time { font-size: 13px; color: #f59e0b; font-weight: 600; }
</style>
