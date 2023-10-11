import {Meta, StoryObj} from '@storybook/react'
import Home from './page'

const meta: Meta<typeof Home> = {
  component: Home,
  title: 'Home',
}

export default meta

type Story = StoryObj<typeof Home>

export const DefaultHome: Story = {}
