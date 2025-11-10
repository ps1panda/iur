'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './ForOwners.css';
import {
  FaHandshake,
  FaFileContract,
  FaHistory,
  FaClipboardCheck,
  FaTools,
  FaBolt,
  FaBalanceScale,
  FaMoneyBillWave,
  FaBuilding,
  FaShieldAlt,
} from 'react-icons/fa';

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
              <h2 ref={titleRef} className="owners-title reveal" data-reveal="up">
                Собственникам
              </h2>
              <div
                ref={lineRef}
                className="owners-line reveal"
                data-reveal="fade"
                aria-hidden="true"
              />
            </div>

            <div className="owners-intro fade-in fade-delay-2">
              <h3 className="owners-subtitle">Наша компания возьмет на продажу Ваш бизнес</h3>
              <p>
                Возьмем в аренду помещения, торговую коммерческую недвижимость для собственных проектов
              </p>
            </div>
          </div>

          {/* Основная сетка */}
          <div className="owners-grid">
            {/* Левая колонка — условия реализации проекта */}
            <div className="owners-column fade-in fade-delay-3">
              <p className="owners-heading">Условия реализации Вашего проекта:</p>
              <ul className="owners-list">
                <li><FaHistory className="icon-contrast" />История арендных платежей — оцениваем надежность арендатора.</li>
                <li><FaFileContract className="icon-contrast" />Оценка Договора аренды — разбираем обязательства и риски.</li>
                <li><FaTools className="icon-contrast" />Техническое состояние объекта, красные линии и инженерные коммуникации — выявляем недостатки и планируем их устранение.</li>
              </ul>
            </div>

            {/* Правая колонка — что получит собственник */}
            <div className="owners-column fade-in fade-delay-4">
              <p className="owners-heading">Стабильный пассивный доход</p>
              <ul className="owners-list">
                <p>На сегодняшний день мы реализуем полный цикл работ по проектам в сфере арендного бизнеса: мы выполняем все работы своими силами и за свой счет.</p>
                <p>Можете сдать нашей компании в аренду нежилое помещение, коммерческую недвижимость и получать долгосрочный стабильный пассивный доход, а все остальные заботы мы возьмем на себя.</p>
              </ul>
            </div>
          </div>

          {/* Кнопка */}
          <div className="owners-button-wrap fade-in fade-delay-5">
            <a href="#contact" className="owners-button">Связаться</a>
          </div>
        </div>
      </div>
    </section>
  );
}

