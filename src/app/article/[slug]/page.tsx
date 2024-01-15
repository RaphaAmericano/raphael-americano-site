// import { getPage } from "@/app/actions/get-page";

export default async function Page({ params }: { params: { slug: string }}) {
  const { slug } = params;
  // const data = await getPage(slug)  
  return <p>Post: {slug}</p>
}