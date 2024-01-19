"use client"
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { ValidationSchema, ValidationSchemaKeys, validationSchema } from "@/validations/contact.form.validation";
import { zodResolver } from "@hookform/resolvers/zod"
const defaultValues:ValidationSchema = {
  email:"",
  name:"",
  message:""
}

const Form = () => {
  const { control, handleSubmit } = useForm<ValidationSchema>({
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

              const { 
                fieldState: { invalid, isDirty, isTouched, error }, 
                field: { value }
              } = props;
              // console.log("invalid", invalid)
              // console.log("isDirty", isDirty)
              // console.log("isTouched", isTouched)
              // console.log("error", error)
              console.log(value)
              // console.log("email errors", errors)
              return <Input 
                label="Email"
                type="email" 
                isInvalid={isTouched && invalid} 
                errorMessage={error && error.message} />
            }} 
          />
          <Controller 
            name="name"
            rules={{ required: false }}
            control={control}
            render={(props) => {
              const { formState: { errors }} = props;
              const { name } = errors;
              return <Input 
              label="Name"  
              type="text" 
              isInvalid={name !== undefined} 
              errorMessage={name && name.message} />
            }} 
          />
          <Controller 
            name="message"
            rules={{ required: true }}
            control={control}
            render={(props) => {
              const { formState: { errors }} = props;
              const { message } = errors;
              return <Textarea 
                isInvalid={false}
                label={"Mensagem"}  
                // isInvalid={!(message === undefined)} 
                errorMessage={message && message.message} />
            }} 
          />
          <Button isDisabled={false} color="primary" isLoading={false} type="submit">Enviar</Button>
        </form>
  )
}

export default Form