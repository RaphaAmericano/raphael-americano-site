"use client"
import Input from "@/components/Input";
import { Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { validationSchema,  ValidationSchema } from "./Form.validation";
import { zodResolver } from "@hookform/resolvers/zod"
import Textarea from "@/components/Textarea/Textarea";

const defaultValues:ValidationSchema = {
  email:"",
  name:"",
  message:""
}

const Form = () => {
  const { control, handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues
  });
  const onSubmit = (data:any) => console.log(data)
  const onError = (error:any) => console.log(error)
  // TODO componentizar um input controller e um textarea controller
  return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Controller 
            name="email"
            control={control}
            render={(props) => {
              
              const { fieldState, } = props;
              const { invalid, isTouched, isDirty, error } = fieldState;
              console.log(error)
              return <Input  label="Email"  type="email"  errorMessage={null} />
            }} 
          />
           <Controller 
            name="name"
            control={control}
            render={(props) => {
              
        
              const { field, fieldState, formState } = props;

              return <Input  label="Nome"  type="text"  errorMessage={""} />
            }} 
          />

          <Controller 
            name="message"
            control={control}
            render={(props) => {
              
              const { field, fieldState, formState } = props;

              return <Textarea />
            }} 
          />
          
          <Button isDisabled={false} color="primary" isLoading={false}>Enviar</Button>
        </form>
  )
}

export default Form