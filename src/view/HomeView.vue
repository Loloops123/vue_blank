<script setup lang="ts">
import { useMouse, useToggle } from '@vueuse/core'
import { ref } from 'vue'

import TestComponent from '@/components/TestComponent/TestComponent.vue'

const changeColor = ref(true)
const { x, y } = useMouse()
const toggleColor = useToggle(changeColor)
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-4">
    <h1 class="text-3xl font-bold text-blue-600">Vue 3 Template</h1>
    <TestComponent
      :color="changeColor ? 'primary' : 'secondary'"
      test-id="test-component"
      text="BLANK VUE 3 PROJECT"
      @click="toggleColor"
    />
    <div
      class="flex flex-col items-center gap-2 font-sans font-bold text-red-400/80"
    >
      <p class="text-2xl">Mouse position:</p>
      <span class="font-sans text-xl">
        x:&nbsp;{{ x }}
        <br />
        y:&nbsp;{{ y }}
      </span>
    </div>
  </main>
</template>

<style scoped></style>
