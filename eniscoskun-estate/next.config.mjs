/** @type {import('next').NextConfig} */

// GitHub Pages derlemesi: GITHUB_PAGES=true ile statik dışa aktarım yapılır
// ve site https://ounrlan.github.io/eniscoskun-estate/ altında çalışacak
// şekilde basePath eklenir. Lokal geliştirme/sunum bundan etkilenmez.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/eniscoskun-estate",
        assetPrefix: "/eniscoskun-estate",
        images: { loader: "custom", loaderFile: "./image-loader.mjs" },
      }
    : {
        images: {
          remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "i.pravatar.cc" },
          ],
        },
      }),
};

export default nextConfig;
