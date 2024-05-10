<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import AddInfo from "../components/AddInfo.vue";
const router = useRouter();
const route = useRoute()

const search = ref("");

const people = ref([])

const popUp = ref(false)
const selectedPerson = ref("")

const addPerson = () => {
  if (search.value.trim() !== "") {
    const person = {
      name: search.value
    }
    people.value.push(person)
    search.value = ""
  }
}

const addInfo = (person) => {
  selectedPerson.value = person
  console.log(person)
  console.log(selectedPerson.value)
  popUp.value? popUp.value = false : popUp.value = true
}

const updateInfo = (info) => {
  selectedPerson.value.info = info
  popUp.value = false}
</script>

<template>
  <div class="container">
    <input type="text" placeholder="Add Person..." v-model.trim="search" @keyup.enter="addPerson">
    <h1 v-for="person in people" @click="addInfo(person)">{{ person }}</h1>
    <AddInfo v-if="popUp" :selectedPerson="selectedPerson" @close="popUp = false" @submit="updateInfo"></AddInfo>
  </div>
</template>

<style scoped>

</style>