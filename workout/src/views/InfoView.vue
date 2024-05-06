<script setup>
  import workouts from "../data/workouts.json"
  import {useRoute} from "vue-router";

  const route = useRoute()
  const  muscleGroup = workouts.find(w => w.id === parseInt(route.params.workoutid))

</script>

<template>
<div v-if="muscleGroup">
  <h1>
    {{muscleGroup.name}}
  </h1>
</div>
</template>

<style scoped>

</style>