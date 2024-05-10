<template>
  <v-app>

    <v-main>
      <Nav></Nav>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
//
import Nav from "@/components/Nav.vue";
</script>
