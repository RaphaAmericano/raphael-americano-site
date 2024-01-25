"use server"

import { getPosts as get } from "@/services/graphql/post";

export const getPosts = async () => {
    const result = await get()
    const { posts: { nodes } } = result;
    return nodes
}
