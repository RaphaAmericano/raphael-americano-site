import Image from "next/image";
import ItemsWrapper from "./ItemsWrapper/ItemsWrapper";
import { getMenu } from "@/app/actions/get-menu";


const MainNavbarItems = async () => {    
      // const menu = await getMenu()
    
      return (<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                {/* <Image
                  width={25}
                  height={25}
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* {menu} */}
                </div>
              </div>
            </div>
            )    
}
export default MainNavbarItems