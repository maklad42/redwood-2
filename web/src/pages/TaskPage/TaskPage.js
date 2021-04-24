import TaskListLayout from 'src/layouts/TaskListLayout'
import TaskCell from 'src/components/TaskCell'

const TaskPage = ({ id }) => {
  return (
    <TaskListLayout>
      <TaskCell id={id} />
    </TaskListLayout>
  )
}

export default TaskPage
