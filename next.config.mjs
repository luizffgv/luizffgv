/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  allowedDevOrigins: ["192.168.*.*"],
  reactCompiler: true,
};

export default nextConfig;
