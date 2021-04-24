import { render } from '@redwoodjs/testing'

import TaskListLayout from './TaskListLayout'

describe('TaskListLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskListLayout />)
    }).not.toThrow()
  })
})
