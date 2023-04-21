'use client'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, PerspectiveCamera, Shadow, useGLTF } from '@react-three/drei'

import type { OrbitControlsChangeEvent } from '@react-three/drei'

import ScenePot from '@/app/glTFs/gameboy.glb'
import { Suspense } from 'react'

import styles from './index.module.scss'

const Model = () => {
  const { scene } = useGLTF(ScenePot)
  console.log(2, scene)
  return (
    <primitive
      object={scene}
      dispose={null}
      rotation={[-Math.PI / 2.4, Math.PI / 36, Math.PI / 3]}
    />
  )
}

const checkThisAxis = (e: OrbitControlsChangeEvent | undefined) => {
  console.log(e?.target)
}

const ModelLayer = () => {
  useGLTF(ScenePot)
  return (
    <Suspense fallback={null}>
      <Canvas dpr={2} shadows>
        <PerspectiveCamera makeDefault position={[300, 700, 5]} resolution={1920} fov={75} />
        {/* <PerspectiveCamera makeDefault position={[640, -440, 500]} resolution={1920} fov={75} /> */}
        <ambientLight />
        <directionalLight />
        <Model />
        <OrbitControls enableZoom={false} onChange={checkThisAxis} />
        <Shadow color="#ca390f" colorStop={0.15} opacity={0.25} fog={false} />
      </Canvas>
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
