<template>
  <button
    class="inline-flex items-center justify-center rounded-md px-2 py-1 transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50"
    :class="{
      'cursor-pointer bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-600':
        color === 'primary',
      'cursor-pointer bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300':
        color === 'secondary',
    }"
    :data-testid="testId"
    :disabled="disabled"
    @click="() => $emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  color: 'primary' | 'secondary'
  disabled?: boolean
  testId: string
  text: string
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>
