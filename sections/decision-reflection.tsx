import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function DecisionReflection() {
  return (
    <section id="decision" className="proposal-section bg-white">
      <div className="proposal-container flex flex-col gap-14">
        <SectionHeading
          title="Cada mes que pasa es una oportunidad que todavía no está disponible para tus clientes."
          className="max-w-5xl"
        />

        <Reveal className="max-w-3xl md:max-w-[34rem] lg:max-w-3xl">
          <div className="flex flex-col gap-6 text-base leading-8 text-olive-deep sm:text-lg sm:leading-9">
            <p>
              Hoy muchas personas descubren negocios por internet antes de escribir un mensaje o visitar una tienda. Mientras tu catálogo, tus promociones y tus formas de compra no estén disponibles de forma sencilla, algunas ventas simplemente no llegarán a producirse.
            </p>
            <p>
              No se trata de tener una tienda online por tenerla. Se trata de facilitar que más personas encuentren tus productos, confíen en tu marca y puedan comprar con mayor comodidad.
            </p>
            <p>Cuando decidas comenzar, ese proceso simplemente empezará antes.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
