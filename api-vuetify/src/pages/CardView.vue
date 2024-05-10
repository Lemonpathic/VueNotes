<script setup lang="ts">
import PokemonCards from "@/components/PokemonCards.vue";
import PokemonCardsLoad from "@/components/PokemonCardsLoad.vue";
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <PokemonCardsLoad></PokemonCardsLoad>
      </template>

      <template #fallback>
        <div>
          <h1>LOADING...</h1>
        </div>
      </template>
    </Suspense>
  </main>
</template>
