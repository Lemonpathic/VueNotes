<script setup>
import Parent from "./components/Parent.vue";

</script>

<template>
<main>
  <div class="container">
    <Parent></Parent>

  </div>

</main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

div {
  display: flex;
  flex-direction: column;
}
.container{
  text-align: center;
}
</style>
