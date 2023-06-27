import * as React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'
import { DatePickerProps } from './@types'
import * as S from './DatePickerStyled'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const DateTimePickerComponent = ({
  error,
  helpText,
  isSecudary,
  handleDate,
  placeholder,
  ...rest
}: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        {isSecudary ? (
          <DatePicker onChange={handleDate} openTo="year" views={['year']} />
        ) : (
          <DateTimePicker
            {...rest}
            label={placeholder}
            onChange={handleDate}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        )}
      </DemoContainer>
      {error && <S.TextErro variant="h5">{helpText}</S.TextErro>}
    </LocalizationProvider>
  )
}
export default DateTimePickerComponent
