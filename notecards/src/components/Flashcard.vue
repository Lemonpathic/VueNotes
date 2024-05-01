<script setup>
  const {flashcard} = defineProps(['flashcard'])

  const switchSides = (card) =>{
    card.side === "front"? card.side = 'back':card.side='front'
  }
</script>

<template>
  <div @click="switchSides(flashcard)" class="flashcard">
    <h3>{{ flashcard.side }}</h3>
    <p>{{ flashcard.side === 'front'?flashcard.front:flashcard.back }}</p>
  </div>
</template>

<style scoped>

</style>