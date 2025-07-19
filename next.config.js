/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/new_website' : '',
  images: {
    unoptimized: true
  },
  experimental: {
    useLightningcss: false
  }
};

module.exports = nextConfig;