<template>
  <div class="bottom-grid">

    <!-- UV -->
    <div class="info-card">
      <h3>☀️ Índice UV hoy</h3>
      <div class="uv-val">{{ uv }}</div>
      <div class="uv-desc">Baja — No se requiere protección especial</div>
      <div class="uv-bar-wrap">
        <div class="uv-bar">
          <div class="uv-needle" :style="{ left: uvPct + '%' }"></div>
        </div>
        <div class="uv-labels">
          <span>Baja</span><span>Moderada</span><span>Alta</span><span>Muy alta</span><span>Extrema</span>
        </div>
      </div>
    </div>

    <!-- CONDICIONES -->
    <div class="info-card">
      <h3>📊 Condiciones actuales</h3>
      <div class="stat-rows">
        <div class="stat-row" v-for="c in condiciones" :key="c.label">
          <div class="stat-row-left"><span class="si">{{ c.icono }}</span> {{ c.label }}</div>
          <div class="stat-row-right">{{ c.val }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  uv:         { type: Number, default: 2 },
  condiciones: { type: Array, required: true },
})

const uvPct = computed(() => (props.uv / 11) * 100)
</script>

<style scoped>
.bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 24px; }
.info-card {
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  padding: 24px;
  box-shadow: 0 4px 24px rgba(14,165,233,0.07);
}
.info-card h3 { font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 16px; }
.uv-val { font-family: 'Outfit', sans-serif; font-size: 28px; font-weight: 700; color: #22c55e; }
.uv-desc { font-size: 13px; color: #64748b; margin-bottom: 14px; margin-top: 4px; }
.uv-bar {
  height: 8px; border-radius: 8px;
  background: linear-gradient(90deg, #22c55e, #f59e0b, #ef4444);
  position: relative; margin-bottom: 6px;
}
.uv-needle {
  width: 14px; height: 14px;
  background: white;
  border: 3px solid #f59e0b;
  border-radius: 50%;
  position: absolute; top: -3px;
  transform: translateX(-50%);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.uv-labels { display: flex; justify-content: space-between; font-size: 10px; color: #64748b; }
.stat-rows { display: flex; flex-direction: column; gap: 12px; }
.stat-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: #f8fafc; border-radius: 12px; }
.stat-row-left { display: flex; align-items: center; gap: 10px; font-size: 14px; }
.si { font-size: 18px; }
.stat-row-right { font-weight: 600; font-size: 14px; color: #0369a1; }

@media (max-width: 768px) {
  .bottom-grid { grid-template-columns: 1fr; }
}
</style>
