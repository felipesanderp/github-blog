import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 4.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: bold;

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.75rem;
      font-weight: normal;
    }
  }
`
export const PostCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`
