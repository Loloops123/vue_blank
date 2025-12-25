<script setup lang="ts">
import SpinnerIcon from '~icons/svg-spinners/180-ring-with-bg'

console.log(import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <h1
    class="font-sans text-2xl text-indigo-500"
    role="heading"
  >
    <span
      class="block w-auto shadow-2xl"
      role="term"
    >
      123
      <SpinnerIcon />
    </span>
  </h1>
</template>

<style scoped></style>
