/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true
}

module.exports = withBundleAnalyzer(nextConfig)
