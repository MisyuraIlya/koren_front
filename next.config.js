/** @type {import('next').NextConfig} */
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
        destination: `http://localhost:4001/auth/:slug*`
      },
      {
        source: '/courses/:slug*',
        destination: `http://localhost:4001/courses/:slug*`
      },
      {
        source: '/exercises/:slug*',
        destination: `http://localhost:4001/exercises/:slug*`
      },
      {
        source: '/answers/:slug*',
        destination: `http://localhost:4001/answers/:slug*`
      }
    ]
  }
}

module.exports = nextConfig
