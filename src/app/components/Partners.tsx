"use client";

import Image from "next/image";
import { useRevealGroup, useScrollReveal } from "@/hooks/useScrollReveal";
import { partners } from "../data/content";
import "./Partners.css";

export function Partners() {
  // дублируем для бесшовной прокрутки
  const marqueeItems = [...partners, ...partners];

  const titleRef = useScrollReveal<HTMLHeadingElement>({
    variant: "up",
    distance: 18,
    delay: 0,
  });

  const marqueeRef = useScrollReveal<HTMLDivElement>({
    variant: "up",
    distance: 24,
    delay: 160,
  });

  const logosGroupRef = useRevealGroup<HTMLUListElement>({
    variant: "up",
    distance: 16,
    delayBase: 220,
    step: 120,
  });

  return (
    <section
      id="partners"
      className="partners-section"
      aria-label="Наши партнёры — логотипы брендов"
    >
      <div className="partners-container">
        <div className="partners-block">
          <div className="partners-header">
            <h2 ref={titleRef} className="partners-title section-heading reveal" data-reveal="up">
              Партнёры
            </h2>
          </div>

          <div
            ref={marqueeRef}
            className="partners-marquee-wrap reveal"
            data-reveal="up"
          >
            <ul
              ref={logosGroupRef}
              className="partners-marquee"
              aria-hidden="true"
              data-reveal
            >
              {marqueeItems.map((partner, i) => (
                <li key={`${partner.name}-${i}`} className="partner-tile" data-reveal>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={72}
                    className="partner-logo"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 200px"
                    priority={i === 0} // небольшой буст LCP первому
                  />
                </li>
              ))}
            </ul>

            {/* визуальные края через mask-image — без лишних элементов */}
          </div>
        </div>
      </div>
    </section>
  );
}
