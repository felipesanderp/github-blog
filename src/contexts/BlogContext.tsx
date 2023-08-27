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

interface Issue {
  total_count: number
  items: {
    id: number
    number: number
    title: string
    state: 'open' | 'closed'
    body: string
    created_at: string
  }[]
}

interface BlogContextType {
  user: User | undefined
  issues: Issue | undefined
  fetchIssues: (query?: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<User>()
  const [issues, setIssues] = useState<Issue>()

  const fetchUserInfo = useCallback(async () => {
    const response = await api.get('users/felipesanderp')

    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  const fetchIssues = useCallback(
    async (query: string = '') => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${user?.login}/github-blog`,
        )

        setIssues(response.data)
      } catch (error) {
        console.log(error)
      }
    },
    [user?.login],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <BlogContext.Provider value={{ user, issues, fetchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
