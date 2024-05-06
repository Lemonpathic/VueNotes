<script setup>
import {RouterView} from "vue-router";
import Nav from "./components/Nav.vue";
</script>


<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>