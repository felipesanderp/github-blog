import { useCallback, useEffect, useState } from 'react'

import {
  FaBuilding,
  FaGithub,
  FaUserGroup,
  FaUpRightFromSquare,
} from 'react-icons/fa6'

import { api } from '../../../../lib/axios'

import {
  ProfileContainer,
  UserInfo,
  ProfileTitle,
  UserInfoIcons,
} from './styles'

interface User {
  id: number
  name: string
  login: string
  bio: string
  avatar_url: string
  company: string | null
  followers: number
}

export function Profile() {
  const [githubUser, setGithubUser] = useState<User>()

  const fetchUserInfo = useCallback(async () => {
    const response = await api.get('users/felipesanderp')

    setGithubUser(response.data)
  }, [])

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  return (
    <ProfileContainer>
      <img src={githubUser?.avatar_url} alt="Felipe Sander" />

      <UserInfo>
        <ProfileTitle>
          <h3>{githubUser?.name}</h3>
          <a
            target="_blank"
            rel="stylesheet noreferrer"
            href={`https://github.com/${githubUser?.login}`}
          >
            GITHUB
            <FaUpRightFromSquare />
          </a>
        </ProfileTitle>
        <span>{githubUser?.bio}</span>

        <UserInfoIcons>
          <span>
            <FaGithub />
            {githubUser?.login}
          </span>

          <span>
            <FaBuilding />
            {githubUser?.company}
          </span>

          <span>
            <FaUserGroup />
            {githubUser?.followers} seguidores
          </span>
        </UserInfoIcons>
      </UserInfo>
    </ProfileContainer>
  )
}
