import service from "../http.service"
import graphqlService from "./graphql.service"

interface PostItem {
  content: string
  date: string
  id: string
  guid: string
  postId: number
  slug: string
  status: string
  title: string
  uri: string
  excerpt: string
}
interface GetPost {
  post: PostItem
}

interface GetPosts {
  posts: { nodes: PostItem[]}
}


async function getPosts(){

  const pages = await graphqlService.post<any, GetPosts>("", 
  {
    query: `query GetPosts {
      posts {
        nodes {
          content
          date
          id
          guid
          postId
          slug
          status
          title
          uri
          excerpt
        }
      }
    }`
  }
  )

  return pages
}

async function getPostSlug(slug:string) {

  const post = await graphqlService.post<any, GetPost>("", 
  {
    query: `
      query post {
        post(id: "${slug}", idType: SLUG) {
          id
          content
          date
          excerpt
          guid
          slug
          status
          title
          uri
        }
      }`
    }
  )
  return post
}



export { getPosts, getPostSlug }  