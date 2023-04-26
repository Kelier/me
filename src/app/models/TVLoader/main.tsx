'use client'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, PerspectiveCamera, Shadow, useProgress } from '@react-three/drei'

import type { OrbitControlsChangeEvent } from '@react-three/drei'

import { Suspense, useCallback } from 'react'

import GridAxis from '@/app/modules/GridAxis/main'

import styles from './index.module.sass'

import Model from '@/app/components/model/GameBoy'

const ModelLayer = () => {
  const checkThisAxis = useCallback((e: OrbitControlsChangeEvent | undefined) => {
    // console.log(e?.target)
  }, [])

  const { progress } = useProgress()

  return (
    <Suspense fallback={<span>🔦</span>}>
      <Canvas dpr={2} shadows>
        <PerspectiveCamera makeDefault position={[300, 700, 5]} resolution={1920} fov={75} />
        <ambientLight />
        <GridAxis size={1}></GridAxis>
        <directionalLight />
        <Model />
        <OrbitControls enableZoom={false} onChange={checkThisAxis} />
        <Shadow color="#ca390f" colorStop={0.15} opacity={0.25} fog={false} />
        {/* <EffectComposer> */}
        {/* <Noise premultiply={false} blendFunction={BlendFunction.PIN_LIGHT} /> */}
        {/* </EffectComposer> */}
      </Canvas>
    </Suspense>
  )
}

export default function TVLoader() {
  return (
    <div className={styles.mainLayer}>
      <div className={styles.modelLayer}>
        <ModelLayer />
      </div>
    </div>
  )
}
