<template>
  <div class="weather-hero">
    <div class="hero-left">
      <p class="hero-location">Clima en</p>
      <h1 class="hero-city">{{ ciudad.nombre }}</h1>
      <p class="hero-region">{{ ciudad.region }}</p>
      <div class="hero-temp-row">
        <div class="hero-sun">{{ ciudad.icono }}</div>
        <div class="hero-temp">{{ ciudad.temp }}<sup>°</sup></div>
      </div>
      <div class="hero-wind-feel">
        <span>💨 Viento {{ ciudad.viento }} km/h</span>
        <span>🌡️ Sensación {{ ciudad.sensacion }}°</span>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-stat" v-for="s in ciudad.stats" :key="s.label">
        <div class="hero-stat-label">{{ s.label }}</div>
        <div class="hero-stat-val">{{ s.val }}</div>
        <div class="hero-stat-sub">{{ s.sub }}</div>
      </div>
    </div>
    <div class="hero-updated">🕐 Actualizado {{ hora }}</div>
  </div>
</template>

<script setup>
defineProps({
  ciudad: { type: Object, required: true },
  hora:   { type: String, required: true },
})
</script>

<style scoped>
.weather-hero {
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 60%, #7dd3fc 100%);
  border-radius: 24px;
  padding: 36px 40px;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}
.weather-hero::before {
  content: '';
  position: absolute;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  right: -60px; top: -80px;
}
.weather-hero::after {
  content: '';
  position: absolute;
  width: 200px; height: 200px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  right: 80px; bottom: -60px;
}
.hero-left { position: relative; z-index: 1; }
.hero-location { font-size: 13px; opacity: 0.8; margin-bottom: 4px; }
.hero-city { font-family: 'Outfit', sans-serif; font-size: 36px; font-weight: 800; line-height: 1; margin-bottom: 4px; }
.hero-region { font-size: 14px; opacity: 0.75; margin-bottom: 24px; }
.hero-temp-row { display: flex; align-items: center; gap: 20px; }
.hero-sun { font-size: 72px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
.hero-temp { font-family: 'Outfit', sans-serif; font-size: 80px; font-weight: 700; line-height: 1; }
.hero-temp sup { font-size: 32px; vertical-align: super; }
.hero-wind-feel { margin-top: 12px; opacity: 0.85; font-size: 14px; display: flex; gap: 20px; }
.hero-wind-feel span { display: flex; align-items: center; gap: 6px; }

.hero-right { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.hero-stat {
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 14px;
  padding: 16px;
}
.hero-stat-label { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; opacity: 0.75; margin-bottom: 6px; }
.hero-stat-val { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 700; }
.hero-stat-sub { font-size: 12px; opacity: 0.7; margin-top: 2px; }

.hero-updated {
  position: absolute; top: 20px; right: 24px;
  font-size: 12px; opacity: 0.7;
  display: flex; align-items: center; gap: 6px; z-index: 1;
}

@media (max-width: 768px) {
  .weather-hero { grid-template-columns: 1fr; padding: 24px; }
  .hero-temp { font-size: 60px; }
}
</style>
