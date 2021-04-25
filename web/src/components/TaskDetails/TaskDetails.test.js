import { render } from '@redwoodjs/testing'

import TaskDetails from './TaskDetails'

describe('TaskDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskDetails />)
    }).not.toThrow()
  })
})
