import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/content";

export function Timeline() {
  return (
    <section id="proceso" className="proposal-section bg-white">
      <div className="proposal-container flex flex-col gap-16">
        <SectionHeading
          title="Así lo haríamos juntos"
          description="Siempre sabrás dónde estamos y qué necesito de ti para seguir avanzando."
        />

        <div className="hidden md:block">
          <div className="relative grid grid-cols-6">
            <div aria-hidden="true" className="absolute top-7 right-4 left-4 h-px bg-gold" />
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="relative flex flex-col items-center gap-5 text-center">
                  <span className="z-10 flex size-14 items-center justify-center rounded-full border border-gold bg-white font-serif text-xl text-olive">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-olive sm:text-base">{step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <ol className="relative flex flex-col gap-0 pl-3 md:hidden">
          <div aria-hidden="true" className="absolute top-6 bottom-6 left-[1.65rem] w-px bg-gold" />
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <li className="relative flex items-center gap-5 py-4">
                <span className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-gold bg-white font-serif text-lg text-olive">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-olive">{step}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
