<script setup>
</script>

<template>
  <div class="home">

    <div class="overlay"></div>

    <div class="content">
      <h1>🌦️ Ventus</h1>
      <p>Consulta el clima en tiempo real en cualquier ciudad</p>

      <router-link to="/clima">
        <button>Comenzar</button>
      </router-link>
    </div>

  </div>
</template>

<style>
.home {
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

/* EFECTO LUZ */
.overlay {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.2), transparent);
  animation: mover 8s infinite linear;
}

/* CONTENIDO */
.content {
  position: relative;
  text-align: center;
  color: white;
  animation: fadeIn 1s ease;
}

h1 {
  font-size: 50px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

/* BOTÓN */
button {
  padding: 12px 25px;
  border-radius: 30px;
  border: none;
  background: white;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
  background: #ddd;
}

/* ANIMACIONES */
@keyframes mover {
  0% { transform: translate(-25%, -25%); }
  50% { transform: translate(25%, 25%); }
  100% { transform: translate(-25%, -25%); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>