/**
 * GitHub Pages görsel yükleyicisi.
 * Statik dışa aktarımda next/image basePath'i src'ye eklemediği için
 * tüm yerel görsellere /eniscoskun-estate önekini burada ekliyoruz.
 * (Yalnızca GITHUB_PAGES=true derlemesinde kullanılır; lokal etkilenmez.)
 */
const BASE_PATH = "/eniscoskun-estate";

export default function ghPagesImageLoader({ src }) {
  if (src.startsWith("http")) return src;
  return `${BASE_PATH}${src}`;
}
