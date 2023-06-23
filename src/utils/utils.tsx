import { FormikErrors, FormikTouched } from 'formik'
import { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'

export const hasError = (
  errors: FormikErrors<any>,
  touched: FormikTouched<any>,
  fieldName: string,
): boolean => {
  return Boolean(errors?.[fieldName] && touched?.[fieldName])
}

export const useFormattedDate = (dateString: string) => {
  const [formattedDate, setFormattedDate] = useState('')

  useEffect(() => {
    const date = parseISO(dateString)
    const formatted = format(date, 'yyyy-MM-dd HH:mm:ss')

    setFormattedDate(formatted)
  }, [dateString])

  return formattedDate
}
