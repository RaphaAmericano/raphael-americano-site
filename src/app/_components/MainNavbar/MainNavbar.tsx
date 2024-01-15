import { getPages } from "@/app/actions/get-pages";
import Link from "next/link";

export default async function MainNavbar() {
  const pages = await getPages();
  return (
    <nav className="bg-gray-800">
      {pages.map(({ id, slug, title }) => (<Link as="a" key={Math.random()} href={`/article/${slug}`}>{title}</Link>))}
    </nav>
  );
}
