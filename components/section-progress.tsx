"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const acts = [
  { id: "carta", label: "Comprender" },
  { id: "experiencia", label: "Imaginar" },
  { id: "proximos-pasos", label: "Dar el siguiente paso" },
] as const;

export function SectionProgress() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = acts
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const nextIndex = acts.findIndex(({ id }) => id === visible.target.id);
        if (nextIndex >= 0) setActive(nextIndex);
      },
      { rootMargin: "-32% 0px -48%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    const updateVisibility = () => setVisible(window.scrollY > window.innerHeight * 0.72);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <nav
      aria-label="Progreso de la propuesta"
      className={cn(
        "fixed top-5 right-1/2 z-40 flex translate-x-1/2 items-center rounded-full border border-border/80 bg-white/88 px-4 py-3 shadow-sm backdrop-blur transition-all duration-300 md:top-1/2 md:right-5 md:translate-x-0 md:-translate-y-1/2 md:flex-col md:items-end md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none",
        visible ? "opacity-100" : "pointer-events-none -translate-y-2 opacity-0 md:-translate-y-[52%]",
      )}
    >
      <ol className="flex items-center gap-2 md:flex-col md:items-end md:gap-3">
        {acts.map((act, index) => (
          <li key={act.id}>
            <a
              href={`#${act.id}`}
              aria-label={act.label}
              aria-current={active === index ? "step" : undefined}
              className="group flex items-center gap-2 text-xs text-warm-gray transition-colors hover:text-olive"
            >
              <span aria-hidden="true" className="hidden md:block">{act.label}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "block size-2 rounded-full border border-olive bg-white transition-all",
                  active === index && "size-2.5 bg-olive",
                )}
              />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
