import ReactMarkdown from 'react-markdown'

import { PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  title: string
  body: string
  state: 'open' | 'closed'
}

export function PostCard({ title, body, state }: PostCardProps) {
  return (
    <PostCardContainer href="https://github.com/felipesanderp" state={state}>
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
