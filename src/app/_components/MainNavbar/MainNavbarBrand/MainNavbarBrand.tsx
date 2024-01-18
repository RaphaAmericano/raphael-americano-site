import { getSettings } from "@/app/actions/get-settings";
import { NavbarBrand } from "@nextui-org/react";

async function MainNavbarBrand() {
  const settings = await getSettings()
  const { generalSettingsTitle } = settings

  return (
    <NavbarBrand>
        {generalSettingsTitle}<p className="font-bold text-inherit">{generalSettingsTitle}</p>
    </NavbarBrand>
  )
}

export default MainNavbarBrand