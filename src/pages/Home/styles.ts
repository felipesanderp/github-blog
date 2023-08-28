import { styled } from 'styled-components'

export const HomeContainer = styled.section`
  margin-top: 4rem;

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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`
