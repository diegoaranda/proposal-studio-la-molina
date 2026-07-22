import {
  Headphones,
  HeartHandshake,
  MonitorCheck,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { continuityServices } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [MonitorCheck, Wrench, ShieldCheck, Headphones, SlidersHorizontal, HeartHandshake];

export function ContinuityPlan() {
  return (
    <section id="continuidad" className="proposal-section bg-white">
      <div className="proposal-container flex flex-col gap-14">
        <SectionHeading
          title="Acompañamiento después de la entrega"
          description="Si quieres ayuda para mantener la tienda al día, puedes elegir esta opción mensual y voluntaria."
        />

        <Reveal>
          <article className="media-shadow overflow-hidden rounded-[1.75rem] border border-border bg-white">
            <div className="flex flex-col gap-7 border-b border-border p-7 sm:p-10 md:flex-row md:items-end md:justify-between">
              <div className="flex max-w-2xl flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose-petal">
                  Opción mensual · Tú decides
                </p>
                <h3 className="font-serif text-3xl leading-tight text-olive sm:text-4xl">
                  Para que tengas a quién escribir cuando lo necesites.
                </h3>
              </div>
              <p className="shrink-0 font-serif text-5xl leading-none text-olive sm:text-6xl">
                USD 35 <span className="text-2xl text-warm-gray sm:text-3xl">/ mes</span>
              </p>
            </div>

            <div className="grid items-stretch md:grid-cols-2">
              {continuityServices.map((service, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={service}
                    className={cn(
                      "flex h-full items-start gap-4 border-t border-border p-6 sm:p-8",
                      index % 2 === 0 && "md:border-r",
                      index < 2 && "md:border-t-0",
                    )}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-mist text-olive">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.2} />
                    </span>
                    <p className="text-sm leading-7 text-olive-deep sm:text-base">{service}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </Reveal>

      </div>
    </section>
  );
}
