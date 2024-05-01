<script setup>
import {ref} from "vue";
import workouts from "./data/workouts.json"
import {watch} from "vue";
import Card from "./components/card.vue";
import {RouterView} from "vue-router";
</script>

<!--<template>-->
<!--  <main>-->
<!--    <div class="container">-->
<!--      <header>-->
<!--        <h1>Workouts</h1>-->
<!--      </header>-->
<!--      <div class="cards-container">-->
<!--        <Card v-for="card in workouts" :key="card.id" :card="card"/>-->
<!--      </div>-->
<!--    </div>-->
<!--  </main>-->
<!--</template>-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
  main{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .cards-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>