export type DatePickerProps = {
  error: boolean
  helpText?: string
  placeholder: string
  handleDate: (date: Date | null) => void
}
