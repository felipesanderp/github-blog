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

const username = import.meta.env.VITE_GITHUB_USERNAME

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
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(false)

  const fetchUserInfo = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`users/${username}`)

      setUser(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  return (
    <ProfileContainer>
      {isLoading ? (
        <h1>Carregando</h1>
      ) : (
        <>
          <img src={user.avatar_url} alt="Felipe Sander" />

          <UserInfo>
            <ProfileTitle>
              <h3>{user?.name}</h3>
              <a
                target="_blank"
                rel="stylesheet noreferrer"
                href={`https://github.com/${user.login}`}
              >
                GITHUB
                <FaUpRightFromSquare />
              </a>
            </ProfileTitle>
            <span>{user?.bio}</span>

            <UserInfoIcons>
              <span>
                <FaGithub />
                {user.login}
              </span>

              <span>
                <FaBuilding />
                {user?.company}
              </span>

              <span>
                <FaUserGroup />
                {user.followers} seguidores
              </span>
            </UserInfoIcons>
          </UserInfo>
        </>
      )}
    </ProfileContainer>
  )
}
