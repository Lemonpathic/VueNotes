<script setup>
import GrandChild from "./GrandChild.vue";
import {useNumberStore} from "../stores/numbers";

const numbers = useNumberStore()
</script>

<template>
  <div>
    <h2>CHILD</h2>
    {{numbers.numbers}}
    <button @click="addNumber(4)">Add Number</button>
    <v-spacer></v-spacer>
    <div class="line"></div>
    <GrandChild></GrandChild>
  </div>
</template>

<style scoped>

</style>