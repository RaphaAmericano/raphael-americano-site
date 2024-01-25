import { getPost } from "@/app/actions/get-post";
import HTMLParser from "@/components/HTMLParser";

export default async function Page({ params }: { params: { slug: string }}) {
  const { slug } = params;
  const data = await getPost(slug)  
  console.log(data)
  const { title, content } = data;
  return <div>
    <h2>{title}</h2>
    <p>Post: {slug}</p>
    <HTMLParser content={content}/>
  </div>
}