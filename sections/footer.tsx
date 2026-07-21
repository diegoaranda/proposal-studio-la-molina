import { BrandMark } from "@/components/brand-mark";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-white py-12">
      <div className="proposal-container flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
        <BrandMark className="scale-90" />
        <p className="max-w-md text-sm leading-6 text-warm-gray">
          Preparado especialmente para Karen y La Molina Florería.
        </p>
      </div>
    </footer>
  );
}
