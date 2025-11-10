'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Contacts() {
  const titleRef = useScrollReveal<HTMLHeadingElement>({ variant: 'up', distance: 20 });
  const lineRef = useScrollReveal<HTMLDivElement>({ variant: 'fade', delay: 120, duration: 600 });
  const contentRef = useScrollReveal<HTMLDivElement>({ variant: 'up', distance: 30, delay: 200 });

  return (
    <section id="contacts" className="mx-auto w-full max-w-[1440px] px-6 pb-28 text-white">
      <div
        ref={contentRef}
        className="grid gap-10 rounded-[40px] bg-[#050b1d] p-10 md:grid-cols-[1.2fr_0.8fr] reveal"
      >
        {/* Левая часть */}
        <div className="space-y-8 text-white">
          <div ref={titleRef} className="reveal">
            <h2 className="text-4xl font-semibold text-white">
              Свяжитесь, чтобы обсудить потенциал вашего объекта
            </h2>
            <div
              ref={lineRef}
              className="mt-3 h-[3px] w-24 rounded-full bg-[#f8c545] reveal"
            />
          </div>

          <p className="text-base text-white">
            Расскажите нам о задаче, и мы подготовим экспресс-анализ с вариантами сценариев.
            Менеджер ответит в течение рабочего дня.
          </p>

          {/* Контакты вертикально */}
          <div className="space-y-6 text-white">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Телефон</h3>
              <a
                href="tel:+74950000000"
                className="mt-2 block text-lg font-semibold text-white hover:text-[#f8c545] transition-colors"
              >
                +7 (495) 000-00-00
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Почта</h3>
              <a
                href="mailto:contact@iur.ru"
                className="mt-2 block text-lg font-semibold text-white hover:text-[#f8c545] transition-colors"
              >
                contact@iur.ru
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Офис</h3>
              <p className="mt-2 text-sm text-white">
                Москва, БЦ «Прага», 2-й Красногвардейский проезд, 7 стр. 1
              </p>
            </div>
          </div>
        </div>

        {/* Форма */}
        <form className="flex flex-col gap-4 rounded-3xl bg-white/5 p-8 text-white">
          <h3 className="text-lg font-semibold text-white">Запросить консультацию</h3>
          <label className="text-sm font-medium text-white">
            Имя
            <input
              type="text"
              placeholder="Как к вам обращаться"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f8c545] focus:outline-none"
            />
          </label>
          <label className="text-sm font-medium text-white">
            Телефон или e-mail
            <input
              type="text"
              placeholder="+7 (___) ___-__-__"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f8c545] focus:outline-none"
            />
          </label>
          <label className="text-sm font-medium text-white">
            Кратко о задаче
            <textarea
              placeholder="Например: нужен редевелопмент бизнес-центра на 4 000 м²"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f8c545] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-4 rounded-full bg-[#f8c545] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
          >
            Отправить заявку
          </button>
          <p className="text-[11px] leading-relaxed text-white">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных и получение
            информационных материалов от Invest Urban Rent.
          </p>
        </form>
      </div>
    </section>
  );
}
