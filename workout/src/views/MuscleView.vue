<script setup>
import {useRoute} from "vue-router";
import workouts from "../data/workouts.json"
import WorkoutCard from "../components/WorkoutLinkCard.vue";
import {RouterLink} from "vue-router";

const route = useRoute()
const muscle = workouts.find(w => w.id === parseInt(route.params.id))
</script>

<template>
  <h1>{{muscle.name}}</h1>
  <RouterLink v-for="workout in muscle.workouts" :key="workout.id">
    <WorkoutCard :workout = "workout"></WorkoutCard>
  </RouterLink>
</template>