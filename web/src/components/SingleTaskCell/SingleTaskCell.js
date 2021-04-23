export const QUERY = gql`
  query SingleTaskQuery {
    singleTask {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ singleTask }) => {
  return JSON.stringify(singleTask)
}
