import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface Post {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
  labels: [
    {
      name: 'Published' | 'Closed'
    },
  ]
}

interface BlogContextType {
  posts: Post[]
  isLoading: boolean
  fetchIssues: (query?: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
  children: ReactNode
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchIssues = useCallback(async (query?: string) => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${
          query !== undefined ? query : ''
        }%20repo:${username}/github-blog`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <BlogContext.Provider value={{ posts, isLoading, fetchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
