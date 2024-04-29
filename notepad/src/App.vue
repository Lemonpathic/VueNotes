<template>
  <main>
    <div class="overlay">
      <div class="modal">
        <textarea name="note" id="note" cols="30" rows="10"></textarea>
        <button>Add Note</button>
        <button class="exit">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button>+</button>
      </header>
      <div class="cards-container">
        <div class="card">
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
          <p class="date">4/25/2025</p>
        </div>
        <div class="card">
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
          <p class="date">4/25/2025</p>
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
