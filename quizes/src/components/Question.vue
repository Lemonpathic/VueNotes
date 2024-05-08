<script setup>
  import questions from "../data/quizes.json"
  import {createRouter, useRoute, useRouter} from "vue-router";

  const router = useRouter()
  const route = useRoute()

  const question = questions.find(q => q)
</script>

<template>

</template>

<style scoped>

</style>