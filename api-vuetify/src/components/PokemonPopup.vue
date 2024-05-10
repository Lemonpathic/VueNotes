<script setup>
import {ref, toRef, watchEffect} from "vue";

const {pokemon} = defineProps(["pokemon"]);
</script>
<template>
<v-dialog max-width="800">
<template v-slot:activator="{ props: activatorProps }">
  <v-btn
    v-bind="activatorProps"
    color="#F08080FF"
    text="Information"
    variant="outlined"
  ></v-btn>
</template>

<template v-slot:default="{ isActive }">
  <v-card :title="pokemon.name.toUpperCase()" subtitle="Evolution">
    <v-card-text>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        text="Close Dialog"
        @click="isActive.value = false"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
</v-dialog>
</template>
