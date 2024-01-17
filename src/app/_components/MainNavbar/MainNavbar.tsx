import MainNavbarBrand from "./MainNavbarBrand";
import MainNavbarItems from "./MainNavbarItems";
import { Navbar } from "@nextui-org/react";

export default async function MainNavbar() {
  return (
    <Navbar position="static">
      <MainNavbarBrand />
      <MainNavbarItems />
    </Navbar>
  );
}
