'use client';

import Image from 'next/image';
import { useRevealGroup, useScrollReveal } from '@/hooks/useScrollReveal';
import { InlineIcon } from './icons';
import './ForOwners.css';

export function ForOwners() {
  // Анимации как в CustomBusiness
  const titleRef = useScrollReveal<HTMLHeadingElement>({
    variant: 'up',
    distance: 20,
    delay: 0,
  });

  const lineRef = useScrollReveal<HTMLDivElement>({
    variant: 'fade',
    delay: 120,
    duration: 600,
  });

  const introGroupRef = useRevealGroup<HTMLDivElement>({
    variant: 'up',
    distance: 14,
    delayBase: 200,
    step: 100,
  });

  const gridGroupRef = useRevealGroup<HTMLDivElement>({
    variant: 'up',
    distance: 22,
    delayBase: 320,
    step: 140,
  });

  const conditionsListRef = useRevealGroup<HTMLUListElement>({
    variant: 'up',
    distance: 12,
    delayBase: 0,
    step: 90,
  });

  const benefitsListRef = useRevealGroup<HTMLDivElement>({
    variant: 'up',
    distance: 12,
    delayBase: 0,
    step: 110,
    scopeSelector: ':scope > [data-reveal]',
  });

  const ctaRef = useScrollReveal<HTMLAnchorElement>({
    variant: 'up',
    distance: 16,
    delay: 520,
  });

  return (
    <section id="for-owners" className="owners-section">
      {/* Фоновое изображение (ненавязчиво, справа-снизу) */}
      <div className="owners-bg" aria-hidden="true">
        <Image
          src="/images/business-bg.png"        // при желании замени на /images/owners-bg.png
          alt=""
          fill
          priority
          className="owners-bg-image"
          sizes="100vw"
        />
        <div className="owners-bg-overlay" />
      </div>

      <div className="owners-container">
        <div className="owners-inner">
          {/* Левый блок: Заголовок + линия + вступление */}
          <div className="owners-heading-intro">
            <div className="owners-heading-block">
              <h2 ref={titleRef} className="owners-title section-heading reveal" data-reveal="up">
                Собственникам
              </h2>
              <div
                ref={lineRef}
                className="owners-line section-line reveal"
                data-reveal="fade"
                aria-hidden="true"
              />
            </div>

            <div ref={introGroupRef} className="owners-intro" data-reveal>
              <h3 className="owners-subtitle" data-reveal>
                Наша компания возьмет на продажу Ваш бизнес
              </h3>
              <p data-reveal>
                Возьмем в аренду помещения, торговую коммерческую недвижимость для собственных проектов
              </p>
            </div>
          </div>

          {/* Основная сетка */}
          <div ref={gridGroupRef} className="owners-grid" data-reveal>
            {/* Левая колонка — условия реализации проекта */}
            <div className="owners-column" data-reveal>
              <p className="owners-heading">Условия реализации Вашего проекта:</p>
              <ul ref={conditionsListRef} className="owners-list" data-reveal>
                <li data-reveal>
                  <InlineIcon
                    name="ownersHistory"
                    baseClassName="owners-icon"
                    className="icon-contrast"
                  />
                  История арендных платежей — оцениваем надежность арендатора.
                </li>
                <li data-reveal>
                  <InlineIcon
                    name="ownersFileContract"
                    baseClassName="owners-icon"
                    className="icon-contrast"
                  />
                  Оценка Договора аренды — разбираем обязательства и риски.
                </li>
                <li data-reveal>
                  <InlineIcon
                    name="ownersTools"
                    baseClassName="owners-icon"
                    className="icon-contrast"
                  />
                  Техническое состояние объекта, красные линии и инженерные коммуникации — выявляем недостатки и планируем их устранение.
                </li>
              </ul>
            </div>

            {/* Правая колонка — что получит собственник */}
            <div className="owners-column" data-reveal>
              <p className="owners-heading">Стабильный пассивный доход</p>
              <div ref={benefitsListRef} className="owners-list owners-list--text" data-reveal>
                <p data-reveal>
                  На сегодняшний день мы реализуем полный цикл работ по проектам в сфере арендного бизнеса: мы выполняем все работы своими силами и за свой счет.
                </p>
                <p data-reveal>
                  Можете сдать нашей компании в аренду нежилое помещение, коммерческую недвижимость и получать долгосрочный стабильный пассивный доход, а все остальные заботы мы возьмем на себя.
                </p>
              </div>
            </div>
          </div>

          {/* Кнопка */}
          <div className="owners-button-wrap">
            <a ref={ctaRef} href="#contacts" className="owners-button reveal" data-reveal="up">
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

