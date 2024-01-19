import { Textarea as NextUITextarea } from "@nextui-org/input"
import { ReactNode } from "react";

interface TextareaProps {
  label: ReactNode;
  description?:string;
  placeholder?:string;
  defaultValue?:string;
  type?: "text" | "email" | "tel" | "number";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  isInvalid?:boolean;
  isReadOnly?: boolean;
  errorMessage: ReactNode;
}

const Textarea = ({  ...props  }:TextareaProps) => {
  return (
    <NextUITextarea 
      {...props}
      className="max-w-xs"
    />
  )
}

export default Textarea