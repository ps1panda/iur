'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './CustomBusiness.css';
import {
  FaUserTimes,
  FaTools,
  FaMoneyBillWave,
  FaBuilding,
  FaBalanceScale,
  FaDraftingCompass,
  FaBolt,
  FaChartLine,
  FaFileContract,
} from 'react-icons/fa';

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
              <h2 ref={titleRef} className="cb-title reveal" data-reveal="up">
                Бизнес на заказ
              </h2>
              <div
                ref={lineRef}
                className="cb-line reveal"
                data-reveal="fade"
                aria-hidden="true"
              />
            </div>

            <div className="cb-intro fade-in fade-delay-2">
              <h3 className="cb-subtitle">Готовый арендный бизнес</h3>
              <p>
                Купив готовый арендный бизнес, это не значит, что он будет успешно работать и приносить стабильный пассивный доход, как Вам его позиционируют. Есть очень много подводных камней.
              </p>
            </div>
          </div>

          {/* Основная сетка */}
          <div className="cb-grid">
            {/* Левая колонка */}
            <div className="cb-column fade-in fade-delay-3">
              <p className="cb-heading">При покупке бизнеса Вы можете столкнуться с проблемами:</p>
              <ul className="cb-list">
                <li><FaUserTimes className="icon-yellow" />Арендатор попросил скидку или съезжает полностью.</li>
                <li><FaTools className="icon-yellow" />Неисправности и износ инженерных систем, что в последующем потребует немалых финансовых затрат.</li>
                <li><FaMoneyBillWave className="icon-yellow" />Скрытые платежи и налоги.</li>
                <li><FaBuilding className="icon-yellow" />Съехал арендатор, и помещение окажется пустым. Из-за плохой истории и неудачной локации его невозможно будет сдать или продать по рыночной цене.</li>
              </ul>
            </div>

            {/* Правая колонка */}
            <div className="cb-column fade-in fade-delay-4">
              <p className="cb-heading">
                Этапы формирования проекта от момента создания пространства до ввода в эксплуатацию:
              </p>
              <ul className="cb-list">
                <li><FaBalanceScale className="icon-green" />Проводим аудит юридической части.</li>
                <li><FaDraftingCompass className="icon-green" />Узакониваем перепланировки.</li>
                <li><FaBolt className="icon-green" />Выделяем мощности.</li>
                <li><FaChartLine className="icon-green" />Проводим анализ потенциала локации с высоким уровнем экспертизы, что позволяет заключать договоры аренды со стабильными и надёжными сетевыми арендаторами. И получать стабильный пассивный доход.</li>
                <li className="cb-accent">
                  <FaFileContract className="icon-yellow" />
                  <span>
                    <strong>Уважаемые инвесторы,</strong> чтобы заказать услугу «Бизнес на заказ», Вам необходимо заключить с нашей компанией договор.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Кнопка */}
          <div className="cb-button-wrap fade-in fade-delay-5">
            <a href="#contact" className="cb-button">Связаться</a>
          </div>
        </div>
      </div>
    </section>
  );
}
