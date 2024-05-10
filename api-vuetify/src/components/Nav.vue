<script setup>
import {ref} from "vue";
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

const drawer = ref(false)
const changeDrawer = () => {
  drawer.value = !drawer.value
  console.log(drawer.value)
}
</script>
<template>

  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://th.bing.com/th/id/OIP._4icVoLhE2XV-NKwtUn88gHaF6?rs=1&pid=ImgDetMain"
        title="Ash Ketchum"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-cards-outline" title="Page View" value="page" to="/" active-class="active-nav"></v-list-item>
      <v-list-item prepend-icon="mdi-cards-variant" title="Card View" value="card" to="/cardview" active-class="active-nav"></v-list-item>
      <v-list-item prepend-icon="mdi-magnify" title="Search" value="search" to="/searchview" active-class="active-nav"></v-list-item>
      <v-list-item prepend-icon="mdi-pokeball" title="Starred" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>


</template>


<style scoped>
.active-nav {
  background-color: lightcoral !important;
}
</style>
