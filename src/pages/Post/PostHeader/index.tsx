import {
  FaGithub,
  FaUpRightFromSquare,
  FaComment,
  FaCalendarDay,
  FaChevronLeft,
} from 'react-icons/fa6'

import {
  PostHeaderContainer,
  PostHeaderContent,
  PostHeaderInfo,
  PostHeaderLinks,
} from './styles'
import { Link } from 'react-router-dom'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to="/">
          <FaChevronLeft />
          VOLTAR
        </Link>
        <a href="#">
          VER NO GITHUB
          <FaUpRightFromSquare />
        </a>
      </PostHeaderLinks>

      <PostHeaderContent>
        <h2>JavaScript data types and data structures</h2>

        <PostHeaderInfo>
          <span>
            <FaGithub />
            felipesanderp
          </span>

          <span>
            <FaCalendarDay />
            Há 1 dia
          </span>

          <span>
            <FaComment />5 comentários
          </span>
        </PostHeaderInfo>
      </PostHeaderContent>
    </PostHeaderContainer>
  )
}
