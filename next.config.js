/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  onDemandEntries: {
    onError: (err) => {
      console.log(`Ignoring ${err} error`);
    },
  },
};

module.exports = nextConfig;
