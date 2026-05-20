<template>
  <h3 class="reloj">
    🕒 {{ hora }}
  </h3>
</template>

<script>
export default {
  data() {
    return {
      hora: ''
    }
  },

  mounted() {
    setInterval(() => {
      this.hora = new Date().toLocaleTimeString()
    }, 1000)
  }
}
</script>

<style scoped>
.reloj {
  color: white;
}
</style>