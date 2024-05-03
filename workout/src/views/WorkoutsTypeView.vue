<script setup>
import {ref} from "vue";
import workouts from "../data/workouts.json"
import Card from "../components/card.vue";
import { RouterLink } from "vue-router";

</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1>Workouts</h1>
      </header>
      <div class="cards-container">
        <RouterLink v-for="card in workouts" :key="card.id" :to="`/muscle/${card.id}`" class="router-link">
          <Card :card="card" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.router-link {
  text-decoration: none;
  color: white;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust minmax() values as needed for smaller screens */
  gap: 20px; /* Adjust gap size as needed */
}

/* Adjust the number of columns for wider screens */
@media (min-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr); /* Three columns for screens wider than 1200px */
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr); /* Two columns for screens between 768px and 1199px */
  }
}
</style>
