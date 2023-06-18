export type StyleProps = {
  isOpen?: boolean
}
export type Link = {
  text: string
  router: string
}
export type NavigationProps = {
  Links: Link[]
  handlePushRouter?: (router: string) => void
}
