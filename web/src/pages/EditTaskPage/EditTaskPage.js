import TaskListLayout from 'src/layouts/TaskListLayout'
import EditTaskCell from 'src/components/EditTaskCell'

const EditTaskPage = ({ id }) => {
  return (
    <TaskListLayout>
      <EditTaskCell id={id} />
    </TaskListLayout>
  )
}

export default EditTaskPage
