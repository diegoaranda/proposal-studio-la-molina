import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <h2 className="section-title text-olive">{title}</h2>
      {description ? <p className="section-lead">{description}</p> : null}
    </Reveal>
  );
}
