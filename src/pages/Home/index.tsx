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
        <span>{issues?.length} publicações</span>
      </p>
      <SearchForm />

      <PostCards>
        {issues?.map((issue) => <PostCard key={issue.number} {...issue} />)}
      </PostCards>
    </HomeContainer>
  )
}
