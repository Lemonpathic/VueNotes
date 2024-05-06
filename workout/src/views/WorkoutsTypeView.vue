<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import workoutsData from "../data/workouts.json"; // Correct import name
import Card from "../components/card.vue";
import { RouterLink } from "vue-router";

const router = useRouter();

const workouts = ref(workoutsData); // Use a different name for the ref to avoid conflict
const search = ref("");

watch(search, () => {
  workouts.value = workoutsData.filter(workout => workout.name.toLowerCase().includes(search.value.toLowerCase())); // Use workoutsData for filtering
});
</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1>Workouts</h1>
        <input v-model.trim="search" type="text" placeholder="Search...">
      </header>
      <div class="cards-container">
        <div v-for="card in workouts" :key="card.id" @click="router.push(`/muscle/${card.id}`)">
          <Card :card="card"/>
        </div>
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
  color: Blue;
}

header input {
  margin-bottom: 15px;
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
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
