"use client";

import Image from "next/image";
import { useScrollReveal, useRevealGroup } from "@/hooks/useScrollReveal";
import "./About.css";

const items = [
  {
    type: "p",
    text:
      "Наша компания с 2009 года занималась монтажом и проектированием инженерных систем, узакониванием перепланировок, выделением мощностей, реконструкцией фасадов — до ввода в эксплуатацию и управления коммерческими помещениями.",
    tone: 90,
  },
  {
    type: "p",
    text:
      "С 2014 года полученный опыт помог нам начать активно создавать пространства для коммерческой недвижимости, осуществлять продажу, управление и создавать готовый арендный бизнес на заказ!",
    tone: 85,
  },
  {
    type: "callout",
    text:
      "Заказав бизнес на заказ в нашей компании, Вы получаете ликвидное, универсальное помещение.",
  },
  {
    type: "p",
    text:
      "Наша профессиональная команда самостоятельно реализует все этапы формирования проекта.",
    tone: 75,
  },
];

export function About() {
  // Индивидуальные элементы: заголовок и линия
  const titleRef = useScrollReveal<HTMLHeadingElement>({
    variant: "up",
    distance: 20,
    delay: 0,
  });

  // Линию «дорисовываем» с небольшим лагом, чтобы она появлялась после заголовка
  const lineRef = useScrollReveal<HTMLDivElement>({
    variant: "fade", // визуальную анимацию ширины делает CSS, здесь лишь триггер
    delay: 120,
    duration: 600,
  });

  // Группа абзацев: авто-стаггер по детям
  const textGroupRef = useRevealGroup<HTMLDivElement>({
    variant: "up",
    distance: 14,
    delayBase: 160,
    step: 90,
  });

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      {/* Фон */}
      <div className="about-bg" aria-hidden="true">
        <Image
          src="/images/building-bg.png"
          alt=""
          fill
          priority
          className="about-bg-image"
          sizes="100vw"
        />
        <div className="about-bg-overlay" />
      </div>

      {/* Контент */}
      <div className="about-content group">
        <div className="about-text">
          <div className="about-heading">
            <h2
              id="about-title"
              ref={titleRef}
              className="reveal"
              data-reveal="up"
            >
              INVEST URBAN RENT
            </h2>

            {/* Линия под заголовком: ширина анимируется в CSS при .reveal-visible */}
            <div
              ref={lineRef}
              className="about-line reveal"
              data-reveal="fade"
              aria-hidden="true"
            />
          </div>

          {/* Группа с авто-стаггером: каждому ребёнку достаточно data-reveal */}
          <div ref={textGroupRef} data-reveal>
            {items.map((it, i) => {
              if (it.type === "callout") {
                return (
                  <div key={i} className="about-callout reveal" data-reveal="up">
                    <p>{it.text}</p>
                  </div>
                );
              }
              return (
                <p
                  key={i}
                  className={`reveal tone-${it.tone || 80}`}
                  data-reveal="up"
                >
                  {it.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Правая половина — под фон */}
        <div className="about-right" />
      </div>
    </section>
  );
}
