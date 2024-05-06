<script setup>
import {useRoute, useRouter} from "vue-router";
import workouts from "../data/workouts.json"
import WorkoutCard from "../components/WorkoutLinkCard.vue";
import {RouterLink} from "vue-router";

const route = useRoute()
const router = useRouter()
const muscle = workouts.find(w => w.id === parseInt(route.params.id))
</script>

<template>
  <h1>{{ muscle.name }}</h1>
  <div v-for="workout in muscle.workouts" :key="workout.id"
       @click="router.push(`/workout/${muscle.name}/${workout.id}`)" :workout='workout' class="workout">
    <WorkoutCard :workout="workout"></WorkoutCard>
  </div>
</template>

<style scoped>
  .workout{
    cursor: pointer;
    color: #535bf2;
  }
</style>