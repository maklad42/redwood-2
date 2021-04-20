import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const TasksLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.tasks()} className="rw-link">
            Tasks
          </Link>
        </h1>
        <Link to={routes.newTask()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Task
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default TasksLayout
