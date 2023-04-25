import TVLoader from '@/app/models/TVLoader/main'

import styles from './index.module.sass'
import TraitLayer from '@/app/sections/trait/main'
import NavLayer from '@/app/sections/nav/main'

export default function Me() {
  return (
    <div className={styles.me}>
      <div className={styles.slogan}>Hello Me 🍋</div>
      <NavLayer />
      <TVLoader />
      <section className={styles.sections}>
        <TraitLayer />
      </section>
    </div>
  )
}
