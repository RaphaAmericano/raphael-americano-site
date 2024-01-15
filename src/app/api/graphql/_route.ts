import { getClient } from "@/services/graphql"
import { gql } from "@apollo/client"

const query = gql`
    query postQuery {
        posts {
            edges {
            node {
                date
                authorId
                id
                slug
                excerpt
                content
            }
            }
        }
    }
`

const handler = async () => {
    const { data } = await getClient().query({ query })
    console.log(data)
    return data
}


export { handler as GET }
