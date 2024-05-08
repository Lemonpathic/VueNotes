<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute()

const search = ref("");

const people = ref([])

const addPerson = () => {
  if (search.value.trim() !== "") {
    const person = {
      name: search.value
    }
    people.value.push(person)
    search.value = ""
  }
}

const addInfo = () => {

}

</script>

<template>
  <input type="text" placeholder="Add Person..." v-model.trim="search" @keyup.enter="addPerson">
  <h1 v-for="person in people" @click="">{{ person }}</h1>
</template>

<style scoped>

</style>