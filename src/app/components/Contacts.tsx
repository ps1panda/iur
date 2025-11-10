'use client';

import { useRevealGroup, useScrollReveal } from '@/hooks/useScrollReveal';
import './Contacts.css';

export function Contacts() {
  const cardRef = useScrollReveal<HTMLDivElement>({
    variant: 'up',
    distance: 28,
    delay: 140,
  });
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
  const leadRef = useScrollReveal<HTMLParagraphElement>({
    variant: 'up',
    distance: 16,
    delay: 220,
  });
  const infoGroupRef = useRevealGroup<HTMLDivElement>({
    variant: 'up',
    distance: 12,
    delayBase: 320,
    step: 120,
  });
  const formGroupRef = useRevealGroup<HTMLFormElement>({
    variant: 'up',
    distance: 14,
    delayBase: 360,
    step: 100,
    scopeSelector: ':scope > [data-reveal]',
  });

  return (
    <section id="contacts" className="contacts-section">
      <div ref={cardRef} className="contacts-card reveal" data-reveal="up">
        <div className="contacts-card__inner">
          <div className="contacts-info">
          <div className="contacts-heading">
            <h2 ref={titleRef} className="section-heading reveal" data-reveal="up">
              Свяжитесь, чтобы обсудить потенциал вашего объекта
            </h2>
            <div ref={lineRef} className="section-line reveal" data-reveal="fade" aria-hidden="true" />
          </div>

          <p ref={leadRef} className="contacts-lead section-lead reveal" data-reveal="up">
            Расскажите нам о задаче, и мы подготовим экспресс-анализ с вариантами сценариев. Менеджер ответит в течение рабочего
            дня.
          </p>

          <div ref={infoGroupRef} className="contacts-list" data-reveal>
            <div className="contacts-list__item" data-reveal>
              <h3 className="contacts-list__title">Телефон</h3>
              <a className="contacts-list__link" href="tel:+74950000000" data-reveal>
                +7 (495) 000-00-00
              </a>
            </div>
            <div className="contacts-list__item" data-reveal>
              <h3 className="contacts-list__title">Почта</h3>
              <a className="contacts-list__link" href="mailto:contact@iur.ru" data-reveal>
                contact@iur.ru
              </a>
            </div>
            <div className="contacts-list__item" data-reveal>
              <h3 className="contacts-list__title">Офис</h3>
              <p className="contacts-list__text" data-reveal>
                Москва, БЦ «Прага», 2-й Красногвардейский проезд, 7 стр. 1
              </p>
            </div>
          </div>
        </div>

          <form ref={formGroupRef} className="contacts-form" data-reveal>
            <h3 className="contacts-form__title" data-reveal>
              Запросить консультацию
            </h3>
            <label className="contacts-form__field" data-reveal>
              <span>Имя</span>
              <input type="text" placeholder="Как к вам обращаться" />
            </label>
            <label className="contacts-form__field" data-reveal>
              <span>Телефон или e-mail</span>
              <input type="text" placeholder="+7 (___) ___-__-__" />
            </label>
            <label className="contacts-form__field" data-reveal>
              <span>Кратко о задаче</span>
              <textarea
                placeholder="Например: нужен редевелопмент бизнес-центра на 4 000 м²"
                rows={4}
              />
            </label>
            <button className="contacts-form__submit" data-reveal type="submit">
              Отправить заявку
            </button>
            <p className="contacts-form__note" data-reveal>
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных и получение информационных материалов от Invest
              Urban Rent.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
