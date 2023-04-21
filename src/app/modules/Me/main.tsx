import TVLoader from '@/app/models/TVLoader/main'

import styles from './index.module.sass'

export default function Me() {
  return (
    <div className={styles.me}>
      <h4 className={styles.slogan}>Hello Me 🍋</h4>
      <div>
        <TVLoader />
      </div>
    </div>
  )
}
