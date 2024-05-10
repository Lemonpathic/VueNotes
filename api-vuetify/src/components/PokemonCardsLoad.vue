<script setup>
import axios from "axios";
import { ref } from "vue";
import Card from "@/components/Card.vue";

const pokemon = ref([]);
const page = ref(0);
const isLoading = ref(false);

const fetchData = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${8 * page.value}`);
    pokemon.value = [...pokemon.value, ...response.data.results];
    page.value++;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;

  }
};

const loadMore = () => {
  fetchData();
};

fetchData()
</script>

<template>
  <div class="container">
    <div class="cards">
      <Card v-for="poke in pokemon" :pokemon="poke" :key="poke.name"></Card>
    </div>
    <v-row align="center" justify="center">
      <v-btn @click="loadMore">
      Load More
      </v-btn>
    </v-row>
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

