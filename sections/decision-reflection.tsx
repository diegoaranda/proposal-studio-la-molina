import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function DecisionReflection() {
  return (
    <section id="decision" className="proposal-section bg-white">
      <div className="proposal-container flex flex-col gap-14">
        <SectionHeading
          title="Esperar también es una decisión"
          className="max-w-5xl"
        />

        <Reveal className="max-w-3xl md:max-w-[34rem] lg:max-w-3xl">
          <div className="flex flex-col gap-5 text-base leading-8 text-olive-deep sm:text-lg sm:leading-9">
            <p>
              Muchas personas miran un negocio en internet antes de escribir. Si no encuentran catálogo, precios o una forma sencilla de comprar, algunas seguirán de largo.
            </p>
            <p>
              No necesitas una tienda por tenerla. Puede convertir el interés que ya generan tus flores en pedidos más fáciles de recibir.
            </p>
            <p>Cuando te sientas lista, podemos empezar.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
