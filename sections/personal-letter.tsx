import Image from "next/image";
import heroBouquet from "@/assets/photography/hero-bouquet.png";
import { Reveal } from "@/components/motion/reveal";

export function PersonalLetter() {
  return (
    <section id="carta" className="proposal-section relative overflow-hidden bg-cream">
      <div className="absolute inset-y-0 left-0 hidden w-[30%] md:block">
        <Image
          src={heroBouquet}
          alt=""
          fill
          className="scale-110 object-cover object-right opacity-35 blur-[3px]"
          sizes="30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream" />
      </div>
      <div className="proposal-container relative grid md:grid-cols-[0.34fr_0.66fr]">
        <div />
        <Reveal className="max-w-3xl">
          <article className="flex flex-col gap-7">
            <h2 className="section-title text-olive">Hola Karen,</h2>
            <div className="flex max-w-[42rem] flex-col gap-5 text-base leading-8 text-olive-deep sm:text-lg sm:leading-9">
              <p>Gracias por tomarte el tiempo de revisar esta propuesta.</p>
              <p>
                Estuve viendo las redes sociales de La Molina Florería y me gustó mucho la forma en que presentas tu trabajo. La idea no es cambiar la manera en la que hoy vendes, sino complementar lo que ya haces con una página web que te permita organizar mejor tu catálogo, facilitar la gestión de pedidos y hacer que tus productos sean más fáciles de encontrar y comprar.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
