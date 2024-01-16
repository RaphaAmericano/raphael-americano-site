
import { Page } from "@/graphql/types";
import clsx from "clsx"
import Link from "next/link";
import { getMenu } from "@/app/actions/get-menu";
const ItemsWrapper = () => {
    return getMenu()
}
export default ItemsWrapper