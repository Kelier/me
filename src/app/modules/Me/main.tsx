import TVLoader from '@/app/models/TVLoader/main'

import styles from './index.module.sass'
import TraitLayer from '@/app/sections/trait/main'
import NavLayer from '@/app/sections/nav/main'
// import Image from 'next/image'
import MePortraitAVIF from '@/app/assets/avif/skull.avif'

export default function Me() {
  return (
    <div className={styles.me}>
      <div className={styles.slogan}>Hello Me</div>
      <div className={styles.bgPortrait}>
        {/* <Image src={MePortraitAVIF} alt="portrait" width={125} /> */}
      </div>
      {/* <NavLayer /> */}
      <TVLoader />
      <section className={styles.sections}>
        <TraitLayer />
      </section>
    </div>
  )
}
