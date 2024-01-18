"use server"
import { getMenuByName } from "@/services/graphql/menu"
import MainNavbarItem from "../_components/MainNavbar/MainNavbarItem"
export const getMenu = async (name:string) => {
  const result = await getMenuByName(name)
  const { menu:{ menuItems: { edges }} } = result;
  // return edges.map(({ node }) => node )
  return edges.map(({ node }) => node )
}
