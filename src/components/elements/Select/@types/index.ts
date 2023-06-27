export type optionProps = {
  id: number
  name: string
}
export type SelectProps = {
  error: boolean
  helpText?: string
  Placeholder: string
  list: optionProps[]
  handleSelect: (item: string) => void
}
