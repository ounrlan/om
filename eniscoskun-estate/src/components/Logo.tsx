import Image from "next/image";

/**
 * Marka kimliği — GERÇEK logo dosyaları (sahibinden mağaza logosundan
 * yerelleştirildi, şeffaf zemin):
 *  - /logo.png        → koyu metinli tam logo (açık zeminler)
 *  - /logo-white.png  → beyaz metinli tam logo (koyu zeminler)
 *  - /logo-mark.png   → yalnızca chevron işareti (her zeminde çalışır)
 * Daha yüksek çözünürlüklü orijinaliniz varsa aynı adlarla public/
 * klasörüne koymanız yeterli.
 */

export function LogoMark({
  className = "",
  width = 46,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={width}
      height={Math.round((width * 65) / 64)}
      className={className}
    />
  );
}

export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Image
      src={dark ? "/logo-white.png" : "/logo.png"}
      alt="Enis Coşkun Gayrimenkul"
      width={168}
      height={47}
      priority
      className={`h-11 w-auto ${className}`}
    />
  );
}
