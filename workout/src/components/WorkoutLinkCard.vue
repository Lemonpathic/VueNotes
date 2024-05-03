<script setup>
const {workout} = defineProps(['workout'])
</script>
<template>
  <h1>{{workout.name}}</h1>
</template>
<style scoped>
h1{
  font-weight: lighter;
}
</style>