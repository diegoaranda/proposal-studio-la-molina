import Image from "next/image";
import { Check } from "lucide-react";
import understandingBouquet from "@/assets/photography/understanding-bouquet.png";
import { Reveal, ScaleReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { businessGoals, currentBusiness } from "@/lib/content";

function UnderstandingList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-serif text-3xl text-olive sm:text-4xl">{title}</h3>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-olive-deep sm:text-base">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
              <Check aria-hidden="true" className="size-3.5" strokeWidth={1.4} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BusinessUnderstanding() {
  return (
    <section id="entendimiento" className="proposal-section bg-white">
      <div className="proposal-container grid items-center gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
        <ScaleReveal className="relative min-h-[32rem] overflow-hidden rounded-[1.75rem] sm:min-h-[42rem]">
          <Image
            src={understandingBouquet}
            alt="Detalle de flores rosa y marfil con follaje verde"
            fill
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
        </ScaleReveal>

        <div className="flex flex-col gap-12">
          <SectionHeading
            title="Todo lo que ya has construido. Y lo que puede venir"
            description="La Molina Florería ya tiene algo que no se puede fabricar: confianza, cercanía y una forma muy tuya de hacer las cosas. El siguiente paso es llevar ese mismo cuidado a cada compra."
          />
          <Reveal delay={0.08} className="relative grid gap-12 sm:grid-cols-2 sm:gap-10">
            <div aria-hidden="true" className="absolute top-4 right-1/2 hidden h-px w-[44%] translate-x-1/2 bg-gold sm:block" />
            <UnderstandingList title="Hoy" items={currentBusiness} />
            <UnderstandingList title="El siguiente paso" items={businessGoals} />
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-2xl font-serif text-2xl leading-snug text-olive sm:text-3xl">
              Lo que ya has construido merece una experiencia de compra a la misma altura. Ahora imaginemos cómo podría sentirse para cada cliente.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
