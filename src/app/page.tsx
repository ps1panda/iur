const sections = [
  { id: "about", title: "О компании" },
  { id: "custom-business", title: "Бизнес на заказ" },
  { id: "owners", title: "Собственникам" },
  { id: "projects", title: "Объекты / Проекты" },
  { id: "partners", title: "Партнёры" },
  { id: "contacts", title: "Контакты" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold">Header</span>
          <nav className="hidden gap-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 md:flex">
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
        <section id="hero" className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center">
            <h1 className="text-4xl font-semibold uppercase tracking-[0.3em] text-zinc-700">
              Hero
            </h1>
            <p className="text-sm text-zinc-500">
              Здесь можно разместить короткое описание или призыв к действию.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-12 px-6 py-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-10 text-center"
            >
              <h2 className="text-2xl font-semibold uppercase tracking-[0.3em] text-zinc-700">
                {section.title}
              </h2>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl justify-center px-6 py-8 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Footer
        </div>
      </footer>
    </div>
  );
}
