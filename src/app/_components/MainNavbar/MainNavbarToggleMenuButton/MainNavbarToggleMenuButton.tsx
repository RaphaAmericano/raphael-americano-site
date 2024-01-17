import { Menu } from '@headlessui/react'
import { FaChevronCircleDown } from "react-icons/fa";

const MainNavbarToggleMenuButton = () => {
  return (
    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Options
            <FaChevronCircleDown
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
  )
}

export default MainNavbarToggleMenuButton