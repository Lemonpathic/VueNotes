<script setup>
import axios from "axios";
import {ref} from "vue";
import {defineProps} from "vue";

const {pokemon} = defineProps(["pokemon"]);
const thisPokemon = ref(null);
const thisPokemonEvolution = ref(null);
const evolutionOrder = ref(-1); // Default value for evolution order
const evolutions = ref({})

const fetchData = async () => {
  try {
    const response = await axios.get(pokemon.url);
    thisPokemon.value = response.data;
    const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${thisPokemon.value.id}/`);
    thisPokemon.value = response2.data;
    const response3 = await axios.get(thisPokemon.value.evolution_chain.url);
    thisPokemonEvolution.value = response3.data;

    // Determine the order of evolution for the clicked Pokémon
    evolutionOrder.value = calculateEvolutionOrder(thisPokemonEvolution.value.chain);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const calculateEvolutionOrder = (chain, order = 0) => {
  console.log(chain)
  evolutions.value[order] = chain.species.name

  if (chain.evolves_to.length === 0) {
    return
  }
  calculateEvolutionOrder(chain.evolves_to[0], order + 1)
  console.log(evolutions.value)

};


fetchData();
</script>
<template>
  <Suspense>
    <template #default>
      <div>
        <h1>{{ evolutions }}</h1>
      </div>
    </template>
    <template #fallback>
      <div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>

</style>
