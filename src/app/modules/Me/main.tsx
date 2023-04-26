import TVLoader from '@/app/models/TVLoader/main'

import styles from './index.module.sass'
import TraitLayer from '@/app/sections/trait/main'
import NavLayer from '@/app/sections/nav/main'
import Image from 'next/image'
import MePortraitAVIF from '@/app/assets/avif/skull.avif'
import TextLayer from './layouts/TextLayer'

export default function Me() {
  return (
    <div className={styles.me}>
      <div className={styles.slogan}>Hello Me</div>
      <div className={styles.pt1}>
        <section className={styles.sections}>
          <TraitLayer />
        </section>
        <div className={styles.bgPortrait}>
          <Image src={MePortraitAVIF} alt="portrait" width={125} />
        </div>
        <div className={styles.textLayer}>
          <TextLayer />
        </div>
      </div>
      <NavLayer />
      {/* <TVLoader /> */}
    </div>
  )
}
