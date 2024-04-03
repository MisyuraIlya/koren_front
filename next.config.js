/** @type {import('next').NextConfig} */

const LOCAL_API_BASE_PATH = 'http://localhost:4001'
const PUBLIC_API_BASE_PATH = 'http://3.74.228.194:4001'

const nextConfig = {

  reactStrictMode: false,
  env: {
    SERVER_URL: process.env.SERVER_URL
  }, 
  images: {
    domains: ['localhost','3.74.228.194']
  },
  async rewrites() {
    return [
      {
        source: '/auth/:slug*',
        destination: `http://3.74.228.194:4001/auth/:slug*`
      },
      {
        source: '/courses/:slug*',
        destination: `http://3.74.228.194:4001/courses/:slug*`
      },
      {
        source: '/exercises/:slug*',
        destination: `http://3.74.228.194:4001/exercises/:slug*`
      },
      {
        source: '/answers/:slug*',
        destination: `http://3.74.228.194:4001/answers/:slug*`
      },
      {
        source: '/school/:slug*',
        destination: `http://3.74.228.194:4001/answers/:slug*`
      },
      {
        source: '/class/:slug*',
        destination: `http://3.74.228.194:4001/answers/:slug*`
      },
      {
        source: '/group/:slug*',
        destination: `http://3.74.228.194:4001/answers/:slug*`
      },
      {
        source: '/confirmation/:slug*',
        destination: `http://3.74.228.194:4001/answers/:slug*`
      }
    ]
  }
}

module.exports = nextConfig
