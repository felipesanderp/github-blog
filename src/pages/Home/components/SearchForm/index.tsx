import { useForm, Controller } from 'react-hook-form'
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

  const { control, handleSubmit } = useForm<zod.infer<typeof searchFormSchema>>(
    {
      resolver: zodResolver(searchFormSchema),
    },
  )

  async function handleSearchIssues(data: zod.infer<typeof searchFormSchema>) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <Controller
        defaultValue=""
        control={control}
        name="query"
        render={({ field }) => {
          return <input type="text" placeholder="Buscar conteúdo" {...field} />
        }}
      />
    </SearchFormContainer>
  )
}
