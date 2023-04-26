/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // webpack: (config) => {
  //   // For glb file
  //   config.module.rules.push({
  //     test: /\.(glb)$/,
  //     use: {
  //       loader: 'file-loader',
  //       options: {
  //         name: '[name].[ext]', // keep the original name
  //         // publicPath: '/_next/static',
  //         // outputPath: 'static',
  //       },
  //     },
  //   })
  //   //   // for img
  //   //   // config.module.rules.push({
  //   //   //   test: /\.(png|svg|jpg|jpeg|bin|gif|avif)$/,
  //   //   //   loader: 'file-loader',
  //   //   //   options: {
  //   //   //     name: '[name].[ext]',
  //   //   //     publicPath: '/_next/static',
  //   //   //     outputPath: 'static',
  //   //   //   },
  //   //   // })
  //   return config
  // },
  // output: 'export',
  // distDir: 'dist',
}

module.exports = nextConfig
