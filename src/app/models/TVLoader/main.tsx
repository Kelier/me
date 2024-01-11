'use client'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Shadow, SpotLight, PerspectiveCamera } from '@react-three/drei'

import { Suspense, useEffect, useRef, useState } from 'react'

import GridAxis from '@/app/modules/GridAxis/main'

import styles from './index.module.sass'

import Model from '@/app/components/model/GameBoy'
import { BlendFunction } from 'postprocessing'
import { EffectComposer, Noise } from '@react-three/postprocessing'

const ModelLayer = () => {
  const [randomColor, setRandomColor] = useState('transparent')

  useEffect(() => {
    setRandomColor('#ff7b00')
  }, [])

  const cameraRef = useRef()

  return (
    <Suspense fallback={<span>🔦</span>}>
      <Canvas dpr={2} shadows>
        <PerspectiveCamera
          makeDefault
          fov={10}
          near={0.15}
          far={200}
          position={[0, 80, 3]}
          ref={cameraRef}
        />
        <ambientLight />
        <GridAxis size={1}></GridAxis>
        <directionalLight />
        <SpotLight
          distance={1}
          angle={0.85}
          attenuation={5}
          anglePower={5}
          color={randomColor}
        ></SpotLight>
        <Model proxyCamera={cameraRef} />
        <OrbitControls enableZoom={false} autoRotate />
        <Shadow color="#ca390f" colorStop={0.15} opacity={0.25} fog={false} />
        <EffectComposer>
          <Noise premultiply={true} blendFunction={BlendFunction.PIN_LIGHT} />
        </EffectComposer>
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
