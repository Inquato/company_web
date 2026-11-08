"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import anime from "animejs";

export function ScrollFx() {
  const path = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let io: IntersectionObserver | null = null;
    // Pulse animation is now handled by CSS (@keyframes pulse-scale)
    let onScroll: (() => void) | null = null;
    let animatedEls: HTMLElement[] = [];

    // Defer DOM mutations to ensure React hydration has completely finished
    const timeoutId = setTimeout(() => {
      if (cancelled) return;

      const els = Array.from(document.querySelectorAll<HTMLElement>(".card, .h2, [data-anim]"));
      animatedEls = els;

      // Only hide elements below the fold for reveal animation
      // Elements already visible in the viewport remain visible to prevent flashing
      const windowHeight = window.innerHeight;
      const belowFoldEls: HTMLElement[] = [];

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > windowHeight) {
          el.style.opacity = "0";
          belowFoldEls.push(el);
        }
      });

      if (belowFoldEls.length > 0) {
        io = new IntersectionObserver(
          (entries) => {
            entries
              .filter((e) => e.isIntersecting)
              .forEach((e, i) => {
                const el = e.target as HTMLElement;
                io?.unobserve(el);
                anime({
                  targets: el,
                  opacity: [0, 1],
                  translateY: [28, 0],
                  duration: 800,
                  delay: i * 90,
                  easing: "easeOutExpo",
                  complete: () => {
                    el.style.opacity = "";
                    el.style.transform = "";
                  },
                });
              });
          },
          { threshold: 0.1 }
        );

        belowFoldEls.forEach((el) => io?.observe(el));
      }

      anime({
        targets: "svg .draw",
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1800,
        easing: "easeInOutSine",
        delay: anime.stagger(150),
      });

      const bar = document.getElementById("progress");
      const par = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

      onScroll = () => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
        if (y > 0) {
          par.forEach((p) => anime.set(p, { translateY: -y * Number(p.dataset.parallax) }));
        } else {
          par.forEach((p) => anime.set(p, { translateY: 0 }));
        }
      };

      if (window.scrollY > 0) {
        onScroll();
      }
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 0);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      io?.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
      animatedEls.forEach((el) => {
        el.style.opacity = "";
        el.style.transform = "";
      });
    };
  }, [path]);

  return (
    <div
      id="progress"
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-brand"
    />
  );
}
