import type AboutPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/AboutPage/AboutPage'
import type EditTaskPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/EditTaskPage/EditTaskPage'
import type FatalErrorPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/FatalErrorPage/FatalErrorPage'
import type HomePageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/HomePage/HomePage'
import type NewTaskPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/NewTaskPage/NewTaskPage'
import type NotFoundPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/NotFoundPage/NotFoundPage'
import type TaskPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/TaskPage/TaskPage'
import type TasksPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/TasksPage/TasksPage'

declare global {
  const AboutPage: typeof AboutPageType
  const EditTaskPage: typeof EditTaskPageType
  const FatalErrorPage: typeof FatalErrorPageType
  const HomePage: typeof HomePageType
  const NewTaskPage: typeof NewTaskPageType
  const NotFoundPage: typeof NotFoundPageType
  const TaskPage: typeof TaskPageType
  const TasksPage: typeof TasksPageType
}
