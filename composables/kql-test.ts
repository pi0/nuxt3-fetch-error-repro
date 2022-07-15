import { hash } from 'ohash'
import { useFetch } from '#imports'

export function useKqlTest(query: any) {
  return useFetch('http://kirby-headless-starter.test/api/kql', {
    method: 'POST',
    key: hash(query),
    body: query,
    headers: {
      Authorization: 'Bearer test',
    },
  })
}
