/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.glb' {
  const value: string
  export default value
}

// 在你的项目中定义一个自定义类型
declare namespace JSX {
  interface IntrinsicElements {
    customShaderMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }
}
