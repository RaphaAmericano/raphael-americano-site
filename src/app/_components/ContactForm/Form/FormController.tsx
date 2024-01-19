import { Input, Textarea } from '@nextui-org/react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface FormControllerProps {
    control:Control<any>;
    required: boolean;
    name: string;
    type?: string;
    label: string;
    component?: "Input" | "Textarea";
}

const FormController = ({ control, required, name, type, label, component = "Input" }: FormControllerProps ) => {
    const Component = component === "Input" ? Input : Textarea;

  return (
    <Controller 
    control={control}
    name={name}
    rules={ { required }}
    render={({ field, fieldState }) => {
      const { onChange, onBlur }  = field;
      const { invalid, isDirty, error } = fieldState              
      return <Component 
              onChange={onChange}
              type={type}
              label={label}
              variant="bordered"
              defaultValue=""
              onBlur={onBlur}
              color={(invalid && isDirty) ? "danger" : "default" }
              isInvalid={invalid && isDirty }
              errorMessage={error && error.message}
              className="max-w-xs"
              />
    }}
   />
  )
}

export default FormController