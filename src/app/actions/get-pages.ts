"use server"
import { getClient } from "@/services/graphql"
import { PagesQuery, PagesQueryVariables, PagesDocument } from "@/graphql/operations"

export const getPages = async () => {
    const { client } = getClient();
    const result = await client.query<PagesQuery, PagesQueryVariables>(PagesDocument, {})
    const { data } = result
    if(data?.pages){
        const { pages: { edges } } = data;
        return edges.map(({ node }) => node )
    }
    return null
}
