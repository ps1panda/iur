import { ownerBenefits } from "../data/content";

export function Owners() {
  return (
    <section id="owners" className="mx-auto w-full max-w-[1440px] px-6 pb-24">
      <div className="rounded-[40px] bg-white/5 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold text-white">
            Управление, которое усиливает актив
          </h2>
          <p className="max-w-xl text-base text-white/70">
            Внедряем цифровые панели, сервисные стандарты и гибкие сценарии использования площадей, чтобы актив приносил больше и стоил дороже.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ownerBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl bg-[#040a1c] p-8"
            >
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
