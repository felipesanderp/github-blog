import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 864px;
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

  h3 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
  }

  span {
    line-height: 1.5rem;
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
  }
`
