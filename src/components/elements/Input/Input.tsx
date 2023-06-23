import { FormControl, OutlinedInput } from '@mui/material'
import { InputType } from './@types'
import { useField } from 'formik'
import * as S from './InputStyled'

const Input = ({ nome, error, helpText, placeholder, ...rest }: InputType) => {
  const [field] = useField(nome)
  const configTextFild = {
    ...rest,
    ...field,
    variant: 'outlined',
  }
  return (
    <S.ContainerInput error={error}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
          {...configTextFild}
          error={error}
          autoComplete="false"
          placeholder={placeholder}
        />
      </FormControl>
      {error && <S.TextErro variant="h5">{helpText}</S.TextErro>}
    </S.ContainerInput>
  )
}

export default Input
