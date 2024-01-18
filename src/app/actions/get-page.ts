"use server"
import { getPageBySlug } from "@/services/graphql/page"
export const getPage = async (slug:string) => {
    const result = await getPageBySlug(slug)
    const { page } = result;
    return page
}
