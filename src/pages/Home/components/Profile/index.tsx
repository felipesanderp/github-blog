import { useContextSelector } from 'use-context-selector'

import {
  FaBuilding,
  FaGithub,
  FaUserGroup,
  FaUpRightFromSquare,
} from 'react-icons/fa6'

import {
  ProfileContainer,
  UserInfo,
  ProfileTitle,
  UserInfoIcons,
} from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'

export function Profile() {
  const user = useContextSelector(BlogContext, (context) => {
    return context.user
  })

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="Felipe Sander" />

      <UserInfo>
        <ProfileTitle>
          <h3>{user?.name}</h3>
          <a
            target="_blank"
            rel="stylesheet noreferrer"
            href={`https://github.com/${user?.login}`}
          >
            GITHUB
            <FaUpRightFromSquare />
          </a>
        </ProfileTitle>
        <span>{user?.bio}</span>

        <UserInfoIcons>
          <span>
            <FaGithub />
            {user?.login}
          </span>

          <span>
            <FaBuilding />
            {user?.company}
          </span>

          <span>
            <FaUserGroup />
            {user?.followers} seguidores
          </span>
        </UserInfoIcons>
      </UserInfo>
    </ProfileContainer>
  )
}
