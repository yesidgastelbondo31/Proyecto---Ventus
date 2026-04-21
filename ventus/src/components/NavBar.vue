<template>
  <div>
    <!-- TICKER -->
    <div class="ticker">
      <div class="ticker-inner">
        <span v-for="(t, i) in tickerDoble" :key="i">{{ t }}</span>
      </div>
    </div>

    <!-- NAV -->
    <nav class="nav">
      <div class="nav-logo">
        <div class="logo-icon">🌤</div>
        Ventus
      </div>
      <div class="search-wrap">
        <input v-model="busqueda" type="text" placeholder="Clima en..." />
        <button class="search-btn">🔍</button>
      </div>
      <div class="nav-menu">☰</div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const busqueda = ref('')

const tickerTopics = ['Meteoro','Lluvia','Aire','Termómetro','Rayo','Sequía','Capa de ozono','Lluvia ácida','Cuenca','Viento','Tornado','Condensación','Precipitación','Granizo']
const tickerDoble = [...tickerTopics, ...tickerTopics]
</script>

<style scoped>
.ticker {
  background: #0369a1;
  color: white;
  font-size: 12px;
  padding: 6px 0;
  overflow: hidden;
  white-space: nowrap;
}
.ticker-inner {
  display: inline-flex;
  gap: 40px;
  animation: scroll 30s linear infinite;
}
.ticker-inner span { opacity: 0.85; }
.ticker-inner span::before { content: '· '; opacity: 0.5; }
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.nav {
  background: #0ea5e9;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 20px rgba(14,165,233,0.3);
}
.nav-logo {
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 22px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  letter-spacing: -0.5px;
}
.logo-icon {
  background: white;
  color: #0ea5e9;
  width: 32px; height: 32px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
}
.search-wrap {
  flex: 1;
  max-width: 560px;
  position: relative;
}
.search-wrap input {
  width: 100%;
  padding: 10px 44px 10px 16px;
  border-radius: 30px;
  border: none;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  background: rgba(255,255,255,0.92);
  color: #0f172a;
  outline: none;
  transition: box-shadow .2s;
}
.search-wrap input:focus { box-shadow: 0 0 0 3px rgba(255,255,255,0.5); }
.search-wrap input::placeholder { color: #94a3b8; }
.search-btn {
  position: absolute;
  right: 12px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none; cursor: pointer;
  color: #0369a1; font-size: 16px;
}
.nav-menu { margin-left: auto; color: white; font-size: 22px; cursor: pointer; }

@media (max-width: 768px) {
  .nav { padding: 0 16px; }
}
</style>
