'use client';

import Image from 'next/image';
import { useRevealGroup, useScrollReveal } from '@/hooks/useScrollReveal';
import { InlineIcon } from './icons';
import './CustomBusiness.css';

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
                  <InlineIcon name="userTimes" baseClassName="cb-icon" className="icon-yellow" />
                  <span>Арендатор попросил скидку или съезжает полностью.</span>
                </li>
                <li data-reveal>
                  <InlineIcon name="tools" baseClassName="cb-icon" className="icon-yellow" />
                  <span>Неисправности и износ инженерных систем, что в последующем потребует немалых финансовых затрат.</span>
                </li>
                <li data-reveal>
                  <InlineIcon name="moneyBill" baseClassName="cb-icon" className="icon-yellow" />
                  <span>Скрытые платежи и налоги.</span>
                </li>
                <li data-reveal>
                  <InlineIcon name="building" baseClassName="cb-icon" className="icon-yellow" />
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
                  <InlineIcon name="balanceScale" baseClassName="cb-icon" className="icon-green" />
                  <span>Проводим аудит юридической части.</span>
                </li>
                <li data-reveal>
                  <InlineIcon name="draftingCompass" baseClassName="cb-icon" className="icon-green" />
                  <span>Узакониваем перепланировки.</span>
                </li>
                <li data-reveal>
                  <InlineIcon name="bolt" baseClassName="cb-icon" className="icon-green" />
                  <span>Выделяем мощности.</span>
                </li>
                <li data-reveal>
                  <InlineIcon name="chartLine" baseClassName="cb-icon" className="icon-green" />
                  <span>
                    Проводим анализ потенциала локации с высоким уровнем экспертизы, что позволяет заключать договоры аренды со стабильными и надёжными сетевыми арендаторами. И получать стабильный пассивный доход.
                  </span>
                </li>
                <li className="cb-accent" data-reveal>
                  <InlineIcon name="fileContract" baseClassName="cb-icon" className="icon-yellow" />
                  <span>
                    <strong>Уважаемые инвесторы,</strong> чтобы заказать услугу «Бизнес на заказ», Вам необходимо заключить с нашей компанией договор.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Кнопка */}
          <div className="cb-button-wrap">
            <a ref={ctaRef} href="#contacts" className="cb-button reveal" data-reveal="up">
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
