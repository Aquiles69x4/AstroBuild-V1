/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://backend-hazel-iota-16.vercel.app/',
  },
  images: {
    domains: [],
  },
}


module.exports = nextConfig
