'use client'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function TextLayer() {
  return (
    <Canvas>
      <group>
        <Text
          color={'#fff'}
          strokeColor={'#000'}
          strokeWidth={20}
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[1.2, 1.2, 1.2]}
        >
          2020-2032
        </Text>
      </group>
      {/* <EffectComposer> */}
      {/* <Glitch
            delay={new Vector2(1.5, 1.5)} // min and max glitch delay
            duration={new Vector2(0.5, 1.0)} // min and max glitch delay
            strength={new Vector2(0.01, 0.01)} // min and max glitch delay
            chromaticAberrationOffset={new Vector2(0.01, 0.01)} // min and max glitch delay
            dtSize={10}
            columns={0.2}
            // mode={GlitchMode.DISABLED} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          /> */}
      {/* <Noise premultiply={false} blendFunction={BlendFunction.PIN_LIGHT} /> */}
      {/* </EffectComposer> */}
    </Canvas>
  )
}
