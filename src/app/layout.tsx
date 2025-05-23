import './index.sass'

export const metadata = {
  title: `CDown's Space`,
  description: '2020-2032 T.D.LemonTree　なにそれ？',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
