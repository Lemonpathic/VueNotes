<script setup>
import quizes from "../data/quizes.json"
import {useRouter, useRoute} from "vue-router";
import Question from "@/components/Question.vue";
import {ref, watch} from "vue";


const route = useRoute()
const router = useRouter()

const quiz = quizes.find(q => q.name === route.params.subject)
const numberOfCorrectAnswers = ref(0)
const questionNumber = ref(0)


const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++
  }
  console.log(isCorrect)
  questionNumber.value++
  if (questionNumber.value === parseInt(quiz.questions.length + 1)) {
    console.log("Done")
  }
}


</script>

<template>
  <div>
    <Question :questionNumber="quiz.questions[questionNumber]"
              @selectOption="onOptionSelected"></Question>
  </div>
</template>

<style scoped>

</style>