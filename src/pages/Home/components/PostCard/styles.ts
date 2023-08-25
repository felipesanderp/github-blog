import { css, styled } from 'styled-components'

interface PostContainerProps {
  state: 'open' | 'closed'
}

export const PostCardContainer = styled.a<PostContainerProps>`
  height: 15rem;
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  color: inherit;

  text-decoration: none;

  border: transparent;
  transition: 0.2s;

  > p {
    margin-top: 1.25rem;

    max-width: 320px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${(props) =>
    props.state === 'closed'
      ? css`
          opacity: 0.75;
        `
      : css`
          &:hover {
            scale: 1.05;
            border: 1px solid ${(props) => props.theme['base-label']};
            text-decoration: underline;
          }
        `}
`
export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  > h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};

    max-width: 283px;
  }

  > span {
    font-size: 0.75rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-span']};
    width: 100%;
    max-width: 55px;
  }
`
