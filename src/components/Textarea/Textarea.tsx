<<<<<<< HEAD
import React from "react";
import { Textarea as NextUITextarea } from "@nextui-org/react";


const Textarea = () => {
  return (
    <NextUITextarea
      label="Description"
      placeholder="Enter your description"
=======
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
>>>>>>> 2a1140415e08e4e47dd692af313379697e474b01
      className="max-w-xs"
    />
  )
}

export default Textarea