import { HeaderContainer } from './styles'

import logoGithubBlog from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoGithubBlog} alt="" />
    </HeaderContainer>
  )
}
