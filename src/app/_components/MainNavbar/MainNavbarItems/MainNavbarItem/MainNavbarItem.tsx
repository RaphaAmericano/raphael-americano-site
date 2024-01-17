
import { ReactNode } from "react"
import {
  NavbarItem,
  Link as ComponentLink,
} from "@nextui-org/react";

const MainNavbarItem = ({ title, icon } : { title: string, icon?:ReactNode } ) => {
  return (
    <NavbarItem>
        <ComponentLink color="foreground" href="#">
          {title}
        </ComponentLink>
      </NavbarItem>
  )
}
export default MainNavbarItem