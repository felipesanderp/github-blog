import ReactMarkdown from 'react-markdown'

import { PostContentContainer } from './styles'

export function PostContent() {
  return (
    <PostContentContainer>
      <ReactMarkdown>teste</ReactMarkdown>
    </PostContentContainer>
  )
}
