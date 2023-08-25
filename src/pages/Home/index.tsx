import { useContextSelector } from 'use-context-selector'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { HomeContainer, PostCards } from './styles'
import { BlogContext } from '../../contexts/BlogContext'

export function Home() {
  const issues = useContextSelector(BlogContext, (context) => {
    return context.issues
  })

  return (
    <HomeContainer>
      <Profile />

      <p>
        Publicações
        <span>{issues?.total_count} publicações</span>
      </p>
      <SearchForm />

      <PostCards>
        {issues?.items.map((issue) => <PostCard key={issue.id} {...issue} />)}
      </PostCards>
    </HomeContainer>
  )
}
