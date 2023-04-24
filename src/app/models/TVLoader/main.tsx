'use client'
import { Canvas, useFrame } from '@react-three/fiber'

import {
  OrbitControls,
  PerspectiveCamera,
  Shadow,
  useGLTF,
  useProgress,
  Text,
} from '@react-three/drei'

import type { OrbitControlsChangeEvent } from '@react-three/drei'

import ScenePot from '@/app/glTFs/gameboy.glb'
import { Suspense, useCallback, useRef } from 'react'
// import { A11yAnnouncer } from '@react-three/a11y'
// import { useControls } from 'leva'

import GridAxis from '@/app/modules/GridAxis/main'

import { EffectComposer, Noise, Glitch } from '@react-three/postprocessing'
import { BlendFunction, GlitchMode } from 'postprocessing'

import styles from './index.module.scss'
import { Vector2 } from 'three'
import localFont from 'next/font/local'

const majorFont = localFont({
  src: [
    {
      path: '../../assets/fonts/MajorMonoDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--major-font',
})

const Model = () => {
  const { scene } = useGLTF(ScenePot)
  const ref = useRef<{
    rotation: { x: number; y: number; z: number }
    scale: { x: number; y: number; z: number }
  }>()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (ref.current) {
      if (t < 1) {
        const scaleCurveLine = t * (1 - t + Math.pow(t, 1.2))
        ref.current.scale.x = scaleCurveLine
        ref.current.scale.y = scaleCurveLine
        ref.current.scale.z = scaleCurveLine
      }
      // clock swing animate
      ref.current.rotation.y = (1 + Math.sin(t / 0.25)) / 10
    }
  })

  // useControls('My folder', {
  //   showLighting: true,
  //   showStats: false,
  // })
  console.log(2, scene)
  return (
    <primitive
      object={scene}
      ref={ref}
      dispose={null}
      rotation={[-Math.PI / 2.4, Math.PI / 36, Math.PI / 3]}
    />
  )
}

const ModelLayer = () => {
  const checkThisAxis = useCallback((e: OrbitControlsChangeEvent | undefined) => {
    // console.log(e?.target)
  }, [])

  useGLTF(ScenePot)

  const { progress } = useProgress()

  return (
    <Suspense fallback={<span>{progress}</span>}>
      <Canvas dpr={2} shadows>
        <PerspectiveCamera makeDefault position={[300, 700, 5]} resolution={1920} fov={75} />
        <ambientLight />
        <GridAxis size={1}></GridAxis>
        <directionalLight />
        <Model />
        <OrbitControls enableZoom={false} onChange={checkThisAxis} />
        <Shadow color="#ca390f" colorStop={0.15} opacity={0.25} fog={false} />
        <EffectComposer>
          <Noise premultiply={false} blendFunction={BlendFunction.PIN_LIGHT} />
        </EffectComposer>
      </Canvas>
      {/* <A11yAnnouncer /> */}
    </Suspense>
  )
}

export function TextLayer() {
  console.log('majorFont.style.fontFamily')
  return (
    <Canvas>
      <group>
        <Text
          color={'#fff'}
          strokeColor={'#000'}
          strokeWidth={2}
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[1.2, 1.2, 1.2]}
        >
          2020-2032
        </Text>
      </group>
      <EffectComposer>
        <Glitch
          delay={new Vector2(1.5, 1.5)} // min and max glitch delay
          duration={new Vector2(0.5, 1.0)} // min and max glitch delay
          strength={new Vector2(0.01, 0.01)} // min and max glitch delay
          chromaticAberrationOffset={new Vector2(0.01, 0.01)} // min and max glitch delay
          dtSize={10}
          columns={0.2}
          mode={GlitchMode.DISABLED} // glitch mode
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
        <Noise premultiply={false} blendFunction={BlendFunction.PIN_LIGHT} />
      </EffectComposer>
    </Canvas>
  )
}

export default function TVLoader() {
  return (
    <div className={styles.mainLayer}>
      <div className={styles.modelLayer}>
        <ModelLayer />
      </div>
      <div className={styles.textLayer}>
        <TextLayer />
      </div>
    </div>
  )
}
