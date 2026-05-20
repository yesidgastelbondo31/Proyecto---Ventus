<template>
  <div class="ciudades">

    <button
      v-for="ciudad in ciudades"
      :key="ciudad"
      @click="$emit('seleccionar', ciudad)"
    >
      {{ ciudad }}
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ciudades: [
        'Bogotá',
        'Medellín',
        'Cali',
        'Cartagena',
        'Barranquilla'
      ]
    }
  }
}
</script>

<style scoped>
.ciudades {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
}

button {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 12px;
  cursor: pointer;
}
</style>