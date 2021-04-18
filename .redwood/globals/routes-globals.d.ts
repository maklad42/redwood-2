import type FatalErrorPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/FatalErrorPage/FatalErrorPage'
import type NotFoundPageType from '/Applications/MAMP/htdocs/sandbox/react/rw-blog/web/src/pages/NotFoundPage/NotFoundPage'

declare global {
  const FatalErrorPage: typeof FatalErrorPageType
  const NotFoundPage: typeof NotFoundPageType
}
