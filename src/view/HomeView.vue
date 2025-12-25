<script setup lang="ts">
import TestComponent from '@/components/TestComponent/TestComponent.vue'

const handleClick = () => {
  /* console.info('click') */
}
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-4">
    <h1 class="text-3xl font-bold text-blue-600">Vue 3 Template</h1>
    <TestComponent
      color="primary"
      test-id="test-component"
      text="BLANK VUE 3 PROJECT"
      @click="handleClick"
    />
  </main>
</template>

<style scoped></style>
