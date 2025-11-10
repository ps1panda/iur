"use client";

import Image from "next/image";
import "./Hero.css";
import { useScrollReveal, useRevealGroup } from "@/hooks/useScrollReveal";

export function Hero() {
  // Заголовок и подзаголовок
  const titleRef = useScrollReveal<HTMLHeadingElement>({ variant: "up", distance: 20, delay: 0 });
  const textRef  = useScrollReveal<HTMLParagraphElement>({ variant: "up", distance: 14, delay: 80 });

  // Кнопки: стаггер по детям
  const buttonsGroupRef = useRevealGroup<HTMLDivElement>({
    variant: "up",
    delayBase: 160,
    step: 90,
  });

  // Карточка статистики: scale контейнера + стаггер внутренних элементов
  const statsCardRef  = useScrollReveal<HTMLDivElement>({ variant: "scale", delay: 120, duration: 700 });
  const statsGroupRef = useRevealGroup<HTMLDivElement>({
    selector: ".reveal, [data-reveal]",
    variant: "up",
    delayBase: 0,
    step: 60,
  });

  // Комбинируем два refs на один элемент
  const mergeStatsRef = (el: HTMLDivElement | null) => {
    (statsCardRef as any).current = el;
    (statsGroupRef as any).current = el;
  };

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__bg-img"
        />
      </div>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__textblock">
            <h1
              id="hero-title"
              ref={titleRef}
              className="hero__title reveal"
              data-reveal="up"
            >
              <span>Invest</span>
              <span>Urban</span>
              <span>Rent</span>
            </h1>

            <p
              ref={textRef}
              className="hero__subtitle reveal"
              data-reveal="up"
            >
              Мы создаём и управляем коммерческими пространствами, превращая их
              в стабильный источник пассивного дохода для инвесторов и
              собственников.
            </p>
          </div>

          {/* Кнопки со стаггером */}
          <div ref={buttonsGroupRef} className="hero__buttons" data-reveal>
            <a
              href="#contacts"
              className="hero__btn hero__btn--primary"
              data-reveal
              aria-label="Связаться — перейти к форме контактов"
            >
              Связаться
            </a>
            <a
              href="#projects"
              className="hero__btn hero__btn--outline"
              data-reveal
              aria-label="Объекты — перейти к разделу с проектами"
            >
              Объекты
            </a>
          </div>
        </div>

        {/* Статистика: scale + стаггер */}
        <div
          ref={mergeStatsRef}
          className="hero__stats reveal"
          data-reveal="scale"
          style={{ ["--reveal-distance" as any]: "6px" }}
        >
          <h2 className="reveal" data-reveal="fade">Ключевые показатели</h2>
          <dl>
            <div className="reveal" data-reveal="up" data-delay="0">
              <dt>Управляемая площадь</dt>
              <dd>12&nbsp;600&nbsp;м²</dd>
            </div>
            <div className="reveal" data-reveal="up" data-delay="60">
              <dt>Средняя ставка доходности</dt>
              <dd>15,4%&nbsp;годовых</dd>
            </div>
            <div className="reveal" data-reveal="up" data-delay="120">
              <dt>Партнёры и арендаторы</dt>
              <dd>45+</dd>
            </div>
          </dl>
          <p className="hero__note reveal" data-reveal="fade" data-delay="180">
            Регулярные стратегические сессии и ежеквартальные отчёты помогают
            инвесторам контролировать результат на каждом этапе.
          </p>
        </div>
      </div>
    </section>
  );
}
