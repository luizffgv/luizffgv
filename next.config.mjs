/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  allowedDevOrigins: ["192.168.*.*", "100.*.*.*", "*.ts.net"],
  reactCompiler: true,
};

export default nextConfig;
