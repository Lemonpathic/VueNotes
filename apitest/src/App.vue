<script setup>
import PokemonCards from "./components/PokemonCards.vue";
import axios from "axios";


</script>

<template>
  <h1>HERO</h1>
  <Suspense>
    <template #default>
      <PokemonCards></PokemonCards>
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<style scoped>

</style>