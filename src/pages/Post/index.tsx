// import { useParams } from 'react-router-dom'
import { PostHeader } from './PostHeader'

import { PostContainer } from './styles'

export function Post() {
  // const { issueNumber } = useParams()

  return (
    <PostContainer>
      <PostHeader />
    </PostContainer>
  )
}
