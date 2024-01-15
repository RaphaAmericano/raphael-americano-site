// import { useRouter } from "next/navigation";
import HTMLParser from "@/components/HTMLParser";

import { getPage } from "../actions/get-page"

export default async function Page({ params }: { params: { pageId:string }}){
    // const router = useRouter()
    const { pageId } = params
    const data = await getPage(Number(pageId));
    console.log(data)
    if(data?.content && data?.slug){
        const { title, content, slug } = data
        return <div>
            {slug}
            <h2>{title}</h2>
            {content}
        </div>
    }
}