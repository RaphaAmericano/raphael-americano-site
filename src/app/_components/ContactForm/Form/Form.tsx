"use client"

// import Textarea from "@/components/Textarea";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { ValidationSchema, ValidationSchemaKeys, validationSchema } from "@/validations/contact.form.validation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
const defaultValues:ValidationSchema = {
  email:"",
  name:"",
  message:""
}

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { control, handleSubmit, formState: { errors, isDirty } } = useForm<ValidationSchema>({
    defaultValues,
    resolver: zodResolver(validationSchema)
  });

  function submit(data:any){
    setLoading(true)
    console.log(data)
    setTimeout(() => setLoading(false), 5000)
  }

  function error(error:unknown){
    console.error(error)
  }
  return (
        <form onSubmit={handleSubmit(submit, error)}>
          <Controller 
            control={control}
            name="email"
            rules={ { required: true }}
            render={({ field, fieldState }) => {
              const { onChange, onBlur }  = field;
              const { invalid, isDirty, error } = fieldState              
              return <Input 
                      onChange={onChange}
                      type="email"
                      label="Email"   
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
           <Controller 
            control={control}
            name="name"
            rules={ { required: false }}
            render={({ field, fieldState }) => {
              const { onChange, onBlur }  = field;
              const { invalid, isDirty, error } = fieldState              
              return <Input 
                      onChange={onChange}
                      type="text"
                      label="Nome"   
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
           <Controller 
            control={control}
            name="message"
            rules={ { required: true }}
            render={({ field, fieldState }) => {
              const { onChange, onBlur }  = field;
              const { invalid, isDirty, error } = fieldState              
              return <Textarea 
                      onChange={onChange}
                      label="Mensagem"   
                      variant="bordered"
                      defaultValue=""
                      onBlur={onBlur}
                      isInvalid={invalid && isDirty }
                      color={(invalid && isDirty) ? "danger" : "default" }
                      errorMessage={error && error.message}
                      className="max-w-xs"
                      />
            }}
           />
          
          <Button isDisabled={false} color="primary" isLoading={loading} type="submit">{loading ? "Enviando...": "Enviar"}</Button>
        </form>
  )
}

export default Form