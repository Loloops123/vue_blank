import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect, fn, userEvent } from 'storybook/test'

import TestComponent from './TestComponent.vue'

const colors = ['primary', 'secondary']

const meta = {
  argTypes: {
    color: { options: colors },
  },
  component: TestComponent,
  tags: ['autodocs'],
  title: 'Components/TestComponent',
} satisfies Meta<typeof TestComponent>

export default meta

type Story = StoryObj<typeof meta>

const onClickMock = fn()

export const Default: Story = {
  args: {
    color: 'primary',
    onClick: onClickMock,
    testId: 'test-id',
    text: 'test component',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByTestId('test-id')
    await expect(button).toHaveTextContent('test component')

    await userEvent.click(button)
    await expect(onClickMock).toBeCalledTimes(1)
  },
}
