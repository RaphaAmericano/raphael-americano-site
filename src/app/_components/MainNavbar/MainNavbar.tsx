import { getMenu } from "@/app/actions/get-menu";
import { Navbar,  NavbarContent } from "@nextui-org/react";
import MainNavbarItem from "./MainNavbarItem";
import MainNavbarBrand from "./MainNavbarBrand";
import { headers } from "next/headers";

export default async function MainNavbar() {
  const next_url = headers().get("next-url")
  const menu = await getMenu("navbarMenu")
  const menuList = (next_url !== "/") ? menu.filter(({ path }) => !(path.split("")[0] === "#") ) : menu;
  return (
    <Navbar position="static">
      
      <NavbarContent>
        <MainNavbarBrand />
      </NavbarContent>
      <NavbarContent justify="end">
        {menuList.map(({ id, label, path  }) => <MainNavbarItem key={id} title={label} path={path} /> )}
      </NavbarContent>
    </Navbar>
  );
}
