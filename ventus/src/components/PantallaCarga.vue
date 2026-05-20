<template>
  <div class="overlay">

    <div class="loader-box">

      <div class="spinner"></div>

      <h2>Cargando...</h2>

    </div>

  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.loader-box {
  text-align: center;
  color: white;
}

.spinner {
  width: 70px;
  height: 70px;

  border: 6px solid rgba(255,255,255,0.3);
  border-top: 6px solid white;

  border-radius: 50%;

  animation: spin 1s linear infinite;

  margin: auto;
  margin-bottom: 15px;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>