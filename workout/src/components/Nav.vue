<script setup>
  import {useRouter,useRoute} from "vue-router";
  const route = useRoute()
  const router = useRouter()
</script>

<template>
  <h2 v-if="route.path !== '/'" @click="router.push('/')">Home</h2>
</template>

<style scoped>

</style>