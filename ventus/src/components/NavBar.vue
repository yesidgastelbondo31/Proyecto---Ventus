<template>
  <nav class="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/clima">Clima</router-link>
  </nav>
</template>

<style>
.nav {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #222;
}
a {
  color: white;
}
</style>