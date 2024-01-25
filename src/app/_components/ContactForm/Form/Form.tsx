"use client"

// import Textarea from "@/components/Textarea";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { ValidationSchema, ValidationSchemaKeys, validationSchema } from "@/validations/contact.form.validation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import FormController from "./FormController";
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
          <FormController control={control} label="Email" name="email" type="email"required={true} />
          <FormController control={control} label="Nome" name="text" type="email"required={false} />
          <FormController control={control} label="Mensagem" name="message" required={true} component="Textarea" />          
          <Button isDisabled={false} color="primary" isLoading={loading} type="submit">{loading ? "Enviando...": "Enviar"}</Button>
        </form>
  )
}

export default Form