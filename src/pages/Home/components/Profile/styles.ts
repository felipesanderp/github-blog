import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  height: 13rem;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  background: ${(props) => props.theme['base-profile']};

  margin-top: -8rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  > img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    line-height: 1.5rem;
  }
`
export const ProfileTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    svg {
      width: 12px;
      height: 12px;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const UserInfoIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
