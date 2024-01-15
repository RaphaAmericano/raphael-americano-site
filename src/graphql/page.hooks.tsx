import * as Types from '../../types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function usePagesQuery(options?: Omit<Urql.UseQueryArgs<Operations.PagesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.PagesQuery, Operations.PagesQueryVariables>({ query: Operations.PagesDocument, ...options });
};

export function usePageQuery(options: Omit<Urql.UseQueryArgs<Operations.PageQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.PageQuery, Operations.PageQueryVariables>({ query: Operations.PageDocument, ...options });
};