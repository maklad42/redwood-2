import { render } from '@redwoodjs/testing'

import TaskDetailsPage from './TaskDetailsPage'

describe('TaskDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskDetailsPage />)
    }).not.toThrow()
  })
})
