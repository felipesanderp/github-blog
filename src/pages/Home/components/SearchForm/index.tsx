import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'

import { SearchFormContainer } from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

export function SearchForm() {
  const fetchIssues = useContextSelector(BlogContext, (context) => {
    return context.fetchIssues
  })

  const { register, handleSubmit } = useForm<
    zod.infer<typeof searchFormSchema>
  >({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: zod.infer<typeof searchFormSchema>) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
