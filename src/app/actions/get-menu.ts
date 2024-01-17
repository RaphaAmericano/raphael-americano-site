"use server"
import { GetMenuQuery, GetMenuQueryVariables, GetMenuDocument } from "@/graphql/operations"
import { getClient } from "@/services/graphql"

type MenuItem = {
  id: string,
  title: string | null,
  uri: string,
  description: string | null,
  databaseId: number,
  label: string,
}

export const getMenu = async (id:string) => {
  const { client } = getClient()
  const result = await client.query<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, { id })
  const { data } = result
  if(data?.menu){
    const { menu } = data
    return menu.menuItems?.edges.map(({ node }) => {
     const {__typename, ...props } = node 
     return props
    } ) as MenuItem[]
  }
  return []
}
