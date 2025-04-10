/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui",'next-international', 'international-types'],
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
  // i18n: {
  //   locales: ['en-US', 'kr'],
  //   defaultLocale: 'en-US',
  // }
}

export default nextConfig
