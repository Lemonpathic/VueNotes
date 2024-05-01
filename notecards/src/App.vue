<script setup>
import {ref} from "vue";
import Flashcard from "./components/Flashcard.vue";
const showModal = ref(false)

const frontTerm = ref("")
const backTerm = ref("")

const text = ref("")
const flashCards = ref([])
let side = ref("")
const setCard = () => {
  switch (side.value) {
    case "":
      side.value = 'front'
      break
    case "front":
      side.value = 'back'
      break
    case "back":
      side.value = ''
      showModal.value = false
      break
  }
}
const createCard = () => {
  console.log(frontTerm.value)
  showModal.value = true;
  // Set the values of frontTerm and backTerm after calling setCard
  if (side.value === 'front') {
    console.log(text.value)
    frontTerm.value = text.value;
  } else if (side.value === 'back') {
    backTerm.value = text.value;
    pushCard(frontTerm.value, backTerm.value); // Push the card only if it's on the back side
  }
  setCard();
  text.value = ''


};

const switchSides = (card) =>{
  card.side = card.side === 'front' ? 'back' : 'front';
}
const showModalFunc = () => {
  showModal.value = true
  setCard()
}
const pushCard = (front, back) => {
  flashCards.value.push({
    id: Math.floor(Math.random() * 100000),
    front: front,
    back: back,
    side: 'front'
  })
}
</script>
<template>
  <main>
    <div class="overlay" v-if="showModal">
      <div class="modal">
        <p>What is the {{ side }} term</p>
        <textarea
            v-model="text"
            name="note"
            id="note"
            cols="30"
            rows="10"
        ></textarea>
        <button @click="createCard">
          Enter
        </button>
        <button @click="showModal = false" id="exit">
          Exit
        </button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Flash Cards</h1>
        <button @click="showModalFunc" :style="{gridColumn:3, justifySelf:'end'}">+</button>
      </header>
      <div class="flashcard-container">
        <flashcard v-for="card in flashCards" :key="card.id" :flashcard="card"></flashcard>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  justify-content: center;
  height: 95vh;
  width: 95vw;
}

.container header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}

header button {
  background: black;
  color: white;
  border-radius: 100%;
  width: 50px;
  height: 50px;

}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: gray;
  padding: 30px;
  border-radius: 2%;
}

button {
  margin-top: 10px;
}

.modal #exit {
  background-color: red;
}

.flashcard-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
}

.flashcard {
  margin-bottom: 15px;
  background-color: tan;
  width: 45%;
  cursor: pointer;
}
</style>