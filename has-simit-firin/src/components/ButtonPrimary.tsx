import type { ReactNode } from "react";

/**
 * İmza birincil buton. .btn-shell sabit susam gölge-kartını tutar;
 * içteki .btn-primary hover'da -4,-4 kayarak kartı ortaya çıkarır.
 */
export default function ButtonPrimary({
  href,
  children,
  variant = "pine",
  external = false,
  ariaLabel,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "pine" | "cream";
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <span className="btn-shell">
      <a
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`btn-primary ${
          variant === "cream" ? "btn-primary--cream" : ""
        } ${className}`}
      >
        {children}
      </a>
    </span>
  );
}
