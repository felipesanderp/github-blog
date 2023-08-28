import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

interface PostContainerProps {
  state: 'open' | 'closed'
}

export const PostCardContainer = styled(Link)<PostContainerProps>`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  color: inherit;

  text-decoration: none;

  border: transparent;
  transition: 0.2s;

  > p {
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
export const PostCardHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;

  > strong {
    flex: 1;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  > span {
    width: max-content;
    font-size: 0.75rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-span']};
  }
`
