import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetMenusQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMenusQuery = { __typename?: 'RootQuery', menus?: { __typename?: 'RootQueryToMenuConnection', edges: Array<{ __typename?: 'RootQueryToMenuConnectionEdge', node: { __typename?: 'Menu', id: string, menuId?: number | null, name?: string | null, slug?: string | null, menuItems?: { __typename?: 'MenuToMenuItemConnection', edges: Array<{ __typename?: 'MenuToMenuItemConnectionEdge', node: { __typename?: 'MenuItem', title?: string | null, id: string, uri?: string | null } }> } | null } }> } | null };

export type GetMenuQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetMenuQuery = { __typename?: 'RootQuery', menu?: { __typename?: 'Menu', id: string, name?: string | null, menuItems?: { __typename?: 'MenuToMenuItemConnection', edges: Array<{ __typename?: 'MenuToMenuItemConnectionEdge', node: { __typename?: 'MenuItem', id: string, title?: string | null, uri?: string | null, description?: string | null, databaseId: number, label?: string | null } }> } | null } | null };

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


export const GetMenusDocument = gql`
    query GetMenus {
  menus {
    edges {
      node {
        id
        menuId
        name
        slug
        menuItems {
          edges {
            node {
              title
              id
              uri
            }
          }
        }
      }
    }
  }
}
    `;
export const GetMenuDocument = gql`
    query GetMenu($id: ID!) {
  menu(id: $id, idType: NAME) {
    id
    name
    menuItems {
      edges {
        node {
          id
          title
          uri
          description
          databaseId
          label
        }
      }
    }
  }
}
    `;
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