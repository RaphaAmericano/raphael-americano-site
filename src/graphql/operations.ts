import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'RootQuery', pages?: { __typename?: 'RootQueryToPageConnection', edges: Array<{ __typename?: 'RootQueryToPageConnectionEdge', node: { __typename?: 'Page', content?: string | null, date?: string | null, id: string, databaseId: number, link?: string | null, slug?: string | null, title?: string | null, uri?: string | null } }> } | null };

export type PageByPageIdQueryQueryVariables = Types.Exact<{
  pageId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type PageByPageIdQueryQuery = { __typename?: 'RootQuery', pageBy?: { __typename?: 'Page', id: string, pageId: number, databaseId: number, slug?: string | null, title?: string | null, content?: string | null, status?: string | null, uri?: string | null } | null };

export type PageQueryVariables = Types.Exact<{
  slug: Types.Scalars['ID']['input'];
}>;


export type PageQuery = { __typename?: 'RootQuery', page?: { __typename?: 'Page', content?: string | null, date?: string | null, dateGmt?: string | null, id: string, databaseId: number, guid?: string | null, slug?: string | null, status?: string | null, title?: string | null, uri?: string | null } | null };


export const PagesDocument = gql`
    query pages {
  pages {
    edges {
      node {
        content
        date
        id
        databaseId
        link
        slug
        title
        uri
      }
    }
  }
}
    `;
export const PageByPageIdQueryDocument = gql`
    query PageByPageIdQuery($pageId: Int) {
  pageBy(pageId: $pageId) {
    id
    pageId
    databaseId
    slug
    title
    content
    status
    uri
  }
}
    `;
export const PageDocument = gql`
    query page($slug: ID!) {
  page(id: $slug, idType: URI) {
    content
    date
    dateGmt
    id
    databaseId
    guid
    slug
    status
    title
    uri
  }
}
    `;