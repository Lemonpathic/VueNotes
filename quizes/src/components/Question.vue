<script setup>
import { ref } from 'vue';
import questions from "../data/quizes.json";
import { useRoute, useRouter } from "vue-router";
import { defineProps } from "vue";
import {defineEmits} from "vue";

const router = useRouter();
const route = useRoute();

const emit = defineEmits(["selectOption"])
const { questionNumber } = defineProps(["questionNumber"]);

console.log(questionNumber)

const checkAnswer = (answer) =>{
 emit("selectOption", answer.isCorrect)
}
</script>

<template>
  <div class="container">
    <div class="info">
    </div>
    <h1>
      {{ questionNumber.text }}
    </h1>
    <ul class="questions-list">
      <li v-for="answer in questionNumber.options" :key="answer" class="question" @click="checkAnswer(answer)">
        <p class="letter">{{ answer.label }}</p>
        <p class="answer">{{ answer.text }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.questions-list {
  width: 75%;
  padding-top: 50px;
  list-style-type: none;
}

.question {
  display: grid;
  grid-template-columns: 1fr 15fr;
  font-size: xx-large;
  border: 1px solid #ccc;
  margin: 10px;
  margin-bottom: 25px;
  align-items: center;
  transition: background-color 0.3s; /* Adding transition for smooth effect */
}
h1 {
  font-size: 4em;
}
.letter {
  transition: background-color 0.3s; /* Adding transition for smooth effect */
  font-size: 1em;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}
.answer{
  margin-left: 10px;
}
/* Apply hover effect to entire li */
.question:hover .letter {
  background-color: darkblue;
  color: white;
}

.question:hover{
  background-color: gray;
  color: white;
}
</style>
