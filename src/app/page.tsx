import Image from "next/image";

const sections = [
  {
    id: "services",
    title: "Услуги",
    lead: "Описание ключевых направлений и форматов сотрудничества.",
    description:
      "Расскажите о спектре услуг, которые вы оказываете: от консалтинга и разработки стратегии до внедрения и поддержки. Выделите уникальные преимущества и экспертность команды.",
  },
  {
    id: "tenant-partners",
    title: "Партнеры-арендаторы",
    lead: "Предложение для арендаторов и корпоративных партнёров.",
    description:
      "Опишите, какую инфраструктуру и сервисы получают арендаторы. Укажите возможности для совместных проектов, условия размещения и поддержку, которую вы оказываете партнёрам.",
  },
  {
    id: "about",
    title: "О компании",
    lead: "Краткая информация о миссии и ценностях вашей команды.",
    description:
      "Используйте этот блок, чтобы рассказать о ключевых направлениях деятельности, опыте и подходе к работе. Добавьте несколько предложений, которые помогут посетителям сформировать общее представление о компании.",
  },
  {
    id: "objects",
    title: "Объекты",
    lead: "Ключевые объекты и площадки, которые вы развиваете.",
    description:
      "Приведите информацию о доступных площадях, их характеристиках и преимуществах. Расскажите о локациях, техническом оснащении и дополнительных возможностях для резидентов.",
  },
  {
    id: "projects",
    title: "Проекты",
    lead: "Подборка завершённых и текущих проектов.",
    description:
      "Приведите примеры реализованных инициатив, ключевые показатели и используемые технологии. Здесь удобно разместить галерею или карточки с кратким описанием каждого проекта.",
  },
  {
    id: "contacts",
    title: "Контакты",
    lead: "Способы связи и адреса офисов.",
    description:
      "Укажите телефон, электронную почту и адрес. Добавьте форму обратной связи или ссылку на мессенджеры, чтобы упростить коммуникацию.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] text-[#0A0E1A]">
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#F8FAFC]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#hero" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#001DFF] shadow-lg shadow-[#001DFF]/25">
              <Image src="/logo.svg" alt="Логотип компании" width={28} height={28} className="h-7 w-7" />
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-[#000433] sm:block">
              Индустриальные решения
            </span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#6B7280] md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition-colors duration-200 hover:text-[#001DFF]"
              >
                {section.title}
              </a>
            ))}
          </nav>
          <a
            href="#contacts"
            className="hidden rounded-full bg-[#001DFF] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-[#000D99] md:inline-flex"
          >
            Связаться
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center rounded-full bg-[#001DFF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-[#000D99] md:hidden"
          >
            Связаться
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="border-b border-[#001DFF]/10 bg-gradient-to-r from-[#000433] via-[#000D99] to-[#001DFF] text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-28 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.4em] text-[#FFB800]">Header + Hero</p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Заголовок главного предложения
              </h1>
              <p className="mt-6 text-base text-white/80 md:text-lg">
                Расскажите о ключевом преимуществе и уникальном предложении компании. В этом блоке
                можно разместить краткое описание продукта или сервиса, призыв к действию и ссылки
                на важные разделы сайта.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacts"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#001DFF] transition hover:bg-[#FFB800]/20"
                >
                  Связаться с нами
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Смотреть проекты
                </a>
              </div>
            </div>
            <div className="grid w-full max-w-md gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <span className="text-sm uppercase tracking-[0.3em] text-white/80">Краткая справка</span>
              <p className="text-sm text-white/80">
                Используйте карточку для подсветки достижения, статистики или важного факта. Вы
                можете заменить этот текст списком или диаграммой.
              </p>
              <div className="flex gap-6 text-sm text-white/80">
                <div>
                  <p className="text-3xl font-semibold text-white">24+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">
                    Реализованных проектов
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">12 лет</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32 rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC]/95 p-10 shadow-sm backdrop-blur"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-[#6B7280]">{section.title}</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#000433]">
                {section.title}
              </h2>
              <p className="mt-4 text-sm font-medium text-[#6B7280]">{section.lead}</p>
              <p className="mt-6 text-base leading-relaxed text-[#0A0E1A]/80">{section.description}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#E5E7EB] bg-[#F8FAFC]/95">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-[#6B7280] md:flex-row md:justify-between">
          <span className="font-medium text-[#000433]">Footer</span>
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B7280]">
            © {new Date().getFullYear()} Индустриальные решения. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
