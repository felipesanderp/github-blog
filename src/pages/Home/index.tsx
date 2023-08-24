import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { HomeContainer, PostCards } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <p>
        Publicações
        <span>6 publicações</span>
      </p>
      <SearchForm />

      <PostCards>
        <PostCard />
        <PostCard disabled />
        <PostCard />
      </PostCards>
    </HomeContainer>
  )
}
