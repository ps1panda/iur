import { processSteps } from "../data/content";

export function CustomBusiness() {
  return (
    <section
      id="custom-business"
      className="mx-auto w-full max-w-[1440px] px-6 pb-24"
    >
      <div className="rounded-[40px] bg-[#050b1d] p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold text-white">
            От концепции до первого арендатора
          </h2>
          <p className="max-w-xl text-base text-white/70">
            Мы берём на себя полный цикл реализации объекта. Глубокая аналитика рынка и прозрачное планирование позволяют заранее понимать сроки окупаемости и прогноз по кэш-флоу.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="group rounded-3xl bg-white/10 p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 group-hover:text-white">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
