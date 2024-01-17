import { NavbarContent } from "@nextui-org/react";
import { getMenu } from "@/app/actions/get-menu";
import MainNavbarItem from "./MainNavbarItem";

const MainNavbarItems = async () => {    
  const menu = await getMenu("navbarMenu")
  return ( <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {menu.map(({ id, label }) => <MainNavbarItem key={id} title={label} /> )}
          </NavbarContent> 
          )    
}
export default MainNavbarItems