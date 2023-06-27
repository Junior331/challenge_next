import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { SelectProps } from './@types'
import * as S from './SelectStyled'

export const SelectComponent = ({
  list,
  error,
  helpText,
  Placeholder,
  handleSelect = () => {},
}: SelectProps) => {
  const [value, setValue] = React.useState(Placeholder)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
    handleSelect(event.target.value as string)
  }

  return (
    <S.BoxComponent sx={{ minWidth: 120 }} error={error}>
      <FormControl fullWidth error={error}>
        <Select
          value={value}
          id="demo-simple-select"
          onChange={handleChange}
          labelId="demo-simple-select-label"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{Placeholder}</em>
            }

            return selected
          }}
        >
          {list.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && <S.TextErro variant="h5">{helpText}</S.TextErro>}
    </S.BoxComponent>
  )
}
export default SelectComponent
