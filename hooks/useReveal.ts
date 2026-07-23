"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-seen");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px 40px 0px"
      }
    );

    el.setAttribute("data-reveal", "");
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
