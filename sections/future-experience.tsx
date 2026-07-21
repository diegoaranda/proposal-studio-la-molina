import { CreditCard, PackageCheck, Smartphone } from "lucide-react";
import { Reveal, ScaleReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StorePreview } from "@/components/store-preview";

export function FutureExperience() {
  return (
    <section id="experiencia" className="proposal-section overflow-hidden bg-white">
      <div className="proposal-container flex flex-col gap-16">
        <SectionHeading
          title="Imagina este momento"
          description="Alguien descubre uno de tus arreglos en Instagram y quiere enviarlo ese mismo día."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Smartphone, title: "Lo descubre", text: "Abre un solo enlace desde Instagram." },
            { icon: CreditCard, title: "Lo elige", text: "Ve el precio, deja la dedicatoria y paga." },
            { icon: PackageCheck, title: "Tú lo recibes", text: "El pedido llega claro y listo para preparar." },
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-[1.5rem] border border-border bg-cream p-6 sm:p-7">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-mist text-olive">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.25} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-2xl text-olive">{step.title}</h3>
                    <p className="text-sm leading-6 text-warm-gray">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <ScaleReveal>
          <StorePreview />
        </ScaleReveal>
        <Reveal>
          <p className="text-center font-serif text-2xl text-olive sm:text-3xl">
            Menos tiempo repitiendo respuestas. Más tiempo creando arreglos que alguien va a recordar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
