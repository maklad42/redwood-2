import type AboutPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/AboutPage/AboutPage'
import type FatalErrorPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/FatalErrorPage/FatalErrorPage'
import type HomePageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/HomePage/HomePage'
import type NotFoundPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/NotFoundPage/NotFoundPage'

declare global {
  const AboutPage: typeof AboutPageType
  const FatalErrorPage: typeof FatalErrorPageType
  const HomePage: typeof HomePageType
  const NotFoundPage: typeof NotFoundPageType
}
