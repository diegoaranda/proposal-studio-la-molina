import {
  CreditCard,
  Megaphone,
  MessageCircle,
  PackageCheck,
  Settings2,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { Reveal, ScaleReveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StorePreview } from "@/components/store-preview";
import { proposalFeatures } from "@/lib/content";

const icons: LucideIcon[] = [ShoppingBag, CreditCard, Megaphone, MessageCircle, Settings2, PackageCheck];

function FeatureList({ start, end }: { start: number; end: number }) {
  return (
    <div className="flex flex-col">
      {proposalFeatures.slice(start, end).map((feature, index) => {
        const Icon = icons[start + index];
        return (
          <Reveal key={feature.title} delay={index * 0.06}>
            <div className="flex gap-4 border-b border-border py-6 first:pt-0 last:border-b-0">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-mist text-olive">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.25} />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-2xl text-olive">{feature.title}</h3>
                <p className="text-sm leading-6 text-warm-gray">{feature.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ProposalFeatures() {
  return (
    <section id="propuesta" className="proposal-section bg-cream">
      <div className="proposal-container flex flex-col gap-14">
        <SectionHeading
          title="Así compraría una persona"
          description="Sin esperar respuestas para avanzar y sin perder la cercanía cuando realmente la necesita."
        />
        <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.55fr_0.72fr]">
          <FeatureList start={0} end={3} />
          <ScaleReveal>
            <StorePreview compact />
          </ScaleReveal>
          <FeatureList start={3} end={6} />
        </div>
      </div>
    </section>
  );
}
