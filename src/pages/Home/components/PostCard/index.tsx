import ReactMarkdown from 'react-markdown'

import { PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  number: number
  title: string
  state: 'open' | 'closed'
  body: string
  created_at: string
}

export function PostCard({ title, body, number, state }: PostCardProps) {
  return (
    <PostCardContainer to={`/post/${number}`} state={state}>
      <PostCardHeader>
        <h3>{title}</h3>
        <span>Há 1 dia</span>
      </PostCardHeader>

      <p>
        <ReactMarkdown>{body}</ReactMarkdown>
      </p>
    </PostCardContainer>
  )
}
