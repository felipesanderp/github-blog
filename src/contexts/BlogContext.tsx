import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface User {
  id: number
  name: string
  login: string
  bio: string
  avatar_url: string
  company: string | null
  followers: number
}

interface BlogContextType {
  user: User | undefined
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [githubUser, setGithubUser] = useState<User>()

  const fetchUserInfo = useCallback(async () => {
    const response = await api.get('users/felipesanderp')

    setGithubUser(response.data)
  }, [])

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  return (
    <BlogContext.Provider value={{ user: githubUser }}>
      {children}
    </BlogContext.Provider>
  )
}
