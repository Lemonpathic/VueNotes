<script setup>
import {ref} from "vue";
import q from "../data/quizes.json"
import {watch} from "vue";
import Card from "../components/card.vue"
import {useRouter} from "vue-router";

const router = useRouter()
const quizzes = ref(q)
const search = ref("")

watch(search, () =>{
  quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>
<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" @click="router.push(`/${quiz.name}`)"></card>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>