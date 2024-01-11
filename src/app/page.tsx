import Me from './modules/Me/main'
import styles from './page.module.sass'

import localFont from 'next/font/local'

const majorFont = localFont({
  src: [
    {
      path: './fonts/MajorMonoDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--major-font',
})
const supplyFont = localFont({
  src: [
    {
      path: './fonts/PPSupplyMono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--supply-font',
})

export default function Home() {
  return (
    <main className={`${styles.main} ${supplyFont.variable} ${majorFont.variable}`}>
      <Me></Me>
    </main>
  )
}
