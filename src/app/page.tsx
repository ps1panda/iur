import Image from "next/image";

const sections = [
  {
    id: "about",
    title: "О компании",
    lead: "Краткая информация о миссии и ценностях вашей команды.",
    description:
      "Используйте этот блок, чтобы рассказать о ключевых направлениях деятельности, опыте и подходе к работе. Добавьте несколько предложений, которые помогут посетителям сформировать общее представление о компании.",
  },
  {
    id: "custom-business",
    title: "Бизнес на заказ",
    lead: "Описание услуг по индивидуальному проектированию и реализации.",
    description:
      "Опишите, как вы работаете с бизнес-задачами клиентов: от анализа и разработки концепции до запуска готового решения. Можно перечислить основные этапы или преимущества сотрудничества.",
  },
  {
    id: "owners",
    title: "Собственникам",
    lead: "Секция для ключевых офферов и выгод собственникам объектов.",
    description:
      "Расскажите о прозрачности процессов, отчётности и инструментах управления, которые вы предоставляете собственникам. Добавьте пункты о повышении стоимости активов и снижении операционных рисков.",
  },
  {
    id: "projects",
    title: "Объекты / Проекты",
    lead: "Подборка завершённых и текущих объектов.",
    description:
      "Приведите примеры реализованных проектов, ключевые показатели и используемые технологии. Здесь удобно разместить галерею или карточки с кратким описанием каждого объекта.",
  },
  {
    id: "partners",
    title: "Партнёры",
    lead: "Раздел для логотипов и отзывов партнёров.",
    description:
      "Упомяните ключевые бренды и компании, с которыми вы сотрудничаете. Можно добавить цитаты или короткие отзывы, подчёркивающие надёжность и устойчивость партнёрств.",
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Image
            src="/group.svg"
            alt="Логотип Group"
            width={160}
            height={80}
            className="h-10 w-auto"
            priority
          />
          <nav className="hidden gap-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition-colors hover:text-zinc-900"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="border-b border-white/60 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-28 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-300">Header + Hero</p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Заголовок главного предложения
              </h1>
              <p className="mt-6 text-base text-zinc-200 md:text-lg">
                Расскажите о ключевом преимуществе и уникальном предложении компании. В этом блоке
                можно разместить краткое описание продукта или сервиса, призыв к действию и ссылки
                на важные разделы сайта.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacts"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                >
                  Связаться с нами
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Смотреть проекты
                </a>
              </div>
            </div>
            <div className="grid w-full max-w-md gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <span className="text-sm uppercase tracking-[0.3em] text-zinc-300">Краткая справка</span>
              <p className="text-sm text-zinc-100">
                Используйте карточку для подсветки достижения, статистики или важного факта. Вы
                можете заменить этот текст списком или диаграммой.
              </p>
              <div className="flex gap-6 text-sm text-zinc-200">
                <div>
                  <p className="text-3xl font-semibold text-white">24+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-400">
                    Реализованных проектов
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">12 лет</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-400">на рынке</p>
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
              className="scroll-mt-24 rounded-3xl border border-zinc-200/70 bg-white/80 p-10 shadow-sm backdrop-blur"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-400">{section.title}</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
                {section.title}
              </h2>
              <p className="mt-4 text-sm font-medium text-zinc-500">{section.lead}</p>
              <p className="mt-6 text-base leading-relaxed text-zinc-600">{section.description}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/60 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-zinc-500 md:flex-row md:justify-between">
          <span className="font-medium text-zinc-700">Footer</span>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            © {new Date().getFullYear()} Ваша компания. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
