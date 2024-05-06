<script setup>
  import workouts from "../data/workouts.json"
  import {useRoute} from "vue-router";
  import WorkoutCard from "../components/WorkoutCard.vue";

  const route = useRoute()
  console.log(route.params)
  const muscleGroup = workouts.find(mg => mg.name === route.params.musclename)
  console.log(muscleGroup)
  const workout = muscleGroup.workouts.find(w => w.id === parseInt(route.params.workoutid))
</script>

<template>
  <h1>{{workout.name}}</h1>
  <WorkoutCard :workout = 'workout'></WorkoutCard>
</template>

<style scoped>

</style>