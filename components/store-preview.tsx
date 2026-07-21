import Image, { type StaticImageData } from "next/image";
import { MessageCircle, ShoppingBag } from "lucide-react";
import productRomance from "@/assets/photography/product-romance.png";
import productJardin from "@/assets/photography/product-jardin.png";
import productOrquidea from "@/assets/photography/product-orquidea.png";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const products: StaticImageData[] = [productRomance, productJardin, productOrquidea];

export function StorePreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "relative mx-auto grid w-full items-end gap-5 lg:grid-cols-[1fr_auto]",
        compact ? "max-w-4xl" : "max-w-6xl",
      )}
      aria-label="Vista conceptual de la futura tienda online"
    >
      <div className="media-shadow overflow-hidden rounded-[1.4rem] border border-border bg-white p-2.5 sm:p-3">
        <div className="overflow-hidden rounded-[1rem] border border-border bg-cream">
          <div className="flex items-center justify-between border-b border-border bg-white px-4 py-3 sm:px-6">
            <BrandMark className="scale-[0.55] origin-left sm:scale-[0.65]" />
            <div className="flex items-center gap-3 text-olive">
              <span className="hidden text-xs sm:block">Catálogo</span>
              <ShoppingBag aria-hidden="true" className="size-4" strokeWidth={1.4} />
            </div>
          </div>
          <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-center gap-4 py-3">
              <p className="font-serif text-3xl leading-none text-olive sm:text-4xl">
                Catálogo
              </p>
              <p className="max-w-xs text-sm leading-6 text-warm-gray">
                Una tienda online que transmite el mismo cuidado que cada arreglo.
              </p>
              <span className="w-fit rounded-lg bg-olive px-4 py-2 text-xs font-medium text-white">
                Promociones
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {products.map((product, index) => (
                <div key={product.src} className="overflow-hidden rounded-xl bg-white">
                  <Image
                    src={product}
                    alt={index === 2 ? "Orquídea blanca" : "Arreglo floral en tonos rosa y marfil"}
                    className="aspect-square object-cover"
                    sizes={compact ? "(max-width: 768px) 24vw, 180px" : "(max-width: 768px) 27vw, 240px"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 border-t border-border bg-white px-4 py-3 text-xs font-medium text-olive sm:px-6">
            <MessageCircle aria-hidden="true" className="size-4" strokeWidth={1.4} />
            WhatsApp
          </div>
        </div>
      </div>

      {!compact ? (
        <div className="media-shadow mx-auto w-[11.5rem] rounded-[2rem] border-[6px] border-olive-deep bg-white p-2 lg:-ml-14 lg:mb-[-1.5rem]">
          <div className="overflow-hidden rounded-[1.3rem] bg-cream">
            <div className="flex items-center justify-center border-b border-border bg-white py-3">
              <BrandMark className="scale-[0.42]" />
            </div>
            <Image
              src={productRomance}
              alt="Arreglo floral conceptual mostrado en móvil"
              className="aspect-[4/4.5] object-cover"
              sizes="184px"
            />
            <div className="flex flex-col gap-2 p-3">
              <span className="font-serif text-xl text-olive">Catálogo</span>
              <span className="rounded-lg bg-olive px-3 py-2 text-center text-[0.65rem] font-medium text-white">
                Pagos con Izipay
              </span>
              <span className="flex items-center justify-center gap-1.5 text-[0.65rem] text-olive">
                <MessageCircle aria-hidden="true" className="size-3.5" strokeWidth={1.4} />
                WhatsApp
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
