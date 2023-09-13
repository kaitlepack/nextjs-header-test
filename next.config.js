/** @type {import('next').NextConfig} */
const nextConfig = {
  // add custom headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  }

}

module.exports = nextConfig
