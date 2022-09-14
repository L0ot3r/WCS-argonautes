/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.wildcodeschool.com"]
  }
}

module.exports = nextConfig
