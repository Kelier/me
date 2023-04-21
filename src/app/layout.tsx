import './index.scss'

export const metadata = {
  title: 'ME',
  description: '2020-2032 T.D.LemonTree　なにそれ？',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
