import { useGLTF } from '@react-three/drei'

import ScenePot from '@/app/glTFs/gameboy.glb'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Model() {
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
