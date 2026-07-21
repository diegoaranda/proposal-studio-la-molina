import Image from "next/image";
import closingBouquet from "@/assets/photography/closing-bouquet.png";
import { Reveal, ScaleReveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { contactLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section id="proximos-pasos" className="proposal-section bg-cream">
      <div className="proposal-container">
        <div className="media-shadow grid overflow-hidden rounded-[1.75rem] border border-border bg-white lg:grid-cols-2">
          <ScaleReveal className="relative min-h-[24rem] lg:min-h-[38rem]">
            <Image
              src={closingBouquet}
              alt="Rosas rosa y marfil con follaje verde"
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScaleReveal>
          <Reveal className="flex flex-col justify-center gap-8 p-8 sm:p-12 lg:p-16" direction="right">
            <h2 className="section-title text-olive">El siguiente capítulo puede comenzar aquí</h2>
            <div className="flex flex-col gap-4 text-base leading-7 text-olive-deep">
              <p>Karen,</p>
              <p>
                Hay negocios que venden productos. Otros ayudan a crear recuerdos.
              </p>
              <p>
                La Molina Florería pertenece al segundo grupo. Cada arreglo acompaña una emoción y convierte un momento en algo que alguien querrá recordar.
              </p>
              <p>Será un gusto acompañarte a construir el siguiente capítulo de esa historia.</p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={contactLinks.startProject}
                className={cn(buttonVariants({ variant: "proposal", size: "proposal" }), "text-center")}
              >
                Quiero comenzar
              </a>
              <a
                href={contactLinks.whatsApp}
                className={cn(buttonVariants({ variant: "proposalOutline", size: "proposal" }), "text-center")}
              >
                Conversemos
              </a>
            </div>
            <p className="text-sm leading-6 text-warm-gray">
              Preparado especialmente para Karen y La Molina Florería.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
