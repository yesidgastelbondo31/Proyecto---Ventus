<script>
import { obtenerClima, obtenerPronostico } from '../services/apiClima'
import CardClima from '../components/CardClima.vue'
import Loader from '../components/Loader.vue'
import Pronostico from '../components/Pronostico.vue'
import Mapa from '../components/Mapa.vue'
import PantallaCarga from '../components/PantallaCarga.vue'
import Saludo from '../components/Saludo.vue'
import InfoExtra from '../components/InfoExtra.vue'
import Estadisticas from '../components/Estadisticas.vue'
import EstadoConexion from '../components/EstadoConexion.vue'
import Reloj from '../components/Reloj.vue'
import SunInfo from '../components/SunInfo.vue'
import FondoAnimado from '../components/FondoAnimado.vue'
import CiudadesPopulares from '../components/CiudadesPopulares.vue'
import Termometro from '../components/Termometro.vue'


export default {
  components: {
  CardClima,
  Loader,
  Pronostico,
  Mapa,
  PantallaCarga,
  Saludo,
  InfoExtra,
  Estadisticas,
  EstadoConexion,
  Reloj
  },

  data() {
    return {
      ciudad: '',
      clima: null,
      pronostico: null,
      cargando: false,
      error: '',
      esNoche: false,
      API_KEY: '8a4da5d592076bd8ec093170cc9ba1c5'
    }
  },

  methods: {
    async buscar() {
      if (!this.ciudad) return

      this.cargando = true
      this.error = ''
      this.clima = null
      this.pronostico = null

      try {
        this.clima = await obtenerClima(this.ciudad)
        this.pronostico = await obtenerPronostico(this.ciudad)
      } catch (e) {
        this.error = 'Ciudad no encontrada'
      } finally {
        this.cargando = false
      }
    },

    usarUbicacion() {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude

        this.cargando = true
        this.error = ''

        try {
          const resClima = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric&lang=es`
          )

          this.clima = await resClima.json()

          const resPronostico = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric&lang=es`
          )

          this.pronostico = await resPronostico.json()

        } catch {
          this.error = 'No se pudo obtener ubicación'
        } finally {
          this.cargando = false
        }
      })
    },

    getFondo() {
      if (!this.clima) {
        return this.esNoche ? 'noche' : 'dia'
      }

      const temp = this.clima.main.temp

      if (this.esNoche) return 'noche'

      return temp > 25 ? 'calor' : 'frio'
    }
  },

  mounted() {
    const hora = new Date().getHours()
    this.esNoche = hora >= 18 || hora <= 6
  }
}
</script>
<template>

  <PantallaCarga v-if="cargando" />

  <div :class="['clima', getFondo()]">

    <FondoAnimado />

    <div class="box">

      <h1>🌦️ Ventus</h1>

      <Saludo />

      <Reloj />

      <!-- BUSCADOR -->
      <div class="search">

        <input
          v-model="ciudad"
          placeholder="Buscar ciudad..."
        />

        <button @click="buscar">
          🔍
        </button>

      </div>

      <!-- CIUDADES POPULARES -->
      <CiudadesPopulares
        @seleccionar="ciudad = $event; buscar()"
      />

      <!-- BOTÓN UBICACIÓN -->
      <button
        class="ubicacion"
        @click="usarUbicacion"
      >
        📍 Usar mi ubicación
      </button>

      <!-- ERROR -->
      <p v-if="error">
        {{ error }}
      </p>

      <!-- CLIMA -->
      <CardClima
        v-if="clima"
        :data="clima"
      />

      <!-- INFO EXTRA -->
      <InfoExtra
        v-if="clima"
        :data="clima"
      />

      <!-- ESTADÍSTICAS -->
      <Estadisticas
        v-if="clima"
        :data="clima"
      />

      <!-- CONEXIÓN API -->
      <EstadoConexion
        v-if="clima"
      />

      <!-- SOL -->
      <SunInfo
        v-if="clima"
        :data="clima"
      />

      <!-- TERMÓMETRO -->
      <Termometro
        v-if="clima"
        :data="clima"
      />

      <!-- PRONÓSTICO -->
      <Pronostico
        v-if="pronostico"
        :data="pronostico"
      />

      <!-- MAPA -->
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
  justify-content: center;
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
  transform: scale(1.03);
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
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>