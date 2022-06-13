
module.exports ={
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '//',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ]
  },
  basePath: '/home',
}
