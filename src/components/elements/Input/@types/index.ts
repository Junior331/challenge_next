import { FieldInputProps } from 'formik'

export type InputType = {
  nome: string
  error: boolean
  helpText?: string
  placeholder: string
  onBlur: FieldInputProps<any>['onBlur']
}
