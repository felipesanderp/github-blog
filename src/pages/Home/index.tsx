import { useContextSelector } from 'use-context-selector'

import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { HomeContainer, PostCards } from './styles'

import { BlogContext } from '../../contexts/BlogContext'

export function Home() {
  const { posts, isLoading } = useContextSelector(BlogContext, (context) => {
    return {
      posts: context.posts,
      isLoading: context.isLoading,
    }
  })

  return (
    <HomeContainer>
      <Profile />

      <p>
        Publicações
        <span>{posts?.length} publicações</span>
      </p>
      <SearchForm />

      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <PostCards>
          {posts.map((post) => (
            <PostCard key={post.number} post={post} />
          ))}
        </PostCards>
      )}
    </HomeContainer>
  )
}
