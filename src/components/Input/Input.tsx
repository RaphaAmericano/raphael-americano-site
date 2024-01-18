
import { Input as NextUIInput } from "@nextui-org/react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label: ReactNode;
    type?: "text" | "email" | "tel" | "number";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    errorMessage?: ReactNode;
}

const Input = ({ label, type = "text", variant = "bordered", color = "default", errorMessage = ""} : InputProps) => {
  return (
    <NextUIInput
      type={type}
      label={label}
      variant={variant}
      defaultValue="junior2nextui.org"
      isInvalid={true}
      color={color}
      errorMessage={errorMessage}
      className="max-w-xs"
    />
  )
}

export default Input