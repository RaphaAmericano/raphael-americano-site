"use client"
import { Disclosure } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
const MainNavbarMobile = ({ open }: { open: boolean }) => {
    return (<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      {open ? (
        <FaBars className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <CgClose className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  </div>)
}
export default MainNavbarMobile;