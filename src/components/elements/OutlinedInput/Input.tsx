import { FormControl, OutlinedInput } from '@mui/material'
import { InputType } from './@types'
import { useField } from 'formik'
import * as S from './InputtStyled'

const Input = ({ name, ...rest }: InputType) => {
  const [field, mata] = useField(name)

  const configTextFild = {
    ...rest,
    ...field,
    variant: 'outlined',
  }
  return (
    <S.ContainerInput error={mata.touched && Boolean(mata.error)}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
          {...configTextFild}
          autoComplete="false"
          placeholder={name.toLocaleLowerCase()}
          error={mata.touched && Boolean(mata.error)}
        />
      </FormControl>
      <S.TextErro variant="h5">{mata.error}</S.TextErro>
    </S.ContainerInput>
  )
}

export default Input
