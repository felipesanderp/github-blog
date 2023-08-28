/* eslint-disable camelcase */
import { PostCardContainer, PostCardHeader } from './styles'
import { relativeDateFormatter } from '../../../../utils/dataFormatter'
import { Post } from '../../../../contexts/BlogContext'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  console.log(post)

  return (
    <PostCardContainer
      to={`/post/${post.number}`}
      labelName={post.labels[0].name}
    >
      <PostCardHeader>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </PostCardHeader>

      <p>{post.body}</p>
    </PostCardContainer>
  )
}
