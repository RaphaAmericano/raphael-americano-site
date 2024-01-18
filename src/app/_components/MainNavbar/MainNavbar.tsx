import { getMenu } from "@/app/actions/get-menu";
import MainNavbarBrand from "./MainNavbarBrand";

import { Navbar, NavbarContent } from "@nextui-org/react";
import MainNavbarItem from "./MainNavbarItem";

export default async function MainNavbar() {
  const menu = await getMenu("navbarMenu")
   
  return (
    <Navbar position="static">
      <MainNavbarBrand />
      <NavbarContent justify="end">
        {menu.map(({ id, label }) => <MainNavbarItem key={id} title={label} /> )}
      </NavbarContent>
    </Navbar>
  );
}
