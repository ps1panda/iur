"use client";

import { useEffect, useRef } from "react";

type Variant = "up" | "down" | "left" | "right" | "fade" | "scale";
type CommonOpts = {
  variant?: Variant;
  distance?: number;
  delay?: number;      // ms
  duration?: number;   // ms
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/* ========== ОДИНОЧНЫЙ ЭЛЕМЕНТ ========== */
export function useScrollReveal<T extends HTMLElement>(opts: CommonOpts = {}) {
  const {
    variant = "up",
    distance = 16,
    delay = 0,
    duration = 700,
    once = true,
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.15,
  } = opts;

  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    // Базовая подготовка для CSS
    el.classList.add("reveal");
    if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", variant);
    el.style.setProperty("--reveal-distance", `${distance}px`);
    el.style.setProperty("--reveal-duration", `${duration}ms`);
    if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);

    let wasVisible = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting || entry.intersectionRatio > 0;
        if (inView) {
          el.classList.add("reveal-visible");
          wasVisible = true;
          if (once) io.unobserve(el);
        } else if (!once && wasVisible) {
          el.classList.remove("reveal-visible");
        }
      },
      { root: null, rootMargin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [variant, distance, delay, duration, once, rootMargin, threshold]);

  return ref;
}

/* ========== ГРУППА (СТАГГЕР) ========== */
type GroupOpts = Omit<CommonOpts, "delay" | "duration"> & {
  delayBase?: number;  // ms
  step?: number;       // ms
  durationEach?: number; // ms — если хочешь задать одинаковую длительность детям
  scopeSelector?: string; // по умолчанию берём ТОЛЬКО прямых детей
};

export function useRevealGroup<T extends HTMLElement>(opts: GroupOpts = {}) {
  const {
    variant = "up",
    distance = 16,
    delayBase = 0,
    step = 90,
    durationEach = 700,
    once = true,
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.15,
    scopeSelector = ":scope > [data-reveal]",
  } = opts;

  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = ref.current;
    if (!root) return;

    // Берём ИМЕННО прямых детей с data-reveal
    const children = Array.from(
      root.querySelectorAll<HTMLElement>(scopeSelector)
    );

    // Готовим каждого ребёнка к анимации
    children.forEach((child, idx) => {
      child.classList.add("reveal");
      if (!child.getAttribute("data-reveal")) child.setAttribute("data-reveal", variant);
      child.style.setProperty("--reveal-distance", `${distance}px`);
      child.style.setProperty("--reveal-duration", `${durationEach}ms`);

      // приоритет: data-delay на элементе > расчётный delay
      const dataDelay = child.getAttribute("data-delay");
      const delay = dataDelay ? parseInt(dataDelay, 10) : delayBase + idx * step;
      child.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    let timers: number[] = [];
    let hasShown = false;

    const show = () => {
      // СТАГГЕР: включаем видимость каждому ребёнку «по расписанию»
      children.forEach((child) => {
        const d = parseInt(child.style.getPropertyValue("--reveal-delay") || "0", 10);
        const t = window.setTimeout(() => {
          child.classList.add("reveal-visible");
        }, d);
        timers.push(t);
      });
      // Корневой тоже пометим (если нужны каскады в CSS)
      root.classList.add("reveal-visible");
      hasShown = true;
    };

    const hide = () => {
      timers.forEach((t) => clearTimeout(t));
      timers = [];
      children.forEach((child) => child.classList.remove("reveal-visible"));
      root.classList.remove("reveal-visible");
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting || entry.intersectionRatio > 0;
        if (inView) {
          show();
          if (once) io.unobserve(root);
        } else if (!once && hasShown) {
          hide();
        }
      },
      { root: null, rootMargin, threshold }
    );

    io.observe(root);
    return () => {
      io.disconnect();
      hide();
    };
  }, [variant, distance, delayBase, step, durationEach, once, rootMargin, threshold, scopeSelector]);

  return ref;
}

export default useScrollReveal;
