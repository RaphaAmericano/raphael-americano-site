"use client"
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { ValidationSchema, ValidationSchemaKeys, validationSchema } from "@/validations/contact.form.validation";
import { zodResolver } from "@hookform/resolvers/zod"
const defaultValues = {
  email:"",
  name:"",
  message:""
}

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(validationSchema)
  });

  function submit(data:any){
    console.log(data)
  }

  function error(error:unknown){
    console.error(error)
  }
  return (
        <form onSubmit={handleSubmit(submit, error)}>
          <Controller 
            name="email"
            rules={{ required: true }}
            control={control}
            render={(props) => {
              const { formState: { errors }} = props;
              const { email } = errors;
              return <Input  label="Email"  type="email" errorMessage={email && email.message} />
            }} 
          />
          <Controller 
            name="name"
            rules={{ required: false }}
            control={control}
            render={(props) => {
              const { formState: { errors }} = props;
              return <Input  label="Name"  type="text"  errorMessage={errors.name && errors.name.message} />
            }} 
          />
          <Controller 
            name="message"
            rules={{ required: true }}
            control={control}
            render={(props) => {
              const { formState: { errors }} = props;
              return <Textarea 
                isInvalid={false}
                label={"Mensagem"}  
                errorMessage={errors.message && errors.message.message} />
            }} 
          />
          <Button isDisabled={false} color="primary" isLoading={false} type="submit">Enviar</Button>
        </form>
  )
}

export default Form