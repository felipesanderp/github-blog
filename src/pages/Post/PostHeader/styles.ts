import { styled } from 'styled-components'

export const PostHeaderContainer = styled.header`
  width: 100%;
  max-width: 864px;
  height: 10.5rem;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  background: ${(props) => props.theme['base-profile']};

  margin-top: -8rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
export const PostHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};

    font-size: 0.75rem;
    font-weight: bold;

    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }

    svg {
      height: 12px;
      width: 12px;
    }
  }
`

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
`

export const PostHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
