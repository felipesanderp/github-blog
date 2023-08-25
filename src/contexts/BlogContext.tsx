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
  const [githubUser, setGithubUser] = useState<User>()
  const [issues, setIssues] = useState<Issue>()

  const fetchUserInfo = useCallback(async () => {
    const response = await api.get('users/felipesanderp')

    setGithubUser(response.data)
  }, [])

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  const fetchIssues = useCallback(
    async (query?: string) => {
      const response = await api.get(
        `search/issues?q=${
          query !== undefined ? query : ''
        }repo:${githubUser?.login}/github-blog`,
      )

      setIssues(response.data)
    },
    [githubUser?.login],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <BlogContext.Provider value={{ user: githubUser, issues, fetchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
