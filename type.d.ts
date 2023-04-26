/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.glb' {
  const value: string
  export default value
}

declare global {
  namespace TSX {
    interface IntrinsicElements {
      group: any
      geometry: any
      lineBasicMaterial: any
      mesh: any
      octahedronGeometry: any
      meshBasicMaterial: any
    }
  }
}
