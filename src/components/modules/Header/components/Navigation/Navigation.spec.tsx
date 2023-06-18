import { renderCustom } from '@/utils/renderCustom'
import { fireEvent, screen } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation component', () => {
  const links = [
    { text: 'Home', router: '/' },
    { text: 'About', router: '/about' },
  ]
  test('renders with without crashing', () => {
    renderCustom(<Navigation Links={links} />)
    expect(screen.getByTestId('navigation_test')).toBeTruthy()
  })

  test('renders navigation links', () => {
    renderCustom(<Navigation Links={links} />)
    const homeLink = screen.getByTestId('navigation_test')
    const aboutLink = screen.getByTestId('navigation_test')
    expect(homeLink).toBeTruthy()
    expect(aboutLink).toBeTruthy()
  })

  test('clicking on a link navigates to the correct route', () => {
    renderCustom(<Navigation Links={[{ text: 'Home', router: '/' }]} />)

    const homeLink = screen.getByTestId('navigation_test')
    fireEvent.click(homeLink)

    expect(window.location.pathname).toBe('/')
  })

  test('renders correct link text', () => {
    renderCustom(<Navigation Links={links} />)
    const homeLink = screen.getByTestId('navigation_test')
    expect(homeLink).toBeInTheDocument()
  })

  test('clicking on a link calls handlePushRouter', () => {
    const handlePushRouter = jest.fn()

    renderCustom(
      <Navigation
        handlePushRouter={handlePushRouter}
        Links={[{ text: 'Home', router: '/' }]}
      />,
    )
    fireEvent.click(screen.getByText('Home'))
    expect(handlePushRouter).toHaveBeenCalledTimes(1)
    expect(handlePushRouter).toHaveBeenCalledWith('/')
  })
})
