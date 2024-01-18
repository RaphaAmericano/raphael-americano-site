"use client"
import Input from "@/components/Input";
import { Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  email:"",
  name:"",
  message:""
}

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues
  });
  // const onSubmit = (data:any) => console.log(data)
  // const onError = (error:any) => console.log(error)
  return (
        <form>
          <Controller 
            name="email"
            control={control}
            render={(props) => {
              console.log(props)
              return <Input  label="Email"  type="email"  errorMessage={""} />
            }} 
          />
          
          <Button isDisabled={true} color="primary" isLoading={false}/>
        </form>
  )
}

export default Form