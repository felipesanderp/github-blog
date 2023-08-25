import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../lib/axios'

import { PostContent } from './PostContent'
import { PostHeader } from './PostHeader'

import { PostContainer } from './styles'

interface Issue {
  title: string
  body: string
  created_at: string
  html_url: string
  user: {
    login: string
  }
  comments: number
}

export function Post() {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<Issue>()

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `repos/felipesanderp/github-blog/issues/${issueNumber}`,
    )

    setIssue(response.data)
  }, [issueNumber])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <PostContainer>
      {issue && (
        <PostHeader
          {...{
            title: issue?.title,
            html_url: issue?.html_url,
            created_at: issue?.created_at,
            comments: issue?.comments,
            user: issue?.user,
          }}
        />
      )}

      {issue && <PostContent body={issue.body} />}
    </PostContainer>
  )
}
