/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
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

interface PostHeaderProps {
  title: string
  created_at: string
  html_url: string
  user: {
    login: string
  }
  comments: number
}

export function PostHeader({
  title,
  html_url,
  created_at,
  user,
  comments,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to="/">
          <FaChevronLeft />
          VOLTAR
        </Link>
        <a target="_blank" href={html_url} rel="noreferrer">
          VER NO GITHUB
          <FaUpRightFromSquare />
        </a>
      </PostHeaderLinks>

      <PostHeaderContent>
        <h2>{title}</h2>

        <PostHeaderInfo>
          <span>
            <FaGithub />
            {user.login}
          </span>

          <span>
            <FaCalendarDay />
            Há 1 dia
          </span>

          <span>
            <FaComment />
            {comments} comentários
          </span>
        </PostHeaderInfo>
      </PostHeaderContent>
    </PostHeaderContainer>
  )
}
