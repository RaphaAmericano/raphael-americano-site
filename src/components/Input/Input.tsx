
import { Input as NextUIInput } from "@nextui-org/react";
import { InputHTMLAttributes, ReactNode } from "react";
import { RegisterOptions } from "react-hook-form";

interface InputProps {
  name:string;
  label: ReactNode;
  type?: "text" | "email" | "tel" | "number";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  errorMessage?: ReactNode;
  defaultValue?: string;
  isInvalid?: boolean;
  registerOptions: RegisterOptions;
}

// const Input = ({ variant = "bordered", color = "default", ...props }: InputProps, ref:ForwardedRef<HTMLInputElement> ) => {
//   const { } = useInput({...props, ref, })
//   return (
//     <input
//     {...props}
//       ref={ref}
//       variant={variant}
//       color={color}
//       className="max-w-xs"
//     />
//   )  
// }

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
// export default forwardRef(Input)