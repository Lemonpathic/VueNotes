<script setup type="ts" >
import {ref, computed, watchEffect, toRef} from "vue";
import axios from "axios";
import PokemonPopup from "@/components/PokemonPopup.vue";

const show = ref(false);
const props = defineProps(["pokemon"]);
const pokemon = toRef(props, 'pokemon');


const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const thisPokemon = ref(null);
let pokemonImage;

const fetchPokemonData = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.value.name}`)
  thisPokemon.value = response.data
}

watchEffect(() => {
  fetchPokemonData()
})

pokemonImage = computed(() => {
  return thisPokemon.value ? thisPokemon.value.sprites.front_default : null;
});

const changeShow = () => {
  show.value = !show.value;
  console.log(show.value)
}
</script>


<template>
  <v-card v-if="thisPokemon" class="mx-auto" max-width="344" min-width="344">
    <v-btn icon="mdi-pokeball" class="star-pokemon" style="position: absolute; z-index: 9999; margin: 10px; background-color: dimgray "></v-btn>
    <Suspense>
      <template #default>
        <div>
          <v-img class="scaled-image"  height="280px" :src="pokemonImage" cover></v-img>
        </div>
      </template>
      <template #fallback>
        <div>
          <!--        <h1>Loading Pokémon image...</h1>-->
        </div>
      </template>
    </Suspense>

    <v-card-title>
      {{ capitalize(pokemon.name) }}
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-actions style="flex-direction: row-reverse">
      <v-row>
        <PokemonPopup :pokemon="pokemon"></PokemonPopup>
      </v-row>


      <v-spacer></v-spacer>
    </v-card-actions>
    <PokemonPopup v-if="show" @close="show = false"></PokemonPopup>
  </v-card>
  <div v-else>
<!--    <h1>Loading Pokémon data...</h1>-->
  </div>
</template>


<style scoped>
.mx-auto {
  margin: 10px;
}
.scaled-image{
  width: 100%;
  height: auto;
}
.star-pokemon:hover {
  background-color: red !important;
  color: white;

}
</style>
