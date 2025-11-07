export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(32, 58, 112, 0.6), rgba(7, 18, 42, 0.85)), url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#040d1f] via-[#040d1f]/60 to-transparent" />
      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-[1440px] flex-col gap-12 px-6 pb-24 pt-24 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">
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
              className="rounded-full bg-[#f8c545] px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
            >
              Связаться
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/50 px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Объекты
            </a>
          </div>
        </div>
        <div className="w-full max-w-sm rounded-3xl bg-white/10 p-8">
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
  );
}
