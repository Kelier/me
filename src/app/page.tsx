import styles from './page.module.sass'
import Me from './modules/Me/main'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import { supplyFont, majorFont, minchoFont } from './utils/font'

export default function Home() {
  return (
    <main
      className={`${styles.main} ${supplyFont.variable} ${majorFont.variable} ${minchoFont.variable}`}
    >
      <SpeedInsights />
      <Analytics />
      <Me />
    </main>
  )
}
