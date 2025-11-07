import { partners } from "../data/content";

export function Partners() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="partners" className="bg-[#f4f7fb] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="rounded-[36px] border border-[#dbe5f3] bg-white p-10 shadow-[0_30px_80px_-40px_rgba(12,31,68,0.35)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-[#2d4372]/60">
                Партнёры
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-[#0c1f44]">
                Бренды, которым мы помогаем расти
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[#3b4a6b]">
              Коммерческие пространства Invest Urban Rent выбирают федеральные сети, сервисные компании и гастропроекты, чтобы открывать флагманские точки и расширять присутствие в городах России.
            </p>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[28px] border border-[#dbe5f3] bg-[#f8faff]">
            <div className="flex min-w-max items-center gap-6 py-8 animate-partners-marquee">
              {marqueeItems.map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex h-20 min-w-[180px] items-center justify-center rounded-2xl bg-white px-6 text-base font-semibold text-[#0c1f44] shadow-[0_10px_30px_-20px_rgba(12,31,68,0.45)]"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
