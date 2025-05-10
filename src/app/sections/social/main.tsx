'use client'
import styles from './index.module.sass'

const socialLinks: Record<string, string> = {
  github: 'https://github.com/Kelier',
  twitter: 'https://twitter.com/sleepbug_yes',
  discord: 'https://discordapp.com/users/detailsnumber',
  article: 'https://mp.weixin.qq.com/s/49YCWBUenLJqfFQWzGU9Dw',
  douyin: 'https://www.douyin.com/user/MS4wLjABAAAAfIV5F2XqYDIUuiyUo88lK3Zk5sJCLv-Yf9WOQyXbgAg',
  red: 'https://www.xiaohongshu.com/user/profile/5bf78953e168b300017db5b4',
  gmail: 'https://twitter.com/sleepbug_yes',
  profile: '#profile',
}

export default function SocialMedia() {
  const openMedia = (e: React.MouseEvent<HTMLElement>) => {
    const targetDom = e.target as HTMLElement
    const key = targetDom.getAttribute('title')
    if (key === 'gmail') {
      // 替换为实际的收件人、主题和正文
      const to = 'jorkingwire@gmail.com'
      const subject = 'Hola👋'
      const body = 'What happened ?'

      // 使用 encodeURIComponent 对参数进行编码
      const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      // 创建一个隐藏的 <a> 元素，并设置其 href 属性为 mailto 链接
      const mailtoAnchor = document.createElement('a')
      mailtoAnchor.href = mailtoLink

      // 模拟点击 <a> 元素
      mailtoAnchor.click()
    } else {
      if (key === 'profile') {
        // 站内 TODO: resume
      } else {
        key && window.open(socialLinks[key])
      }
    }
  }

  return (
    <div className={styles.socialLayer} onClick={(e) => openMedia(e)}>
      <div className={styles.icon} title="github">
        乾
      </div>
      <div className={styles.icon} title="twitter">
        兌
      </div>
      <div className={styles.icon} title="discord">
        離
      </div>
      <div className={styles.icon} title="article">
        震
      </div>
      <div className={styles.icon} title="douyin">
        巽
      </div>
      <div className={styles.icon} title="red">
        坎
      </div>
      <div className={styles.icon} title="gmail">
        艮
      </div>
      <div className={styles.icon} title="profile">
        坤
      </div>
    </div>
  )
}
