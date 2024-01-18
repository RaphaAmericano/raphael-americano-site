
import { ReactNode } from "react"
import {
  NavbarItem,
  Link as ComponentLink,
} from "@nextui-org/react";

const MainNavbarItem = ({ title, path, icon } : { title: string, path: string,  icon?:ReactNode } ) => {
  return (
      <NavbarItem>
        <ComponentLink color="foreground" href={`${path}`}>
          {title}
        </ComponentLink>
      </NavbarItem>
  )
}
export default MainNavbarItem