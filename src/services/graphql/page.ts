import service from "./../http.service"
import graphqlService from "./graphql.service"

interface PageItem {
  content: string;
  date: string;
  dateGmt: string;
  id: string;
  databaseId:number;
  guid: string;
  slug:string;
  status: string;
  title: string;
  uri: string;
}

interface GetPage {
  page: PageItem
}

async function getPages(){

  const pages = await graphqlService.post("", 
  {
    query: `query pages {
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
      }`
  }
  )

  return pages
}

async function getPageBySlug(slug:string) {

  const page = await graphqlService.post<any, GetPage>("", 
  {
    query: `
      query page {
        page(id: "${slug}", idType: URI) {
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
      }`
  }
  )
  return page
}



export { getPages, getPageBySlug }  