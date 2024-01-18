
import HTMLParser from "@/components/HTMLParser";
import { getPage } from "../actions/get-page"

export default async function Page({ params }: { params: { slug:string }}){
    const { slug } = params
    const data = await getPage(slug);
    const {content, date, title } = data;
    return (<div>
            <h2>{title}</h2>
            <HTMLParser content={content}/>
        </div>)
}