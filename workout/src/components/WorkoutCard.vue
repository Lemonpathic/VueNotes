<script setup>
  const {workout} = defineProps(['workout'])
  console.log(workout)
</script>

<template>
  <h2 v-if="workout!=null">{{workout.intensity}}</h2>
</template>

<style scoped>

</style>