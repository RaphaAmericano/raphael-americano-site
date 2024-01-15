"use server"

import { Page } from "@/graphql/types.gql"
// import {  } from "@/graphql/queries"
import { getClient } from "@/services/graphql"
import { gql } from "@apollo/client"


const query = gql`
    query pagesQuery {
      page(uri: String, idType: URI ) {
        id
        content
        date
        dateGmt
        guid
        pageId
        slug
        status
        title
        uri
      }
    }
  `

export const getPage = async (slug:string) => {

    // const client = getClient();
    // const { data } = await client.query<{pages: { edges: Page } }>({ query, context:{ slug } })
    // console.log(data)
    // const { pages: { edges } } = data;
    // return edges
}
