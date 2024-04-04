/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const {headers} = require("next/headers");

const path = require('path')

const LOCAL_API_BASE_PATH = 'http://localhost:4001'
const PUBLIC_API_BASE_PATH = 'http://localhost:4001'

const PUBLIC_API_MEDIA = 'http://localhost:3000'
const BACKEND_ENDPOINT_PORT = '4001'


module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'standalone',
    reactStrictMode:false,
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      domains: ['localhost']
    },
  }
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      //reactStrictMode: true,
      env: {
        ...nextConfig.env,
        NEXT_PUBLIC_APP_ENTRYPOINT: `${LOCAL_API_BASE_PATH}`,
        NEXT_PUBLIC_MEDIA: PUBLIC_API_MEDIA,
      },
      async rewrites() {
        return [
          {
            source: '/auth/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/auth/:slug*`
          },
          {
            source: '/courses/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/courses/:slug*`
          },
          {
            source: '/exercises/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/exercises/:slug*`
          },
          {
            source: '/answers/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/answers/:slug*`
          },
          {
            source: '/school/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/school/:slug*`
          },
          {
            source: '/class/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/class/:slug*`
          },
          {
            source: '/group/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/group/:slug*`
          },
          {
            source: '/confirmation/:slug*',
            destination: `http://localhost:${BACKEND_ENDPOINT_PORT}/confirmation/:slug*`
          }
        ]
      }
    }
  }

  return {
    ...nextConfig,
    env: {
      ...nextConfig.env,
      NEXT_PUBLIC_APP_ENTRYPOINT: `${PUBLIC_API_BASE_PATH}/api`,
    },
    async rewrites() {
      return [
        {
          source: '/auth/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/auth/:slug*`
        },
        {
          source: '/courses/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/courses/:slug*`
        },
        {
          source: '/exercises/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/exercises/:slug*`
        },
        {
          source: '/answers/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/answers/:slug*`
        },
        {
          source: '/school/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/school/:slug*`
        },
        {
          source: '/class/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/class/:slug*`
        },
        {
          source: '/group/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/group/:slug*`
        },
        {
          source: '/confirmation/:slug*',
          destination: `http://${PUBLIC_API_BASE_PATH}:${BACKEND_ENDPOINT_PORT}/confirmation/:slug*`
        }
      ]
    }
  }

}