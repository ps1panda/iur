import { partners } from "../data/content";

export function Partners() {
  return (
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
  );
}
