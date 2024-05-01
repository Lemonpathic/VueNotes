<script setup>
  import {ref} from "vue";

  function generateRandomLightRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const opacity = 0.5; // Set opacity if needed
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }

  const showModal = ref(false)
  const newNote = ref("")
  const notes = ref([])

  const addNote = () =>{
    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: generateRandomLightRGBColor()
    })
    showModal.value = false
    newNote.value = ""
  }
</script>
<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <button @click="addNote">Add Note</button>
        <button @click="showModal = false" class="exit">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes"
             :key="note.id"
             class="card"
             :style="{backgroundColor : note.backgroundColor}"
        >
          <p class="text">{{ note.text }}</p>
          <p class="date">{{note.date.toLocaleDateString("en-US")}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;

}
.container{
  max-width: 600px;
  padding: 10px;
  margin: 0 auto;

}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;

}
header button{
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor:pointer;
  border-radius: 100%;
  color: white;
  font-size: 20px;
  background-color: black;
}
.card{
  width: 225px;
  height: 225px;
  background-color: yellow;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  text-align: left;
}
.date{
  font-size: 13px;
  font-weight: bold;
}
.cards-container{
  display: flex;
  flex-wrap: wrap;
}
.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

}
.modal{
  width: 700px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button{
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  justify-self: center;
  background-color: blue;
  margin-top: 20px;
  border-radius: 1%;
  color: white;
}
.modal .exit{
  background-color: red;
  margin-top: 7px;
}
</style>
