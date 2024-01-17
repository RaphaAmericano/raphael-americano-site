import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

function UIProvider({ children }: { children: ReactNode} ) {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}

export default UIProvider 