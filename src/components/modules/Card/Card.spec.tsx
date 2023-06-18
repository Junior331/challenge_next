/* eslint-disable no-console */
import React from 'react'
import { renderCustom } from '@/utils/renderCustom'
import { screen } from '@testing-library/react'
import Card from './Card'

describe('Card component', () => {
  const mockProps = {
    width: '300px',
    height: '200px',
    children: <div>Card content</div>,
  }

  test('renders with correct props', () => {
    renderCustom(<Card {...mockProps}>{mockProps.children}</Card>)
    expect(screen.getByTestId('card_test')).toBeTruthy()
  })
})
