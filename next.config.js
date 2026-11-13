/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next's development router must resolve dynamic slugs normally.
  // Production remains a static export for GitHub Pages.
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: { unoptimized: true },
  poweredByHeader: false,
}

module.exports = nextConfig
