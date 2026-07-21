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
              <p>Gracias por contarme un poquito sobre La Molina Florería.</p>
              <p>
                Al escucharte pensé algo: no vendes solo flores. Ayudas a celebrar, acompañar y decir lo que a veces cuesta poner en palabras.
              </p>
              <p>
                Eso se siente cercano, cuidado y muy tuyo. Me gustaría que una persona lo sintiera también al comprar.
              </p>
              <p>
                Instagram y WhatsApp seguirán ahí. La tienda solo ordenará catálogo, precios y pedidos.
              </p>
              <p className="font-medium text-olive">Así imagino el siguiente capítulo de La Molina Florería.</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
