import Image from "next/image";
import { ArrowDown } from "lucide-react";
import heroBouquet from "@/assets/photography/hero-bouquet.png";
import { BrandMark } from "@/components/brand-mark";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="portada" className="relative min-h-[100svh] overflow-hidden bg-white">
      <Image
        src={heroBouquet}
        alt="Arreglo floral en tonos rosa, marfil y verde oliva"
        fill
        priority
        quality={92}
        className="object-cover object-[64%_center] sm:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,#fff_28%,transparent_58%)] md:bg-[linear-gradient(90deg,#fff_0%,#fff_34%,transparent_64%)]" />

      <div className="proposal-container relative z-10 flex min-h-[100svh] flex-col items-start justify-between py-8 sm:py-10">
        <Reveal direction="none">
          <BrandMark />
        </Reveal>

        <div className="flex max-w-[52rem] flex-col items-start gap-7 pb-14 pt-28 sm:gap-8 sm:pb-20 lg:absolute lg:top-[20%] lg:pb-0 lg:pt-0">
          <Reveal>
            <h1 className="display-title max-w-[12ch] text-olive lg:max-w-[20ch]">
              Cada flor cuenta una historia.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-olive-deep sm:text-2xl">
              Imaginemos el siguiente capítulo de La Molina Florería, Karen.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="#carta"
              className={cn(buttonVariants({ variant: "proposal", size: "proposal" }), "min-w-48")}
            >
              Seguir leyendo
            </a>
          </Reveal>
        </div>

        <a
          href="#carta"
          aria-label="Continuar a la carta personalizada"
          className="rounded-full p-2 text-gold transition-transform hover:translate-y-1"
        >
          <ArrowDown aria-hidden="true" className="size-6" strokeWidth={1.25} />
        </a>
      </div>
    </section>
  );
}
