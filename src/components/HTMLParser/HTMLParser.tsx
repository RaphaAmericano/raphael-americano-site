import { Interweave, Markup } from "interweave"
const  HTMLParser = ({ content }: { content: string }) => {
    return <Markup content={content} />
}

export default HTMLParser