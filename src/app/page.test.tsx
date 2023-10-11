import {describe, test, expect, beforeEach} from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Home from './page'

describe('{{pascalCase name}}', () => {
  let home: HTMLElement
  beforeEach(() => {
    render(<Home />)
    home = screen.getByTestId('home')
  })

  test('should render the {{pascalCase name}}', () => {
    expect(home).toBeInTheDocument()
  })
})
