import { getPosts } from "@/app/actions/get-posts";
import Link from "next/link";

export default async function Articles(){
    const posts = await getPosts()
    return <div>Confira a lista de artigos
        <ul>
            {posts.map(({ slug , title}) => (<li key={slug}><Link href={`/articles/${slug}`}>{title}</Link></li>))}
        </ul>
    </div>
}