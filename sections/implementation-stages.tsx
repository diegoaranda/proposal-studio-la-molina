import Image from "next/image";
import heroBouquet from "@/assets/photography/hero-bouquet.png";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  afterDeliveryOptions,
  clientResponsibilities,
  completeOffer,
  completeOfferExclusions,
  externalServiceCosts,
  paymentTerms,
  stagedOffers,
  stagedPaymentTerms,
} from "@/lib/content";

function IncludedItems({ items, singleColumn = false }: { items: readonly string[]; singleColumn?: boolean }) {
  return (
    <ul className={`grid gap-x-8 gap-y-3${singleColumn ? "" : " sm:grid-cols-2"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-olive-deep">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ImplementationStages() {
  return (
    <section id="implementacion" className="proposal-section relative overflow-hidden bg-cream">
      <div className="absolute inset-y-0 right-0 hidden w-[38%] lg:block">
        <Image
          src={heroBouquet}
          alt=""
          fill
          className="object-cover object-right"
          sizes="38vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/60 to-transparent" />
      </div>

      <div className="proposal-container relative">
        <div className="flex max-w-5xl flex-col gap-14">
          <SectionHeading
            title="Podemos empezar a tu ritmo"
            description="Cada historia encuentra su propio ritmo. La Molina Florería puede comenzar por la opción que mejor acompañe este momento."
          />
          <Reveal>
            <article className="media-shadow flex flex-col gap-8 rounded-[1.75rem] border border-gold/60 bg-white p-7 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex max-w-2xl flex-col items-start gap-3">
                  <span className="rounded-full bg-rose-mist px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-olive">
                    Recomendada
                  </span>
                  <h3 className="font-serif text-3xl text-olive sm:text-4xl">{completeOffer.title}</h3>
                  <p className="text-base leading-7 text-warm-gray">{completeOffer.description}</p>
                </div>
                <p className="shrink-0 font-serif text-5xl text-olive sm:text-6xl">{completeOffer.price}</p>
              </div>
              <IncludedItems items={completeOffer.includes} />
              <div className="flex flex-col gap-5 border-t border-border pt-7">
                <h4 className="font-serif text-2xl text-olive">Servicios no incluidos</h4>
                <IncludedItems items={completeOfferExclusions} />
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="flex flex-col gap-10 border-t border-gold/50 pt-12">
              <div className="flex max-w-4xl flex-col gap-5">
                <h3 className="font-serif text-3xl text-olive sm:text-4xl">
                  Costos necesarios para mantener la tienda publicada
                </h3>
                <div className="flex max-w-3xl flex-col gap-4 text-base leading-8 text-olive-deep">
                  <p>
                    Una vez entregada, la tienda necesita algunos servicios externos para permanecer disponible en internet.
                  </p>
                  <p>
                    Estos servicios estarán registrados a nombre de La Molina Florería y serán pagados directamente por el negocio, de modo que Karen mantenga siempre el control de sus cuentas y accesos.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {externalServiceCosts.map((service) => (
                  <div key={service.title} className="flex flex-col gap-4 rounded-[1.5rem] border border-border bg-white/90 p-7 sm:p-8">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-rose-petal">
                        {service.title}
                      </p>
                      <p className="font-serif text-3xl leading-tight text-olive">{service.price}</p>
                    </div>
                    <p className="text-sm leading-7 text-olive-deep sm:text-base">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex max-w-4xl flex-col gap-3 border-t border-border pt-7 text-sm leading-7 text-warm-gray">
                <p>
                  Los valores indicados corresponden a las tarifas disponibles al momento de preparar esta propuesta y pueden cambiar según cada proveedor.
                </p>
                <p>
                  Si en el futuro el crecimiento de la tienda requiere mayor capacidad o un servicio adicional, el costo será explicado previamente y solo se contratará con la aprobación de Karen.
                </p>
              </div>

              <div className="flex flex-col gap-7">
                <h4 className="font-serif text-3xl text-olive">Después de la entrega</h4>
                <div className="grid items-stretch gap-5 lg:grid-cols-2">
                  {afterDeliveryOptions.map((option) => (
                    <div key={option.title} className="flex h-full flex-col gap-6 rounded-[1.5rem] border border-border bg-white/90 p-7 sm:p-8">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-rose-petal">
                          {option.label}
                        </p>
                        <h5 className="font-serif text-3xl text-olive">{option.title}</h5>
                      </div>
                      <IncludedItems items={option.includes} singleColumn />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <h3 className="font-serif text-3xl text-olive sm:text-4xl">También es posible avanzar paso a paso</h3>
            </Reveal>
            <div className="grid items-stretch gap-6 md:grid-cols-2">
              {stagedOffers.map((stage, index) => (
                <Reveal key={stage.title} delay={index * 0.08} className="h-full">
                  <article className="flex h-full flex-col gap-7 rounded-[1.5rem] border border-border bg-white/90 p-7 sm:p-8">
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-rose-petal">
                        Etapa {index + 1}
                      </span>
                      <h4 className="font-serif text-3xl leading-tight text-olive">{stage.title}</h4>
                      <p className="font-serif text-4xl text-olive">{stage.price}</p>
                    </div>
                    <IncludedItems items={stage.includes} />
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="max-w-3xl text-base leading-7 text-olive-deep">
                Puedes comenzar con la primera etapa y sumar la segunda cuando sea el momento.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-10 border-t border-gold/50 pt-12 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-7">
              <h3 className="font-serif text-3xl text-olive">Forma de pago</h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-rose-petal">Opción completa</p>
                  <IncludedItems items={paymentTerms} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-rose-petal">Proyectos por etapas</p>
                  <IncludedItems items={stagedPaymentTerms} />
                </div>
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-7" delay={0.08}>
              <h3 className="font-serif text-3xl text-olive">Tiempo estimado</h3>
              <p className="text-base leading-7 text-olive-deep">
                Entre 6 y 8 semanas para la opción completa, dependiendo de la entrega de contenidos, la aprobación de avances y las credenciales de Izipay.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <article className="flex flex-col gap-7 border-t border-gold/50 pt-12">
              <h3 className="font-serif text-3xl text-olive">Para comenzar, será importante contar con</h3>
              <IncludedItems items={clientResponsibilities} />
              <p className="max-w-4xl text-sm leading-7 text-warm-gray">
                La carga inicial de hasta 100 productos está incluida cuando nombres, precios, descripciones y fotografías se entreguen juntos en la plantilla acordada.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
