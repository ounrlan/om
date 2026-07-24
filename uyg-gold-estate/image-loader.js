/**
 * GitHub Pages statik yayını için görsel yükleyici:
 * proje alt yolunu (basePath) görsel adreslerine ekler.
 */
export default function imageLoader({ src }) {
  return `/uyg-gold-estate${src}`;
}
