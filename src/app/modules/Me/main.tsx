import TVLoader from '@/app/models/TVLoader/main'

import styles from './index.module.sass'
import TraitLayer from '@/app/sections/trait/main'
import NavLayer from '@/app/sections/nav/main'
import Image from 'next/image'

export default function Me() {
  return (
    <div className={styles.me}>
      <div className={styles.slogan}>Hello Me</div>
      <div className={styles.pt1}>
        <section className={styles.sections}>
          <TraitLayer />
        </section>
      </div>
      <NavLayer />
      <TVLoader />
    </div>
  )
}
