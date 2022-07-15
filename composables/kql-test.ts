import { hash } from 'ohash'
import type { AsyncData } from 'nuxt/app'
import { useFetch } from '#imports'
import { apiRoute } from '#build/nuxt-kql/options'
import type { KirbyQueryResponse } from '#nuxt-kql'

export function useKqlTest(query: any) {
  return useFetch(apiRoute, {
    key: hash(query),
    method: 'POST',
    body: { query: query },
  }) as AsyncData<KirbyQueryResponse, true | Error>
}
