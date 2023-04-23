'use client'
import { Canvas, useFrame } from '@react-three/fiber'

import { OrbitControls, PerspectiveCamera, Shadow, useGLTF, useProgress } from '@react-three/drei'

import type { OrbitControlsChangeEvent } from '@react-three/drei'

import ScenePot from '@/app/glTFs/gameboy.glb'
import { Suspense, useCallback, useRef } from 'react'
import { A11yAnnouncer } from '@react-three/a11y'
import { useControls } from 'leva'

import GridAxis from '@/app/modules/GridAxis/main'

import { EffectComposer, Noise, Glitch } from '@react-three/postprocessing'
import { BlendFunction, GlitchMode } from 'postprocessing'

import styles from './index.module.scss'
import { Vector2 } from 'three'

const Model = () => {
  const { scene } = useGLTF(ScenePot)
  const ref = useRef<{
    rotation: { x: number; y: number; z: number }
  }>()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      // clock swing animate
      ref.current.rotation.y = (1 + Math.sin(t / 0.25)) / 10
    }
  })

  useControls('My folder', {
    showLighting: true,
    showStats: false,
  })
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
    console.log(e?.target)
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
          <Glitch
            delay={new Vector2(1.5, 1.5)} // min and max glitch delay
            duration={new Vector2(0.5, 1.0)} // min and max glitch delay
            strength={new Vector2(0.9, 0.9)} // min and max glitch delay
            mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
          {/* <Noise premultiply={false} blendFunction={BlendFunction.EXCLUSION} /> */}
        </EffectComposer>
      </Canvas>
      <A11yAnnouncer />
    </Suspense>
  )
}

export default function TVLoader() {
  return (
    <div className={styles.modelLayer}>
      <ModelLayer />
    </div>
  )
}
