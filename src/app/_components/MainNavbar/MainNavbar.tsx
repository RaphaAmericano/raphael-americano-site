"use client"
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import MainNavbarProfile from "./MainNavbarProfile";
import MainNavbarMobile from "./MainNavbarMobile";
import MainNavbarItems from "./MainNavbarItems";

// <nav className="bg-gray-800">
//   {pages.map(({ id, databaseId, slug, title }) => (<Link key={id} href={`/${databaseId}`}>{title}</Link>))}
// </nav>

export default function MainNavbar() {
  
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (<>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <MainNavbarMobile open={open} />
              <MainNavbarItems />
            </div>
        </div>
      </>)}
    </Disclosure>
  );
}
