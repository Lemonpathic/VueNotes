<script setup lang="ts">
import PokemonCards from "@/components/PokemonCards.vue";
import PokemonCardsSearch from "@/components/PokemonCardsSearch.vue";
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <PokemonCardsSearch></PokemonCardsSearch>
      </template>

      <template #fallback>
        <div>
          <h1>LOADING...</h1>
        </div>
      </template>
    </Suspense>
  </main>
</template>
