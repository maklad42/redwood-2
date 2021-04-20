import { Router, Route, Set } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/tasks/new" page={NewTaskPage} name="newTask" />
      <Route path="/tasks/{id:Int}/edit" page={EditTaskPage} name="editTask" />
      <Route path="/tasks/{id:Int}" page={TaskPage} name="task" />
      <Route path="/tasks" page={TasksPage} name="tasks" />
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
