import { Reveal, ScaleReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StorePreview } from "@/components/store-preview";

export function FutureExperience() {
  return (
    <section id="experiencia" className="proposal-section overflow-hidden bg-white">
      <div className="proposal-container flex flex-col gap-16">
        <SectionHeading
          title="Así podría ser la nueva experiencia de compra"
          description="Pensemos en una persona que acaba de descubrir uno de tus arreglos en Instagram."
        />
        <Reveal className="max-w-3xl">
          <p className="text-base leading-8 text-olive-deep sm:text-lg sm:leading-9">
            Algo en esas flores le recuerda a alguien. Entra a la tienda, recorre las opciones y encuentra el arreglo ideal. Agrega una dedicatoria, elige la fecha y la dirección de entrega y realiza el pago. Mientras esa persona siente que encontró la forma perfecta de decir algo importante, tú recibes el pedido con todo lo necesario y listo para preparar.
          </p>
        </Reveal>
        <ScaleReveal>
          <StorePreview />
        </ScaleReveal>
        <Reveal>
          <p className="text-center text-sm text-warm-gray">Vista conceptual de la futura tienda online.</p>
        </Reveal>
      </div>
    </section>
  );
}
