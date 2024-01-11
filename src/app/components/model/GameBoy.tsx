'use client'
import { useGLTF } from '@react-three/drei'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

// const vertexShader = `
// void main() {
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }
// `

// const fragmentShader = `
// precision mediump float;
// uniform float time;
// void main() {
//   vec3 color = vec3(sin(time), cos(time * 0.25), 0.25);
//   gl_FragColor = vec4(color, 1.0);
// }
// `

// const customColor = new THREE.Color('#000')
// const CustomShaderMaterial = shaderMaterial({ color: customColor }, vertexShader, fragmentShader)

// extend({ CustomShaderMaterial })

export default function Model(props: any) {
  const { proxyCamera } = props

  // not export type
  const { nodes, materials } = useGLTF('/glTFs/disco.glb') as unknown as {
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

  const geometryNodes = useMemo(() => {
    const geometries = Object.values(nodes).filter((node: any) => {
      if (node.type === 'Mesh') {
        return node
      }
    })
    return geometries
  }, [nodes])

  // 使用 useFrame 在每一帧更新时间参数
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.6
      ref.current.rotation.x = Math.sin(clock.elapsedTime) - Math.cos(clock.elapsedTime * 0.3)
      ref.current.rotation.z = clock.elapsedTime * 1.2
    }
  })

  useFrame(({ clock }) => {
    if (proxyCamera.current) {
      // set camera
      proxyCamera.current.position.x = 5 + clock.elapsedTime * 0.2
      proxyCamera.current.position.y = 30 + Math.pow(clock.elapsedTime * 10, 1 / 3)
      Math.pow(clock.elapsedTime, 2) + clock.elapsedTime
      proxyCamera.current.position.z = 10 + Math.pow(clock.elapsedTime * 10, 1 / 4)
      Math.pow(clock.elapsedTime, 2) + Math.pow(clock.elapsedTime, 1 / 2)
      // proxyCamera.current.rotation.x = 5 + clock.elapsedTime * 0.2
      // proxyCamera.current.rotation.y = 10 + (clock.elapsedTime * 4) / 10
      // proxyCamera.current.rotation.z = 5 + clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={ref} {...props} dispose={null} rotate={[10.1, 10.1, 10.3]}>
      {geometryNodes?.map((geoNode: any, keyIndex) => {
        const meshDom = (
          <mesh
            geometry={geoNode.geometry}
            castShadow
            receiveShadow
            key={keyIndex + 'disco'}
            material={materials.disco}
          >
            <meshBasicMaterial attach="material" color={'#d53a3a'} />
            {/* <meshBasicMaterial color={'#d53a3a'} /> */}
          </mesh>
        )
        return meshDom
      })}
    </group>
  )
}

useGLTF.preload('/glTFs/disco.glb')
