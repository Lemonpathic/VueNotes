<script setup>
import axios from "axios";
import {ref, watch} from "vue";
import Card from "@/components/Card.vue";

const pokemon = ref([]);
const filteredPokemon = ref([]);
const page = ref(0);
const isLoading = ref(false);
const search = ref("");
const fetchData = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
    pokemon.value = [...pokemon.value, ...response.data.results];
    page.value++;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;

  }
};

fetchData()

console.log(pokemon.value)

watch(search, () => {
  console.log(search.value)
  filteredPokemon.value = pokemon.value.filter(poke => poke.name.toLowerCase().includes(search.value.toLowerCase()));
  console.log(pokemon.value)
});
</script>

<template>
  <div class="container">
    <v-row align="center" justify="center">
      <v-text-field v-model="search" label="Search" placeholder="Search for a Pokémon" style="margin-top: 100px;"></v-text-field>
    </v-row>
    <div class="cards">
      <Card v-for="poke in filteredPokemon" v-if="search!==''" :pokemon="poke" :key="poke.name"></Card>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-content: center;
  align-items: center;
  grid-auto-rows: 450px;
}

.v-btn--disabled {
  color: black !important; /* Change 'grey' to any color you want */
  background-color: gray !important; /* Change 'lightgrey' to any color you want */
}

</style>

