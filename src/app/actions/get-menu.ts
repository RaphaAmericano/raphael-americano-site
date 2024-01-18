"use server"
import { getMenuByName } from "@/services/graphql/menu"

export const getMenu = async (name:string) => {
  const result = await getMenuByName(name)
  const { menu:{ menuItems: { edges }} } = result;
  return edges.map(({ node }) => node )
}
