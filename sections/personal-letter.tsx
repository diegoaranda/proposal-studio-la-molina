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
            <h2 className="section-title text-olive">Karen,</h2>
            <div className="flex max-w-[42rem] flex-col gap-5 text-base leading-8 text-olive-deep sm:text-lg sm:leading-9">
              <p>Gracias por abrirme un poquito las puertas de La Molina Florería.</p>
              <p>
                Al escucharte hablar de tu trabajo, hay algo que queda claro: cada arreglo acompaña una emoción, un cumpleaños, un aniversario, una bienvenida o un momento que alguien quiere recordar.
              </p>
              <p>
                Lo que has construido ya tiene algo muy valioso. Se siente cercano, cuidado y profundamente tuyo.
              </p>
              <p>
                Esa misma esencia puede acompañar a cada persona desde que descubre un arreglo hasta que lo elige para alguien especial. Instagram y WhatsApp seguirán siendo parte de esa cercanía. La tienda será un nuevo lugar donde todo se sienta igual de cuidado.
              </p>
              <p className="font-medium text-olive">Y siento que este puede ser un capítulo muy bonito para La Molina Florería.</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
