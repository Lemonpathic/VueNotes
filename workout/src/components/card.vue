<script setup>

  const {card} = defineProps(['card'])

</script>

<template>

  <div class="card">
    <img :src="card.img">
    <div class="card-text">
      <h2>{{ card.name }}</h2>
      <p>{{ card.workouts.length }} Workouts</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0
}

.card .card-text {
  padding: 0 5px;
  font-weight: bold;
}

.card .card-text h2 {
  font-weight: normal;
  font-size: 50px;
  margin: 0;
}

</style>