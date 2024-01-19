
import { Input as NextUIInput } from "@nextui-org/react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label: ReactNode;
    type?: "text" | "email" | "tel" | "number";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    errorMessage?: ReactNode;
    defaultValue?: string;
    isInvalid?: boolean;
}

const Input = ({ variant = "bordered", color = "default", ...props } : InputProps) => {
  return (
    <NextUIInput
      {...props}
      variant={variant}
      color={color}
      className="max-w-xs"
    />
  )
}

export default Input