import Image from "next/image";

import {
  navItems,
  ownerBenefits,
  partners,
  processSteps,
  projects,
} from "./data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040d1f] text-zinc-100">
      <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5">
          <Image
            src="/group.svg"
            alt="Логотип Invest Urban Rent"
            width={170}
            height={60}
            className="h-10 w-auto"
            priority
          />
          <div className="hidden items-center gap-10 md:flex">
            <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacts"
              className="rounded-full bg-[#f8c545] px-9 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
            >
              Связаться
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(4, 10, 24, 0.65), rgba(5, 24, 56, 0.8)), url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#040d1f] via-[#040d1f]/60 to-transparent" />
          <div className="relative mx-auto flex min-h-[70vh] w-full max-w-[1440px] flex-col gap-12 px-6 pb-24 pt-24 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-10">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
                  <span className="block">Invest</span>
                  <span className="block">Urban</span>
                  <span className="block">Rent</span>
                </h1>
                <p className="text-xl font-medium text-white/90 md:text-2xl">
                  Мы создаём и управляем коммерческими пространствами, превращая их в стабильный источник пассивного дохода для инвесторов и собственников.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacts"
                  className="rounded-full bg-[#f8c545] px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
                >
                  Связаться
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-white/50 px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  Объекты
                </a>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-white">Ключевые показатели</h2>
              <dl className="mt-6 space-y-4 text-sm text-white/80">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <dt>Управляемая площадь</dt>
                  <dd className="font-semibold text-white">12 600 м²</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <dt>Средняя ставка доходности</dt>
                  <dd className="font-semibold text-white">15,4% годовых</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Партнёры и арендаторы</dt>
                  <dd className="font-semibold text-white">45+</dd>
                </div>
              </dl>
              <p className="mt-6 text-xs text-white/60">
                Регулярные стратегические сессии и ежеквартальные отчёты помогают инвесторам контролировать результат на каждом этапе.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-[1440px] px-6 py-24">
          <div className="grid gap-12 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                О компании
              </span>
              <h2 className="text-4xl font-semibold text-white md:text-5xl">
                Управление коммерческой недвижимостью на языке инвестора
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                Команда Invest Urban Rent объединяет девелоперов, аналитиков и управляющих с опытом в офисных, торговых и креативных пространствах. Мы сопровождаем проекты на всех стадиях, превращая квадратные метры в эффективные инвестиционные инструменты.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Наша цель — создавать пространства, которые работают на бренд арендатора, город и инвестора одновременно. Для этого мы погружаемся в специфику локации, считаем экономику, усиливаем дизайн и постоянно оптимизируем операционные процессы.
              </p>
            </div>
            <div className="grid gap-6 text-sm text-white/80">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Подход</p>
                <p className="mt-4 text-lg font-semibold text-white">
                  Личный менеджер проекта и единая точка входа для инвесторов и арендаторов.
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Экспертиза</p>
                <p className="mt-4 text-lg font-semibold text-white">
                  Более 15 лет в девелопменте, BOMA-стандарты управления и собственная аналитика рынка.
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Команда</p>
                <p className="mt-4 text-lg font-semibold text-white">
                  Архитекторы, инженеры, маркетологи и финансовые аналитики, объединённые общей целью.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="custom-business"
          className="mx-auto w-full max-w-[1440px] px-6 pb-24"
        >
          <div className="rounded-[40px] border border-white/10 bg-[#050b1d] p-10 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Бизнес на заказ
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-white">
                  От концепции до первого арендатора
                </h2>
              </div>
              <p className="max-w-xl text-base text-white/70">
                Мы берём на себя полный цикл реализации объекта. Глубокая аналитика рынка и прозрачное планирование позволяют заранее понимать сроки окупаемости и прогноз по кэш-флоу.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="text-sm uppercase tracking-[0.35em] text-[#f8c545]">{step.title}</div>
                  <p className="mt-4 text-sm leading-relaxed text-white/75 group-hover:text-white">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="owners" className="mx-auto w-full max-w-[1440px] px-6 pb-24">
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Собственникам
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-white">
                  Управление, которое усиливает актив
                </h2>
              </div>
              <p className="max-w-xl text-base text-white/70">
                Внедряем цифровые панели, сервисные стандарты и гибкие сценарии использования площадей, чтобы актив приносил больше и стоил дороже.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {ownerBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-white/15 bg-[#040a1c] p-8"
                >
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-[1440px] px-6 pb-24">
          <div className="rounded-[40px] border border-white/10 bg-[#050b1d] p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Объекты
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-white">
                  Портфель реализованных проектов
                </h2>
              </div>
              <p className="max-w-xl text-base text-white/70">
                От креативных кластеров и гибких офисов до форматных retail-пространств — мы адаптируем концепцию под стратегию инвестора.
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040d1f] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/80">
                      <span>{project.area}</span>
                      <span>{project.status}</span>
                    </div>
                  </div>
                  <div className="space-y-3 p-8">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-white/70">{project.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="mx-auto w-full max-w-[1440px] px-6 pb-24">
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Партнёры
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-white">
                  Надёжные альянсы для устойчивого роста
                </h2>
              </div>
              <p className="max-w-xl text-base text-white/70">
                Мы работаем с банками, девелоперами и сервисными компаниями, которые разделяют наши стандарты качества и клиентоориентированности.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex h-20 items-center justify-center rounded-2xl border border-white/15 bg-[#040a1c] text-sm font-semibold uppercase tracking-[0.25em] text-white/70"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mx-auto w-full max-w-[1440px] px-6 pb-28">
          <div className="grid gap-10 rounded-[40px] border border-white/10 bg-[#050b1d] p-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">Контакты</span>
              <h2 className="text-4xl font-semibold text-white">
                Свяжитесь, чтобы обсудить потенциал вашего объекта
              </h2>
              <p className="text-base text-white/75">
                Расскажите нам о задаче, и мы подготовим экспресс-анализ с вариантами сценариев. Менеджер ответит в течение рабочего дня.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Телефон</p>
                  <a href="tel:+74950000000" className="mt-3 block text-lg font-semibold text-white">
                    +7 (495) 000-00-00
                  </a>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Почта</p>
                  <a
                    href="mailto:contact@iur.ru"
                    className="mt-3 block text-lg font-semibold text-white"
                  >
                    contact@iur.ru
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Офис</p>
                <p className="mt-3 text-sm text-white/75">
                  Москва, БЦ «Прага», 2-й Красногвардейский проезд, 7 стр. 1
                </p>
              </div>
            </div>
            <form className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">Запросить консультацию</h3>
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                Имя
                <input
                  type="text"
                  placeholder="Как к вам обращаться"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f8c545] focus:outline-none"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                Телефон или e-mail
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f8c545] focus:outline-none"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                Кратко о задаче
                <textarea
                  placeholder="Например: нужен редевелопмент бизнес-центра на 4 000 м²"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f8c545] focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-4 rounded-full bg-[#f8c545] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
              >
                Отправить заявку
              </button>
              <p className="text-[11px] leading-relaxed text-white/50">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных и получение информационных материалов от Invest Urban Rent.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-transparent">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-6 py-10 text-center text-xs uppercase tracking-[0.35em] text-white/40 md:flex-row md:items-center md:justify-between">
          <span className="text-sm font-semibold text-white/80">Invest Urban Rent</span>
          <p>© {new Date().getFullYear()} Invest Urban Rent. Все права защищены.</p>
          <a href="#privacy" className="hover:text-white">
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </div>
  );
}
