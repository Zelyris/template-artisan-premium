type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  introduction?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  introduction,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  const centered = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${centered}`}>
      <p className={`eyebrow ${inverse ? "text-accent-soft" : "text-brand"}`}>{eyebrow}</p>
      <h2 className={`display-title mt-5 ${inverse ? "text-linen" : "text-foreground"}`}>{title}</h2>
      {introduction ? (
        <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${inverse ? "text-linen/70" : "text-muted"} ${centered}`}>
          {introduction}
        </p>
      ) : null}
    </div>
  );
}
