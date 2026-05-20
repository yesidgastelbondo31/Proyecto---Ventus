<template>
  <h2 class="saludo">
    {{ mensaje }}
  </h2>
</template>

<script>
export default {
  data() {
    return {
      mensaje: ''
    }
  },

  mounted() {
    const hora = new Date().getHours()

    if (hora < 12) {
      this.mensaje = '☀️ Buenos días'
    } else if (hora < 18) {
      this.mensaje = '🌤️ Buenas tardes'
    } else {
      this.mensaje = '🌙 Buenas noches'
    }
  }
}
</script>

<style scoped>
.saludo {
  color: white;
  margin-bottom: 10px;
}
</style>