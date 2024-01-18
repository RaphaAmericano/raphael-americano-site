"use server"
import { getSettings as get } from "@/services/graphql/settings"
export const getSettings = async () => {
    const result = await get();
    return result.allSettings
}