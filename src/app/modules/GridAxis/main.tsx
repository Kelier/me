import { Plane, Text } from '@react-three/drei'
import { Euler, Quaternion } from 'three'

const XZPlane = ({ size }: { size: number }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[1.5 * Math.PI, 0, 0]}
    position={[0, 0, 0]}
    scale={[500, 500, 500]}
  >
    <meshStandardMaterial attach="material" color="#f9c74f" />
  </Plane>
)

const XYPlane = ({ size }: { size: number }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[0, 0, 0]}
    position={[0, 0, 0]}
    scale={[500, 500, 500]}
  >
    <meshStandardMaterial attach="material" color="#d33939" wireframe />
  </Plane>
)

const YZPlane = ({ size }: { size: number }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[0, Math.PI / 2, 0]}
    position={[0, 0, 0]}
    scale={[500, 500, 500]}
  >
    <meshStandardMaterial attach="material" color="#d33939" wireframe />
  </Plane>
)

export default function GridAxis({ size }: { size: number }) {
  return (
    <group>
      {/* <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[size / 2 + 400, 0, 0]}
        scale={[50, 50, 50]}
      >
        X+
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[-size / 2 - 400, 0, 0]}
        scale={[50, 50, 50]}
      >
        X-
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, size / 2 + 400, 0]}
        scale={[50, 50, 50]}
      >
        Y+
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, -size / 2 - 400, 0]}
        scale={[50, 50, 50]}
      >
        Y-
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, size / 2 + 400]}
        scale={[50, 50, 50]}
      >
        Z+
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, -size / 2 - 400]}
        scale={[50, 50, 50]}
      >
        Z-
      </Text> */}
      <XZPlane size={size} />
      <XYPlane size={size} />
      <YZPlane size={size} />
    </group>
  )
}
