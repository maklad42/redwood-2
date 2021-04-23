import { Link, routes } from '@redwoodjs/router'

const TaskDetailsPage = () => {
  return (
    <>
      <h1>TaskDetailsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TaskDetailsPage/TaskDetailsPage.js</code>
      </p>
      <p>
        My default route is named <code>taskDetails</code>, link to me with `
        <Link to={routes.taskDetails()}>TaskDetails</Link>`
      </p>
    </>
  )
}

export default TaskDetailsPage
