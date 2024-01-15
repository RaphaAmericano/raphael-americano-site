"use server"
import { getClient } from "@/services/graphql"
import { PageByPageIdQueryQuery, PageByPageIdQueryQueryVariables, PageByPageIdQueryDocument } from "@/graphql/operations"

export const getPage = async (pageId:number) => {
    const { client } = getClient();
    const result = await client.query<PageByPageIdQueryQuery, PageByPageIdQueryQueryVariables>(PageByPageIdQueryDocument, {
      pageId
    })
    const { data } = result
    if(data?.pageBy){
      const { pageBy } = data;
      return pageBy
    }
    return undefined
}
