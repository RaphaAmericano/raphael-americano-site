import { getMenus } from "@/services/graphql"

const handler = async () => {
    const result = await getMenus()
    console.log(result)
    return result
}


export { handler as GET }
