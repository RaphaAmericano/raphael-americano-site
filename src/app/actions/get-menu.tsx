"use server"

import Link from "next/link"
import clsx from "clsx"
import { getPages } from "./get-pages"

export const getMenu = async () => {
    const pages = await getPages()
    const current = false;
    return Array.isArray(pages) ? pages.map(({ databaseId, title, id }) => (
        <Link
          key={id}
          href={`${databaseId}`}
          className={clsx(
            current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium'
          )}
          aria-current={current ? 'page' : undefined}
        >
          {title}
        </Link> )) : null 
}
