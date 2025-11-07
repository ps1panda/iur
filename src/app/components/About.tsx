export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1440px] px-6 py-24">
      <div className="grid gap-12 rounded-[40px] bg-white/5 p-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
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
          <div className="rounded-3xl bg-white/10 p-8">
            <h3 className="text-lg font-semibold text-white">Подход</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Личный менеджер проекта и единая точка входа для инвесторов и арендаторов.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-8">
            <h3 className="text-lg font-semibold text-white">Экспертиза</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Более 15 лет в девелопменте, BOMA-стандарты управления и собственная аналитика рынка.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-8">
            <h3 className="text-lg font-semibold text-white">Команда</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Архитекторы, инженеры, маркетологи и финансовые аналитики, объединённые общей целью.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
