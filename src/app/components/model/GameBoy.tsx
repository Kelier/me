'use client'
import { useGLTF } from '@react-three/drei'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

export default function Model(props: any) {
  // not export type
  const { scene, nodes, materials } = useGLTF('/glTFs/gameboy.glb') as unknown as {
    scene: Group
    nodes: any
    materials: any
  }
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
  console.log(2, scene, nodes, materials)
  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2.4, Math.PI / 36, Math.PI / 3]}
    >
      <group>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube3__0.geometry}
            material={materials['Scene_-_Root']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glTFs/gameboy.glb')
