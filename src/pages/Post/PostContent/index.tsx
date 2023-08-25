import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostContentContainer } from './styles'

interface PostContentProps {
  body: string
}

export function PostContent({ body }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </PostContentContainer>
  )
}
