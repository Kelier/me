import { supplyFont, majorFont, minchoFont } from '../utils/font'
import styles from '../page.module.sass'

import ProfileContent from '@/app/modules/Profile/main'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export default function Profile() {
  return (
    <main
      className={`${styles.main} ${supplyFont.variable} ${majorFont.variable} ${minchoFont.variable}`}
    >
      <SpeedInsights />
      <Analytics />
      <ProfileContent></ProfileContent>
    </main>
  )
}
