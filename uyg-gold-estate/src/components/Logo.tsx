import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="UYG Gold Estate logosu"
        width={42}
        height={42}
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-[0.18em] text-cream">
          UYG <span className="text-gold">GOLD</span>
        </span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.5em] text-stone">
          Estate
        </span>
      </span>
    </span>
  );
}
