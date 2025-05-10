/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // for img
    config.module.rules.push({
      test: /\.(png|svg|jpg|jpeg|bin|gif|avif)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/_next/static',
        outputPath: '/static',
      },
    })

    return config
  },
  // output: 'export',
  // distDir: 'dist',
}

module.exports = nextConfig
