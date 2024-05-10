<script setup>
import axios from "axios";
import {ref} from "vue";

const characters = ref(null)
const page = ref(0)
const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=8&offset=0")
characters.value = response.data.results

const nextPage = async () => {
  page.value += 1
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${page.value * 8}`)
  characters.value = response.data.results
}

const prevPage = async () => {
  if (page.value !== 0) {
    page.value -= 1
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${page.value * 8}`)
    characters.value = response.data.results
  } else {
    page.value = 0
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=8&offset=0")
    characters.value = response.data.results
  }
}
</script>

<template>
  <div class="container">
  <div class="cards">

  </div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(27, 26, 26);
  padding: 30px
}

.cards {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 700px
}

.cards h3 {
  font-weight: bold;
}

.cards p {
  font-size: 10px;
}

.jobs {
  display: flex;
  flex-wrap: wrap;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 30px
}

.button-container button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 0 5px;
  cursor: pointer;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>