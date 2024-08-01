/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }, { hostname: "floriankiem.com" }],
  },
};

export default nextConfig;
