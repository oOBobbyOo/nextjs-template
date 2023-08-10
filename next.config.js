const withPlugins = require('next-compose-plugins')
const { withContentlayer } = require('next-contentlayer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true
})

const plugins = [[withContentlayer], [withBundleAnalyzer]]

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  redirects() {
    return [
      {
        source: '/components',
        destination: '/docs/components/accordion',
        permanent: true
      },
      {
        source: '/docs/components',
        destination: '/docs/components/accordion',
        permanent: true
      }
    ]
  }
}

module.exports = withPlugins([...plugins], nextConfig)
