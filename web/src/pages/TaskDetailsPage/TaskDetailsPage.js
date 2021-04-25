import SingleTaskCell from 'src/components/SingleTaskCell'
import { Link, routes } from '@redwoodjs/router'

const TaskDetailsPage = ({ id }) => {
  return <SingleTaskCell id={id} />
}

export default TaskDetailsPage
