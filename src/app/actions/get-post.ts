"use server"
import { getPostSlug } from "@/services/graphql/post"
export const getPost = async (slug:string) => {
    const result = await getPostSlug(slug)
    const { post } = result;
    return post
}
