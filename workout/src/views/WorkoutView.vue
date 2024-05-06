<script setup>
  import workouts from "../data/workouts.json"
  import {useRoute, useRouter, RouterView} from "vue-router";
  import WorkoutCard from "../components/WorkoutCard.vue";

  const route = useRoute()
  const router = useRouter()

  console.log(route.params)
  const muscleGroup = workouts.find(mg => mg.name === route.params.musclename)
  console.log(muscleGroup)
  const workout = muscleGroup.workouts.find(w => w.id === parseInt(route.params.workoutid))
</script>

<template>
  <div v-if="workout">
  <h1>{{workout.name}}</h1>
  <WorkoutCard :workout = 'workout'></WorkoutCard>
  <button @click="router.push(`/workout/${muscleGroup.name}/${workout.id}/info`)">Click me for more info</button>
  <p @click="router.back()">Go Back</p>

  <router-view>
  </router-view>
  </div>
  <div v-else>
    ERROR MAN
  </div>
</template>

<style scoped>

</style>