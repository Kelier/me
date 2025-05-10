'use client'
import SplitText from '@/app/components/splitText'
import styles from './index.module.sass'
import ShapeBlur from '@/app/components/blurIcon'
import { useRouter } from 'next/navigation'
import FadeContent from '@/app/components/fadeContent'
import { useEffect, useState } from 'react'

export default function Me() {
  const router = useRouter()

  return (
    <div className={styles.me}>
      <div className={styles.circleHidden}>
        <ShapeBlur
          variation={2}
          pixelRatioProp={1}
          shapeSize={0.5}
          roundness={0.5}
          borderSize={0.05}
          circleSize={0.5}
          circleEdge={1}
        />
      </div>
      <div className={styles.title}>
        <SplitText
          text={`"◼︎ Hola, My friend, though we've never met x_x: @____`}
          delay={30}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
          className={styles.title}
          // onLetterAnimationComp◻️lete={handleAnimationComplete}
        />
        <br></br>
        <br></br>
        <SplitText
          text={`  Here is CDown's Space. A place sporadically sharing field notes on human society, bizarre experiments and failed inspirations, glimmers of humanity, plays of color and space, and fragments of frozen time. To live? To always outrun boredom and chase every spark of wonder."`}
          delay={10}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
          className={styles.title}
          // onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div
        className={styles.footer}
        onClick={() => {
          router.push('/profile')
        }}
      >
        <FadeContent
          className={styles.fadeIn}
          blur={false}
          delay={100}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <span>窄门</span>
        </FadeContent>
      </div>
    </div>
  )
}
