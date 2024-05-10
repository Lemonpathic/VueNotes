<script setup lang="ts">
import PokemonCards from "@/components/PokemonCards.vue";
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <PokemonCards></PokemonCards>
      </template>

      <template #fallback>
        <div>
          <h1>LOADING...</h1>
        </div>
      </template>
    </Suspense>
  </main>
</template>
