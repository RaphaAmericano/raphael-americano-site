import { getMenu } from "@/app/actions/get-menu";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import MainNavbarItem from "./MainNavbarItem";
import { getSettings } from "@/app/actions/get-settings";
import MainNavbarBrand from "./MainNavbarBrand";
import Link from "next/link";

export default async function MainNavbar() {
  const menu = await getMenu("navbarMenu")
  const { generalSettingsTitle } = await getSettings()
  return (
    <Navbar position="static">
      <NavbarBrand>
       <p className="font-bold text-inherit">
        <Link href={"/"}>{generalSettingsTitle}</Link>
      </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        {menu.map(({ id, label, path  }) => <MainNavbarItem key={id} title={label} path={path} /> )}
      </NavbarContent>
    </Navbar>
  );
}
