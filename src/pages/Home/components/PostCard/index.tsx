/* eslint-disable camelcase */
import { PostCardContainer, PostCardHeader } from './styles'
import { relativeDateFormatter } from '../../../../utils/dataFormatter'

interface PostCardProps {
  number: number
  title: string
  state: 'open' | 'closed'
  body: string
  created_at: string
}

export function PostCard({
  title,
  body,
  number,
  state,
  created_at,
}: PostCardProps) {
  const formattedDate = relativeDateFormatter(created_at)

  return (
    <PostCardContainer to={`/post/${number}`} state={state}>
      <PostCardHeader>
        <h3>{title}</h3>
        <span>{formattedDate}</span>
      </PostCardHeader>

      <p>{body}</p>
    </PostCardContainer>
  )
}
