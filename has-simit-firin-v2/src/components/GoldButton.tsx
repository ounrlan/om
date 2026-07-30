import type { ReactNode } from "react";

/**
 * İmza buton — altın hairline çerçeve; hover'da varak dolgusu soldan açılır
 * ve üzerinden bir ışık süpürmesi geçer. Stil .btn-gold içinde (globals.css).
 */
export default function GoldButton({
  href,
  children,
  variant = "outline",
  external = false,
  ariaLabel,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`btn-gold ${variant === "solid" ? "btn-gold--solid" : ""} ${className}`}
    >
      <span className="inline-flex items-center gap-3">{children}</span>
    </a>
  );
}
