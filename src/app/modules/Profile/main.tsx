'use client'

import FadeContent from '@/app/components/fadeContent'

import styles from './index.module.sass'
import TiltedCard from '@/app/components/titleCard'
import Dock from '@/app/components/dock'
import { useDeviceDetect } from '@/app/hooks/useDeviceDetect'
import { ShapeBlur } from '@/app/components/blurIcon'

export default function ProfileContent() {
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

  const openMedia = (key: string) => {
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

  const items = [
    {
      icon: <div className={styles.keyItem}>G</div>,
      label: 'Github',
      onClick: () => openMedia('github'),
    },
    {
      icon: <div className={styles.keyItem}>T</div>,
      label: 'Twitter',
      onClick: () => openMedia('twitter'),
    },
    {
      icon: <div className={styles.keyItem}>D</div>,
      label: 'Discord',
      onClick: () => openMedia('discord'),
    },
    {
      icon: <div className={styles.keyItem}>W</div>,
      label: '公众号',
      onClick: () => openMedia('article'),
    },
    {
      icon: <div className={styles.keyItem}>T</div>,
      label: '抖音',
      onClick: () => openMedia('douyin'),
    },
    {
      icon: <div className={styles.keyItem}>R</div>,
      label: '小红书',
      onClick: () => openMedia('red'),
    },
    {
      icon: <div className={styles.keyItem}>M</div>,
      label: 'GMail',
      onClick: () => openMedia('gmail'),
    },
    {
      icon: <div className={styles.keyItem}>B</div>,
      label: 'Blog',
      onClick: () => alert('此人太懒，博客还未迁移!'),
    },
  ]

  const { isMobile } = useDeviceDetect()

  const dockContainerHeight = isMobile ? 68 / 2 : 68
  const dockeItemSize = isMobile ? 50 / 2 : 50
  const dockMag = isMobile ? 72 / 2 : 72

  const companyTags = [
    {
      name: '狸谱',
      title: 'lipu',
      link: 'https://apps.apple.com/cn/app/%E7%8B%B8%E8%B0%B1-ai%E5%A3%81%E7%BA%B8%E6%BC%AB%E7%94%BB%E6%A2%97%E5%9B%BE/id6503680876',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/80/7c/e3/807ce357-0e56-2b9a-f602-77fa1d7c9556/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/460x0w.webp',
    },
    {
      name: '阶跃 AI',
      title: 'stepfun ai',
      link: 'https://apps.apple.com/cn/app/%E9%98%B6%E8%B7%83ai-%E9%98%B6%E8%B7%83%E6%98%9F%E8%BE%B0ai%E5%8A%A9%E6%89%8B/id6502382318',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5e/b1/61/5eb161e4-727c-a062-a436-7be678f069f1/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/460x0w.webp',
    },
    {
      name: '冒泡鸭',
      title: 'maopaoya',
      link: 'https://apps.apple.com/cn/app/%E5%86%92%E6%B3%A1%E9%B8%AD-%E5%9C%A8ai%E5%BC%80%E6%94%BE%E4%B8%96%E7%95%8C%E6%8E%A2%E7%B4%A2%E8%A7%92%E8%89%B2%E6%95%85%E4%BA%8B/id6469998915',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b3/63/d3/b363d3a0-bc12-d309-6c79-6b2feaf6a064/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/460x0w.webp',
    },
    {
      name: '哔哩哔哩',
      title: 'bilibili',
      link: 'https://apps.apple.com/cn/app/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E5%BC%B9%E5%B9%95%E7%95%AA%E5%89%A7%E7%9B%B4%E6%92%AD%E9%AB%98%E6%B8%85%E8%A7%86%E9%A2%91/id736536022',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/23/70/ec/2370ec9f-c797-479a-e606-2d62c0989fc3/AppIcon-1x_U007epad-0-1-0-85-220-0.png/460x0w.webp',
    },
    {
      name: '哔哩哔哩直播姬',
      title: 'bilibili live',
      link: 'https://apps.apple.com/cn/app/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E7%9B%B4%E6%92%AD%E5%A7%AC/id1099118521',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/53/61/ea/5361ea52-be40-933a-75ac-099c9e71b39e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/460x0w.webp',
    },
    {
      name: '猿辅导',
      title: 'yuanfudao',
      link: 'https://www.yuanfudaoschool.com/',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d5/ad/29/d5ad2923-71ec-e348-d6de-002201a72060/TutoriPhoneAppIcon-0-0-1x_U007emarketing-0-5-0-0-85-220.png/460x0w.webp',
    },
    {
      name: '百度',
      title: 'baidu mobile',
      link: 'https://apps.apple.com/cn/app/%E7%99%BE%E5%BA%A6-deepseek%E6%BB%A1%E8%A1%80%E6%8E%A5%E5%85%A5/id382201985',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ad/08/9c/ad089cdd-1ede-77f8-39eb-4ac433d13179/AppIcon-0-0-1x_U007emarketing-0-8-0-0-sRGB-85-220.png/460x0w.webp',
    },
    {
      name: '简单搜索',
      title: 'simple search',
      link: 'https://apps.apple.com/cn/app/%E7%AE%80%E5%8D%95%E6%90%9C%E7%B4%A2-%E8%83%BD%E5%90%AC%E4%BC%9A%E7%9C%8B/id1250762367',
      source:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/76/f3/6a/76f36a97-a87e-a6e9-e095-2bd27c547130/AppIcon-0-0-1x_U007emarketing-0-6-0-0-85-220.png/460x0w.webp',
    },
  ]

  return (
    <div className={styles.profile}>
      <div className={styles.circleHidden}>
        <ShapeBlur
          variation={1}
          pixelRatioProp={1}
          shapeSize={5.05}
          roundness={0.04}
          borderSize={0.25}
          circleSize={0.25}
          circleEdge={0}
        />
      </div>
      <TiltedCard
        imageSrc="https://avatars.githubusercontent.com/u/16694478?v=4"
        // captionText="根本是不想上班呀"
        containerHeight="360px"
        containerWidth="360px"
        imageHeight="180px"
        imageWidth="180px"
        rotateAmplitude={16}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <FadeContent
            className={styles.overlayContent}
            blur={false}
            delay={100}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
          >
            我对数学一无所知，左派精神，擅长什么都不做。
          </FadeContent>
        }
      />

      <div className={styles.content}>
        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          /. 任职公司：@Stepfun @bilibili @猿辅导 @百度
        </FadeContent>
        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            /. 参与工程：
            {companyTags.map((com, comKey) => {
              return (
                <a
                  key={comKey}
                  href={com.link}
                  title={com.name}
                  className={styles.company}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className={styles.logo} src={com.source} alt={com.title} />
                </a>
              )
            })}
          </div>
        </FadeContent>

        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          /. Web3:
          <a href="https://amphi.space/" target="_blank" rel="noreferrer">
            Amphi
          </a>
          {` & 2022 polkadot 冬季黑客松（Moonbeam 最喜爱战队）`}
        </FadeContent>

        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          {`/. 关注AI公司动向: OpenAI[CloseAI 不是 >_<]、Anthropic [Claude、MCP]、Pi、Notion AI、Figma AI、Cursor[Vibe Coding]、MidJourney、Adobe、Stable Diffusion、海螺&可灵、PIKA&Recraft、Suno`}
        </FadeContent>

        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          {`/. 掌握的一些工具& 还在学习的部分 & 感兴趣的方向：ComfyUI、Blender、TouchDesign、2｜3D 互渲、动效、WebGL&WebGPU、二次元、社区、出海、WebGIS`}
        </FadeContent>

        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          {`/. 专利：弹幕 | 全景图 | 热力图 | SSR [索引皆可追查]`}
        </FadeContent>

        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          {`/. 向往：自由职业、数字游民、远程办公、独立开发者、和真诚且聪明的人合作学习、不说废话、反官僚、WLB&965 拥护者`}
        </FadeContent>

        <FadeContent
          className={styles.infoDock}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          {`◽️. 番外：如果你是文学、电影、音乐、游戏、话剧、摄影、旅行、运动( but 不包括🏀 )、归纳、冥想、心理、玄学、时尚以及宇宙探索等主题感兴趣，或许我们可以成为莫逆之交`}
        </FadeContent>
      </div>

      <div className={styles.nav}>
        <Dock
          items={items}
          panelHeight={dockContainerHeight}
          baseItemSize={dockeItemSize}
          magnification={dockMag}
        />
      </div>
    </div>
  )
}
