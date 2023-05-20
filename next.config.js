/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.0.164:8080/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
