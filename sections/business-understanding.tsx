import Image from "next/image";
import { Check, Minus } from "lucide-react";
import understandingBouquet from "@/assets/photography/understanding-bouquet.png";
import { Reveal, ScaleReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { businessGoals, currentBusiness } from "@/lib/content";

function UnderstandingList({
  title,
  items,
  after = false,
}: {
  title: string;
  items: readonly string[];
  after?: boolean;
}) {
  const Icon = after ? Check : Minus;

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-serif text-3xl text-olive sm:text-4xl">{title}</h3>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-olive-deep sm:text-base">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
              <Icon aria-hidden="true" className="size-3.5" strokeWidth={1.4} />
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
            title="Lo que entendí de tu día a día"
            description="Muestras cerca de 100 productos en redes, atiendes por WhatsApp y cobras con Izipay. La tienda puede reunirlo todo."
          />
          <Reveal delay={0.08} className="relative grid gap-12 sm:grid-cols-2 sm:gap-10">
            <div aria-hidden="true" className="absolute top-4 right-1/2 hidden h-px w-[44%] translate-x-1/2 bg-gold sm:block" />
            <UnderstandingList title="Antes" items={currentBusiness} />
            <UnderstandingList title="Después" items={businessGoals} after />
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-2xl font-serif text-2xl leading-snug text-olive sm:text-3xl">
              La diferencia está en hacer más sencillo lo que ya haces.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
