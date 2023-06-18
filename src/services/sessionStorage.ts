const MENU_SESSION_ID = 'challenge-menu'

export const getMenuSelected = (): string => {
  const menu: string | null = window.sessionStorage.getItem(MENU_SESSION_ID)
  return menu || 'clients'
}

export const setMenuSelected = (menu: string): void => {
  window.sessionStorage.setItem(MENU_SESSION_ID, menu)
}

export const resetMenu = (): void => {
  window.sessionStorage.removeItem(MENU_SESSION_ID)
}
