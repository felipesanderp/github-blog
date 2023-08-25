import { useParams } from 'react-router-dom'

export function Post() {
  const { issueNumber } = useParams()

  return <h1>{issueNumber}</h1>
}
