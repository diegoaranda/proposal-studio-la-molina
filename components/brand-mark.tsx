import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      role="img"
      className={cn("inline-flex flex-col items-center text-olive", className)}
      aria-label="Identificador de La Molina Florería"
    >
      <span className="font-serif text-[1.45rem] leading-none tracking-[0.12em] sm:text-[1.75rem]">
        LA MOLINA
      </span>
      <span className="mt-2 flex items-center gap-3 text-[0.55rem] font-medium tracking-[0.48em] sm:text-[0.62rem]">
        <span aria-hidden="true" className="h-px w-7 bg-gold" />
        FLORERÍA
        <span aria-hidden="true" className="h-px w-7 bg-gold" />
      </span>
    </div>
  );
}
