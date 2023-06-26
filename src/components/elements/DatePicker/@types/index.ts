export type DatePickerProps = {
  error: boolean
  helpText?: string
  placeholder: string
  isSecudary?: boolean
  handleDate: (date: Date | null) => void
}
