import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <p>
        Publicações
        <span>6 publicações</span>
      </p>
      <SearchForm />
    </HomeContainer>
  )
}
