import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query TaskListQuery {
    tasks {
      id
      task
      project
      start
      due
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ tasks }) => {
  return tasks.map((task) => (
    <article key={task.id}>
      <header>
        <h2>
          <Link to={routes.taskDetails({ id: task.id })}>{task.task}</Link>
        </h2>
      </header>
      <p>{task.project}</p>
      <div>Start: {task.start}</div>
    </article>
  ))
}
