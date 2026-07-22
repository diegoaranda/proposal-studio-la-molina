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
            <h2 className="section-title text-olive">¿Empezamos?</h2>
            <div className="flex flex-col gap-4 text-base leading-7 text-olive-deep">
              <p>Karen,</p>
              <p>
                Gracias por tomarte el tiempo de revisar esta propuesta.
              </p>
              <p>
                Espero que te haya permitido visualizar cómo una página web puede ayudar a hacer crecer La Molina Florería y facilitar la experiencia de tus clientes.
              </p>
              <p>
                Si sientes que esta propuesta es el camino correcto para tu negocio, estaré encantado de construirla contigo.
              </p>
              <p>
                Y si antes de comenzar quieres revisar algún detalle o resolver cualquier duda, con gusto lo vemos juntos.
              </p>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
