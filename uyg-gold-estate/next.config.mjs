const isExport = process.env.EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // "EXPORT=1 npm run build" -> GitHub Pages için statik çıktı (out/)
  ...(isExport
    ? {
        output: "export",
        basePath: "/uyg-gold-estate",
        images: {
          loader: "custom",
          loaderFile: "./image-loader.js",
        },
      }
    : {}),
};

export default nextConfig;
