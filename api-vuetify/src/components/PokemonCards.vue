<script setup>
import axios from "axios";
import {ref} from "vue";
import Card from "@/components/Card.vue";

const pokemon = ref([])
const page = ref(0)
const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=8&offset=0")
pokemon.value = response.data.results
const nextPage = async () => {
  page.value += 1
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${page.value * 8}`)
  console.log("Next Page data: {}", response.data)
  pokemon.value = response.data.results
}

const prevPage = async () => {
  if (page.value !== 0) {
    page.value -= 1
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${page.value * 8}`)
    pokemon.value = response.data.results
  } else {
    page.value = 0
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=8&offset=0")
    pokemon.value = response.data.results
  }
}

</script>

<template>
  <div class="container">
    <div class="cards">
      <Card v-for="poke in pokemon" :pokemon="poke" :key="poke.name"></Card>
    </div>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn density="comfortable" icon="mdi-chevron-left" :disabled="page === 0" @click="prevPage"></v-btn>
      </v-col>
      <p>{{page + 1}}</p>
      <v-col cols="auto">
        <v-btn density="comfortable" icon="mdi-chevron-right" @click="nextPage"></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.cards{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
  justify-content: center;
  align-items: center;
  grid-auto-rows: 450px;
}
.v-btn--disabled {
  color: black !important; /* Change 'grey' to any color you want */
  background-color: gray !important; /* Change 'lightgrey' to any color you want */
}

</style>

