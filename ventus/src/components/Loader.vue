<template>
  <div class="loader"></div>
</template>

<style>
.loader {
  border: 5px solid #eee;
  border-top: 5px solid #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 20px auto;
  animation: girar 1s linear infinite;
}

@keyframes girar {
  to { transform: rotate(360deg); }
}
</style>