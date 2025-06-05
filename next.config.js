const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/styles');
    return config;
  },
};

module.exports = nextConfig;