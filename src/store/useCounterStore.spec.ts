import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useCounterStore } from './useCounterStore.ts'

describe('useCounterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increment', () => {
    const counter = useCounterStore()

    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('decrement', () => {
    const counter = useCounterStore()

    counter.decrement()
    expect(counter.count).toBe(-1)
  })
})
