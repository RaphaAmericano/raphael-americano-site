import parse from "html-react-parser"
const  HTMLParser = ({ content }: { content: string }) => {
    return <>{parse(content)}</>
}
export default HTMLParser