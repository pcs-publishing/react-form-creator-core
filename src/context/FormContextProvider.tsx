import React, { createContext } from 'react'
import {
  UseFormRegister,
  FieldValues,
  useForm,
  FormState,
  UseFormWatch,
  UseFormHandleSubmit,
  Control
} from 'react-hook-form'

interface FormContextExport {
  register: UseFormRegister<FieldValues>
  formState: FormState<FieldValues>
  handleSubmit: UseFormHandleSubmit<FieldValues>
  watch: UseFormWatch<FieldValues>
  control: Control<FieldValues>
}

export const FormContext = createContext<FormContextExport | null>(null)

export interface FormContextProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

const FormContextProvider = (props: FormContextProviderProps) => {
  const { register, handleSubmit, watch, formState, control } = useForm()

  return (
    <FormContext.Provider
      value={{ register, handleSubmit, watch, formState, control }}
    >
      {props.children}
    </FormContext.Provider>
  )
}

export default FormContextProvider
