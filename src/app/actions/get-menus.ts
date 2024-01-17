"use server"
import { GetMenusQuery, GetMenusQueryVariables, GetMenusDocument } from "@/graphql/operations"
import { getClient } from "@/services/graphql"

export const getMenus = async () => {
  const { client } = getClient()
  const result = await client.query<GetMenusQuery, GetMenusQueryVariables>(GetMenusDocument, {})
  console.log(result)
  const { data } = result
  // console.log(data)
  if(data?.menus){
    const { menus: { edges }} = data;
    return edges.map(({ node }) => node )
  }
  return null
}
