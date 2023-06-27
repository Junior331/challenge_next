import { FormikErrors, FormikTouched } from 'formik'
import { parseISO, format } from 'date-fns'

export const hasError = (
  errors: FormikErrors<any>,
  touched: FormikTouched<any>,
  fieldName: string,
): boolean => {
  return Boolean(errors?.[fieldName] && touched?.[fieldName])
}

export const useFormattedDate = (dateString: string) => {
  if (dateString && dateString === '') {
    const date = parseISO(dateString)
    return format(date, 'yyyy-MM-dd HH:mm:ss')
  } else {
    return ''
  }
}
