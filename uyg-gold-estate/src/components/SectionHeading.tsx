import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`eyebrow mb-5 ${align === "center" ? "justify-center" : ""}`}>
        {eyebrow}
      </p>
      <h2 className="heading-lg">
        {title} {accent && <span className="accent-serif">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-stone">{description}</p>
      )}
    </Reveal>
  );
}
