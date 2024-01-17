import service from "./../http.service"
import graphqlService from "./graphql.service"

async function getMenus(){

  const menus = await graphqlService.post("", 
  {
    query: `query GetMenus {
      menus {
        edges {
          node {
            id
            menuId
            name
            slug
            menuItems {
              edges {
                node {
                  title
                  id
                  uri
                }
              }
            }
          }
        }
      }
    }`
  }
  )

  return menus
}

async function getMenuByName(name:string){

  const menus = await graphqlService.post("", 
  {
    query: `query GetMenu {
      menu(id: "${name}" , idType: NAME) {
        id
        name
        menuItems {
          edges {
            node {
              id
              title
              uri
              description
              databaseId
              label
            }
          }
        }
      }
    }`
  }
  )

  return menus
}



export { getMenus, getMenuByName }  