import { getSettings } from "@/app/actions/get-settings";
import { NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";

async function MainNavbarBrand() {
  const settings = await getSettings()
  const { generalSettingsTitle } = settings

  return  <NavbarBrand as={"div"}>
                  <Link className="font-bold text-inherit" href="/">{generalSettingsTitle}</Link>
              </NavbarBrand>
          
  
}

export default MainNavbarBrand