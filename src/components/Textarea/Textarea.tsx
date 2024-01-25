import React from "react";
import { Textarea as NextUITextarea } from "@nextui-org/react";


const Textarea = () => {
  return (
    <NextUITextarea
      label="Description"
      placeholder="Enter your description"
      className="max-w-xs"
    />
  )
}

export default Textarea