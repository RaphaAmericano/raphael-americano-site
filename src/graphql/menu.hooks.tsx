import * as Types from '../../types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useGetMenusQuery(options?: Omit<Urql.UseQueryArgs<Operations.GetMenusQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetMenusQuery, Operations.GetMenusQueryVariables>({ query: Operations.GetMenusDocument, ...options });
};

export function useGetMenuQuery(options: Omit<Urql.UseQueryArgs<Operations.GetMenuQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetMenuQuery, Operations.GetMenuQueryVariables>({ query: Operations.GetMenuDocument, ...options });
};