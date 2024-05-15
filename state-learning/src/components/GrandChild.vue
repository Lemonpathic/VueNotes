<script setup>
import {inject} from "vue";
import useNumbers from "../composable/useNumbers";

const {numbers} = useNumbers()
</script>

<template>
<h3>GRAND CHILD</h3>
  {{numbers}}
</template>

<style scoped>

</style>