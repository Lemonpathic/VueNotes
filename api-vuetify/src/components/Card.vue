<script setup type="ts" >
import {ref, computed, watchEffect, toRef} from "vue";
import axios from "axios";

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
</script>


<template>
  <v-card v-if="thisPokemon" class="mx-auto" max-width="344" min-width="344">
    <v-btn icon="mdi-pokeball" class="star-pokemon" style="position: absolute; z-index: 9999; margin: 10px; background-color: dimgray "></v-btn>
    <Suspense>
      <template #default>
        <v-img class="scaled-image"  height="280px" :src="pokemonImage" cover></v-img>
      </template>
      <template #fallback>
<!--        <h1>Loading Pokémon image...</h1>-->
      </template>
    </Suspense>

    <v-card-title>
      {{ capitalize(pokemon.name) }}
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-actions style="flex-direction: row-reverse">
      <v-row>
        <v-btn color="#F08080FF" variant="outlined" text="Information" outlined></v-btn>
      </v-row>

      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <Suspense>
          <template #default>
            <v-card-text>
              <h2 v-for="ability in thisPokemon.abilities" :key="ability.ability.name">
                {{ capitalize(ability.ability.name) }}
              </h2>
            </v-card-text>
          </template>
          <template #fallback>
            <p>Loading Pokémon abilities...</p>
          </template>
        </Suspense>
      </div>
    </v-expand-transition>
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
