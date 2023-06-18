import { ReactNode } from 'react'

export const metadata = {
  title: 'Displacement Application',
  description: 'Challenge next',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
