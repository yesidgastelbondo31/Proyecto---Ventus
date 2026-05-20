<template>
  <div class="fondo">
    <span v-for="n in 25" :key="n"></span>
  </div>
</template>

<style scoped>
.fondo {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: -1;
}

span {
  position: absolute;
  width: 12px;
  height: 12px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  animation: flotar 10s linear infinite;
}

span:nth-child(odd) {
  background: rgba(255,255,255,0.15);
}

@keyframes flotar {
  from {
    transform: translateY(100vh) scale(0);
  }

  to {
    transform: translateY(-10vh) scale(1);
  }
}
</style>