'use client';

import Image from 'next/image';
import { useRevealGroup, useScrollReveal } from '@/hooks/useScrollReveal';
import './CustomBusiness.css';
type IconName =
  | 'userTimes'
  | 'tools'
  | 'moneyBill'
  | 'building'
  | 'balanceScale'
  | 'draftingCompass'
  | 'bolt'
  | 'chartLine'
  | 'fileContract';

function Icon({ name, className }: { name: IconName; className?: string }) {
  const combinedClassName = className ? `cb-icon ${className}` : 'cb-icon';

  switch (name) {
    case 'userTimes':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="7" r="3" />
          <path d="M4.5 18.5c0-3 2.6-5.5 5.5-5.5h2c2.9 0 5.5 2.5 5.5 5.5" />
          <path d="M16.5 6.5l4 4m0-4l-4 4" />
        </svg>
      );
    case 'tools':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 5.2l4.8 4.8" />
          <path d="M5 13l6.4 6.4a2 2 0 0 0 2.8 0 2 2 0 0 0 0-2.8L8.2 10" />
          <path d="M14.1 4.4l2-2 3 3-2 2" />
          <path d="M12.6 5.9l3.5 3.5" />
        </svg>
      );
    case 'moneyBill':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" ry="2.5" />
          <circle cx="12" cy="12" r="2.8" />
          <path d="M7 9.5v0" />
          <path d="M17 14.5v0" />
        </svg>
      );
    case 'building':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="6.5" y="3.5" width="11" height="17" rx="1.5" />
          <path d="M9.5 7.5h5" />
          <path d="M9.5 11.5h5" />
          <path d="M9.5 15.5h5" />
          <path d="M6.5 17.5h11" />
        </svg>
      );
    case 'balanceScale':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4v15" />
          <path d="M7 9h10" />
          <path d="M5 9l-2.5 5.5h5z" />
          <path d="M19 9l-2.5 5.5h5z" />
          <path d="M9 19h6" />
        </svg>
      );
    case 'draftingCompass':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="6" r="2.2" />
          <path d="M12 8.5l-4.5 11" />
          <path d="M12 8.5l4.5 11" />
          <path d="M8.5 14.5h7" />
          <path d="M9.5 11.5l1.5-3" />
          <path d="M14.5 11.5l-1.5-3" />
        </svg>
      );
    case 'bolt':
      return (
        <svg className={combinedClassName} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M13 2l-7 10h5l-1 10 7-10h-5z" />
        </svg>
      );
    case 'chartLine':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19h16" />
          <path d="M4 17l5-5 3 3 6-8" />
        </svg>
      );
    case 'fileContract':
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 3.5h6l3.5 3.5v13H9A2.5 2.5 0 0 1 6.5 17.5v-11A3 3 0 0 1 9 3.5z" />
          <path d="M15 3.5v4h4" />
          <path d="M9.5 11.5h5" />
          <path d="M9.5 15.5h3" />
          <path d="M9.5 7.5h2.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function CustomBusiness() {
  // Анимации для заголовка и линии (как в About)
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
    delayBase: 220,
    step: 100,
  });

  const gridGroupRef = useRevealGroup<HTMLDivElement>({
    variant: 'up',
    distance: 22,
    delayBase: 320,
    step: 140,
  });

  const painListRef = useRevealGroup<HTMLUListElement>({
    variant: 'up',
    distance: 12,
    delayBase: 0,
    step: 90,
  });

  const stagesListRef = useRevealGroup<HTMLUListElement>({
    variant: 'up',
    distance: 12,
    delayBase: 0,
    step: 90,
  });

  const ctaRef = useScrollReveal<HTMLAnchorElement>({
    variant: 'up',
    distance: 16,
    delay: 520,
  });

  return (
    <section id="custom-business" className="custom-business-section">
      {/* Фоновое изображение (ненавязчивое, справа-снизу) */}
      <div className="cb-bg" aria-hidden="true">
        <Image
          src="/images/business-bg.png"
          alt=""
          fill
          priority
          className="cb-bg-image"
          sizes="100vw"
        />
        <div className="cb-bg-overlay" />
      </div>

      <div className="custom-business-container">
        <div className="custom-business-inner">
          {/* ЕДИНЫЙ левый блок: заголовок + линия + вступление */}
          <div className="cb-heading-intro">
            <div className="cb-heading-block">
              <h2 ref={titleRef} className="cb-title section-heading reveal" data-reveal="up">
                Бизнес на заказ
              </h2>
              <div
                ref={lineRef}
                className="cb-line section-line reveal"
                data-reveal="fade"
                aria-hidden="true"
              />
            </div>

            <div ref={introGroupRef} className="cb-intro" data-reveal>
              <h3 className="cb-subtitle" data-reveal>
                Готовый арендный бизнес
              </h3>
              <p data-reveal>
                Купив готовый арендный бизнес, это не значит, что он будет успешно работать и приносить стабильный пассивный доход, как Вам его позиционируют. Есть очень много подводных камней.
              </p>
            </div>
          </div>

          {/* Основная сетка */}
          <div ref={gridGroupRef} className="cb-grid" data-reveal>
            {/* Левая колонка */}
            <div className="cb-column" data-reveal>
              <p className="cb-heading">При покупке бизнеса Вы можете столкнуться с проблемами:</p>
              <ul ref={painListRef} className="cb-list" data-reveal>
                <li data-reveal>
                  <Icon name="userTimes" className="icon-yellow" />
                  <span>Арендатор попросил скидку или съезжает полностью.</span>
                </li>
                <li data-reveal>
                  <Icon name="tools" className="icon-yellow" />
                  <span>Неисправности и износ инженерных систем, что в последующем потребует немалых финансовых затрат.</span>
                </li>
                <li data-reveal>
                  <Icon name="moneyBill" className="icon-yellow" />
                  <span>Скрытые платежи и налоги.</span>
                </li>
                <li data-reveal>
                  <Icon name="building" className="icon-yellow" />
                  <span>Съехал арендатор, и помещение окажется пустым. Из-за плохой истории и неудачной локации его невозможно будет сдать или продать по рыночной цене.</span>
                </li>
              </ul>
            </div>

            {/* Правая колонка */}
            <div className="cb-column" data-reveal>
              <p className="cb-heading">
                Этапы формирования проекта от момента создания пространства до ввода в эксплуатацию:
              </p>
              <ul ref={stagesListRef} className="cb-list" data-reveal>
                <li data-reveal>
                  <Icon name="balanceScale" className="icon-green" />
                  <span>Проводим аудит юридической части.</span>
                </li>
                <li data-reveal>
                  <Icon name="draftingCompass" className="icon-green" />
                  <span>Узакониваем перепланировки.</span>
                </li>
                <li data-reveal>
                  <Icon name="bolt" className="icon-green" />
                  <span>Выделяем мощности.</span>
                </li>
                <li data-reveal>
                  <Icon name="chartLine" className="icon-green" />
                  <span>
                    Проводим анализ потенциала локации с высоким уровнем экспертизы, что позволяет заключать договоры аренды со стабильными и надёжными сетевыми арендаторами. И получать стабильный пассивный доход.
                  </span>
                </li>
                <li className="cb-accent" data-reveal>
                  <Icon name="fileContract" className="icon-yellow" />
                  <span>
                    <strong>Уважаемые инвесторы,</strong> чтобы заказать услугу «Бизнес на заказ», Вам необходимо заключить с нашей компанией договор.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Кнопка */}
          <div className="cb-button-wrap">
            <a ref={ctaRef} href="#contact" className="cb-button reveal" data-reveal="up">
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
