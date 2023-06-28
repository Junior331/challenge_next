const MENU_SESSION_ID = 'challenge-menu'

export const getMenuSelected = () => {
  if (typeof window !== 'undefined') {
    const menu: string | null = window.sessionStorage.getItem(MENU_SESSION_ID)
    return menu || 'clients'
  }
}

export const setMenuSelected = (menu: string): void => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(MENU_SESSION_ID, menu)
  }
}

export const resetMenu = (): void => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem(MENU_SESSION_ID)
  }
}
