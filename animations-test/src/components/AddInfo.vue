<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {defineProps, defineEmits, defineExpose} from "vue";

const {selectedPerson} = defineProps(["selectedPerson"]);

const emit = defineEmits(["close", "submit"])
const closePopup = () => {
  emit("close")
}

const submit = () => {
  console.log(selectedPerson.value)
  emit("submit", selectedPerson.value)
}

</script>

<template>
  <div class="popup">
    <textarea name="info" id="info-box" cols="30" rows="10" placeholder="Add Information..."
              v-model="selectedPerson.info"></textarea>
    <button @click="closePopup">Submit</button>
    <button @click="closePopup">Close</button>
    <p>{{ selectedPerson }}</p>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>