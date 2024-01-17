"use server"

import { getMenuByName } from "@/services/graphql/menu"

type MenuItem = {
  id: string,
  title: string | null,
  uri: string,
  description: string | null,
  databaseId: number,
  label: string,
}

export const getMenu = async (name:string) => {
  const result = await getMenuByName(name)
  console.log(result)

  // const result = await client.query<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, { id })
  // const { data } = result
  // if(data?.menu){
  //   const { menu } = data
  //   return menu.menuItems?.edges.map(({ node }) => {
  //    const {__typename, ...props } = node 
  //    return props
  //   } ) as MenuItem[]
  // }
  return []
}
