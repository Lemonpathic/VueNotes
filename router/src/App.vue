<script setup>
  import {RouterView} from "vue-router";
  import Nav from "./components/Nav.vue";
  import {ref} from "vue";

  const name = ref("Bryan")
  const flipName = () =>{
    name.value === 'Bryan'? name.value = 'Wilson': name.value='Bryan'
  }
</script>
<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>