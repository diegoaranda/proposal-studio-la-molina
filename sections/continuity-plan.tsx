import {
  Headphones,
  HeartHandshake,
  MonitorCheck,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { continuityServices } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [MonitorCheck, Wrench, ShieldCheck, Headphones, SlidersHorizontal, HeartHandshake];

export function ContinuityPlan() {
  return (
    <section id="continuidad" className="proposal-section bg-white">
      <div className="proposal-container flex flex-col gap-14">
        <SectionHeading
          title="Después de la entrega, puedes seguir contando con acompañamiento"
          description="Una tienda online puede necesitar pequeños ajustes, revisiones o actualizaciones con el paso del tiempo."
        />
        <Reveal className="max-w-3xl">
          <p className="text-base leading-8 text-olive-deep sm:text-lg sm:leading-9">
            Por eso, existe la opción de contar con un plan de acompañamiento mensual. Es un servicio completamente opcional, pensado para que siempre tengas a quién acudir cuando necesites ayuda con la tienda.
          </p>
        </Reveal>

        <Reveal>
          <article className="media-shadow overflow-hidden rounded-[1.75rem] border border-border bg-white">
            <div className="flex flex-col gap-7 border-b border-border p-7 sm:p-10 md:flex-row md:items-end md:justify-between">
              <div className="flex max-w-2xl flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-rose-petal">
                  Plan de acompañamiento · Opcional
                </p>
                <h3 className="font-serif text-3xl leading-tight text-olive sm:text-4xl">
                  Para que siempre tengas a quién acudir cuando lo necesites.
                </h3>
              </div>
              <p className="shrink-0 font-serif text-5xl leading-none text-olive sm:text-6xl">
                USD 35 <span className="text-2xl text-warm-gray sm:text-3xl">/ mes</span>
              </p>
            </div>

            <div className="grid items-stretch md:grid-cols-2">
              {continuityServices.map((service, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={service}
                    className={cn(
                      "flex h-full items-start gap-4 border-t border-border p-6 sm:p-8",
                      index % 2 === 0 && "md:border-r",
                      index < 2 && "md:border-t-0",
                    )}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-rose-mist text-olive">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.2} />
                    </span>
                    <p className="text-sm leading-7 text-olive-deep sm:text-base">{service}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </Reveal>

        <div className="grid gap-10 border-t border-gold/50 pt-12 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-4">
            <h3 className="font-serif text-3xl text-olive">¿Qué significa este acompañamiento?</h3>
            <p className="text-base leading-8 text-olive-deep">
              Significa tener un punto de apoyo para resolver dudas, realizar pequeños cambios y revisar que la tienda se mantenga en buen estado.
            </p>
            <p className="text-base leading-8 text-olive-deep">
              El plan no es obligatorio. Si decides no contratarlo, la tienda seguirá siendo completamente tuya y podrás solicitar cualquier trabajo futuro mediante una cotización puntual.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-4" delay={0.08}>
            <h3 className="font-serif text-3xl text-olive">Todo queda a tu nombre</h3>
            <p className="text-base leading-8 text-olive-deep">
              El dominio, el alojamiento, la información de la tienda y la pasarela de pago estarán registrados a nombre de La Molina Florería.
            </p>
            <p className="text-base leading-8 text-olive-deep">
              Esto garantiza que siempre tendrás el control de tus cuentas, accesos y servicios, incluso si decides no contratar el plan de acompañamiento.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-4" delay={0.16}>
            <h3 className="font-serif text-3xl text-olive">Cuando tu negocio crezca</h3>
            <p className="text-base leading-8 text-olive-deep">
              Si en el futuro el crecimiento del negocio requiere mayor capacidad, nuevas integraciones o servicios adicionales, cada cambio será explicado y cotizado previamente.
            </p>
            <p className="text-base leading-8 text-olive-deep">
              Nada se contratará ni modificará sin tu aprobación.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <aside className="rounded-[1.5rem] border border-border bg-cream p-7 sm:p-9" aria-labelledby="continuidad-claridad">
            <div className="flex max-w-4xl flex-col gap-3">
              <h3 id="continuidad-claridad" className="font-serif text-2xl text-olive">
                Para mantener todo claro
              </h3>
              <p className="text-sm leading-7 text-warm-gray">
                El plan de acompañamiento de USD 35 mensuales incluye supervisión, mantenimiento, soporte y pequeños ajustes dentro del tiempo indicado.
              </p>
              <p className="text-sm leading-7 text-warm-gray">
                No incluye el alojamiento profesional de aproximadamente USD 20 mensuales, el dominio, las comisiones de Izipay ni otros servicios externos.
              </p>
              <p className="text-sm leading-7 text-warm-gray">
                Estos costos serán pagados directamente por La Molina Florería.
              </p>
              <p className="text-sm leading-7 text-warm-gray">
                Si el plan no se contrata, cualquier trabajo posterior podrá solicitarse mediante una cotización puntual.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
