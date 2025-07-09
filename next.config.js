/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/live-account',
        destination: 'https://mygtcportal.com',
        permanent: true,
      },
      {
        source: '/live-account',
        has: [
          {
            type: 'host',
            value: 'www.gtcfx.com',
          },
        ],
        destination: 'https://mygtcportal.com',
        permanent: true,
      },
    ];
  },
  transpilePackages: ['@gtcfx-frontend/gtcfx-frontend'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
      ".cjs": [".cts", ".cjs"],
    };
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com', 'api.gtcfx.com'],
  },
};

module.exports = nextConfig;
