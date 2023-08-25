// import { useParams } from 'react-router-dom'
import { PostContent } from './PostContent'
import { PostHeader } from './PostHeader'

import { PostContainer } from './styles'

export function Post() {
  // const { issueNumber } = useParams()

  return (
    <PostContainer>
      <PostHeader />

      <PostContent />
    </PostContainer>
  )
}
