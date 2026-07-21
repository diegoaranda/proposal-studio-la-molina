import Image from "next/image";
import {
  ChartNoAxesCombined,
  Clock3,
  HeartHandshake,
  MessageCircleMore,
  ShieldCheck,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import closingBouquet from "@/assets/photography/closing-bouquet.png";
import { Reveal, ScaleReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { benefits } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [ShieldCheck, Clock3, ShoppingBag, MessageCircleMore, HeartHandshake, ChartNoAxesCombined];

export function Benefits() {
  return (
    <section id="beneficios" className="proposal-section bg-cream">
      <div className="proposal-container flex flex-col gap-14">
        <SectionHeading
          title="Lo que cambiaría para ti"
          description="La tienda trabaja en segundo plano mientras tú sigues cuidando cada arreglo."
          align="center"
        />
        <div className="grid overflow-hidden rounded-[1.75rem] border border-border bg-white lg:grid-cols-[0.42fr_0.58fr]">
          <ScaleReveal className="relative min-h-[25rem] lg:min-h-full">
            <Image
              src={closingBouquet}
              alt="Arreglo floral de rosas rosa y marfil"
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </ScaleReveal>
          <div className="grid auto-rows-fr grid-cols-1 items-stretch p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <Reveal
                  key={benefit}
                  delay={index * 0.05}
                  className={cn(
                    "h-full border-b border-border",
                    index === benefits.length - 1 && "border-b-0",
                    index % 2 === 0 ? "sm:border-r" : "sm:border-r-0",
                    index >= 4 ? "sm:border-b-0" : "sm:border-b",
                    index % 3 === 2 ? "lg:border-r-0" : "lg:border-r",
                    index >= 3 ? "lg:border-b-0" : "lg:border-b",
                  )}
                >
                  <div className="grid h-full grid-rows-[1.75rem_1fr] justify-items-center gap-4 p-6 text-center sm:p-7 lg:p-6 xl:p-8">
                    <Icon aria-hidden="true" className="size-7 text-rose-petal" strokeWidth={1.2} />
                    <p className="max-w-[18rem] text-sm leading-6 text-olive sm:max-w-[13rem] sm:text-base">
                      {benefit}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
