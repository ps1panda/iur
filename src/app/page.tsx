import Image from "next/image";

const navItems = [
  { id: "hero", label: "Главная" },
  { id: "custom-business", label: "Бизнес на заказ" },
  { id: "owners", label: "Собственникам" },
  { id: "projects", label: "Объекты" },
  { id: "partners", label: "Партнёры" },
];

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
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Image
            src="/group.svg"
            alt="Логотип Group"
            width={160}
            height={80}
            className="h-9 w-auto"
            priority
          />
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-300">
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
              className="rounded-full bg-[#f8c545] px-6 py-2 text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-950 transition hover:bg-[#ffd669]"
            >
              Заказать консультацию
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative isolate overflow-hidden border-b border-white/10 bg-[#040d1f]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(8, 20, 45, 0.95), rgba(10, 34, 74, 0.92)), url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040d1f]/60 to-[#07152c]" />
          <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
            <div className="max-w-3xl space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#7aa6ff]">
                Invest Urban Rent
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Мы создаём пространства коммерческой недвижимости и управляем ими для стабильного
                пассивного дохода
              </h1>
              <p className="max-w-2xl text-base text-white/80 md:text-lg">
                Берём на себя полный цикл: от подбора и проектирования до операционного управления
                объектами, чтобы вы получали предсказуемый результат и уверенность в будущем.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="rounded-full bg-[#f8c545] px-8 py-3 text-xs font-bold uppercase tracking-[0.45em] text-zinc-950 transition hover:bg-[#ffd669]"
                >
                  Узнать больше
                </a>
                <a
                  href="#custom-business"
                  className="rounded-full border border-white/40 px-8 py-3 text-xs font-bold uppercase tracking-[0.45em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Бизнес на заказ
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-20 px-6 py-20 text-zinc-900">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-3xl border border-white/60 bg-white/90 p-10 shadow-lg shadow-zinc-900/5"
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

      <footer className="border-t border-white/10 bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-white/40 md:flex-row md:justify-between">
          <span className="font-medium text-white/70">Invest Urban Rent</span>
          <p>
            © {new Date().getFullYear()} Ваша компания. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
