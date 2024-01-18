import graphqlService from "./graphql.service"

interface MenuItemNode {
  node: {
    id:string;
    title: string | null;
    uri: string;
    path: string;
    description: string | null;
    databaseId: number;
    label: string;
  }
}

interface GetMenu {
  menu: {
    id:string;
    name: string;
    menuItems:{
      edges: MenuItemNode[]
    }
  }
}

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

async function getMenuByName(name:string) {

  const menus = await graphqlService.post<any, GetMenu>("", 
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
              path
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