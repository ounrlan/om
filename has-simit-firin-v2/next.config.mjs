const isProd = process.env.NODE_ENV === "production";
// GitHub Pages: https://ounrlan.github.io/has-simit-v2/
const basePath = isProd ? "/has-simit-v2" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Statik export'ta Next görsel optimizasyonu yok — dosyalar olduğu gibi servis edilir
  images: { unoptimized: true },
};

export default nextConfig;
