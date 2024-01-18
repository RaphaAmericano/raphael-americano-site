import { postQuery } from "./graphql.service"

interface SettingsItem {
    generalSettingsTitle: string;
    generalSettingsDescription: string;
  }
  
  interface GetSettings {
    allSettings: SettingsItem
  }

async function getSettings(){
    const settings = await postQuery<GetSettings>(`
        query settings {
            allSettings {
            generalSettingsTitle
            generalSettingsDescription
            }
        }
    `)
    return settings
}

export { getSettings }
