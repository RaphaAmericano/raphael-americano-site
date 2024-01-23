import { getMenu } from "@/app/actions/get-menu";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import MainNavbarItem from "./MainNavbarItem";
import { getSettings } from "@/app/actions/get-settings";
import MainNavbarBrand from "./MainNavbarBrand";
import { headers } from "next/headers";

export default async function MainNavbar() {
  const next_url = headers().get("next-url")
  console.log(next_url)
  const menu = await getMenu("navbarMenu")
  const { generalSettingsTitle } = await getSettings()
  const menuList = (next_url !== "/") ? menu.filter(({ path }) => !(path.split("")[0] === "#") ) : menu;
  return (
    <Navbar position="static">
      <NavbarBrand>
       <p className="font-bold text-inherit">{generalSettingsTitle}</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        {menuList.map(({ id, label, path  }) => <MainNavbarItem key={id} title={label} path={path} /> )}
      </NavbarContent>
    </Navbar>
  );
}
