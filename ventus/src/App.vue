<template>
  <div class="layout">
    <nav class="nav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/clima">Clima</router-link>
    </nav>

    <div class="contenido">
      <router-view />
    </div>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

/* ESTRUCTURA GENERAL */
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* NAV */
.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  background: #111;
}

.nav a {
  color: white;
  text-decoration: none;
}

/* 🔥 CLAVE */
.contenido {
  flex: 1;
  display: flex;
}
</style>