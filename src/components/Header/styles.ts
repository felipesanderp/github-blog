import styled from 'styled-components'

import headerCover from '../../assets/header-cover.png'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 18.5rem;
  background-image: url(${headerCover});
  background-size: cover;
`
