'use client'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
// import { EffectComposer, Glitch } from '@react-three/postprocessing'
// import { Vector2 } from 'three'

import { useSpring, animated } from '@react-spring/three'

export default function TextLayer() {
  const textRef = useRef(null)

  const spring = useSpring({
    from: { scale: [0.4, 0.4, 0.4] },
    to: { scale: [1, 1, 1] },
    config: {
      friction: 10,
    },
    delay: 0,
  })

  const [yearCount, setYearCount] = useState('32')
  const [timer, setTimer] = useState<NodeJS.Timer>()

  const randomYear = () => {
    setTimer(
      setInterval(() => {
        setYearCount(20 + parseInt(12 * Math.random() + '', 10) + '')
      }, parseInt(Math.random() * 1000 + '', 10))
    )
  }

  useEffect(() => {
    randomYear()
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Canvas ref={textRef}>
      <group>
        <animated.mesh {...spring}>
          <Text
            ref={textRef}
            color={'#fff'}
            strokeColor={'#000'}
            strokeWidth={20}
            anchorX="center"
            anchorY="middle"
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1.2, 1.2, 1.2]}
            font={'./fonts/MajorMonoDisplay-Regular.ttf'}
          >
            2020-20{yearCount}
          </Text>
        </animated.mesh>
      </group>
      {/*
      <EffectComposer>
        <Glitch
          delay={new Vector2(1.5, 1.5)} // min and max glitch delay
          duration={new Vector2(0.5, 1.0)} // min and max glitch delay
          strength={new Vector2(0.01, 0.01)} // min and max glitch delay
          chromaticAberrationOffset={new Vector2(0.01, 0.01)} // min and max glitch delay
          dtSize={10}
          columns={0.2}
          // mode={GlitchMode.DISABLED} // glitch mode
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
        {/* <Noise premultiply={false} blendFunction={BlendFunction.PIN_LIGHT} /> */}
      {/* </EffectComposer> */}
    </Canvas>
  )
}
