'use client'

import FadeContent from '@/app/components/fadeContent'
import SocialMedia from '@/app/sections/social/main'

export default function ProfileContent() {
  return (
    <FadeContent blur={false} delay={100} duration={500} easing="ease-out" initialOpacity={0}>
      {/* 我对数学一无所知，左派精神，擅长什么都不做。 */}
      <SocialMedia></SocialMedia>
    </FadeContent>
  )
}
