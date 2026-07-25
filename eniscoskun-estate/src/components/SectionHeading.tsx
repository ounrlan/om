import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  /** Koyu zeminli bölümlerde açık renk metin için */
  light?: boolean;
}) {
  return (
    <Reveal
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`eyebrow mb-5 ${light ? "eyebrow-light" : ""} ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`heading-lg ${light ? "!text-white" : ""}`}>
        {title}{" "}
        {accent && (
          <span className={light ? "accent-serif-light" : "accent-serif"}>
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? "text-white/65" : "text-ash"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
