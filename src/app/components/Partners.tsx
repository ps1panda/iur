import Image from "next/image";

import { partners } from "../data/content";

export function Partners() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="partners" className="bg-[#f1f4fb] py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="rounded-[36px] bg-white p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-semibold text-[#0c1f44]">Партнёры</h2>
            <p className="max-w-xl text-base leading-relaxed text-[#2d4372]">
              Коммерческие пространства Invest Urban Rent выбирают федеральные сети, сервисные компании и гастропроекты, чтобы открывать флагманские точки и расширять присутствие в городах России.
            </p>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[28px] bg-white/90">
            <div className="flex min-w-max items-center gap-8 py-10 animate-partners-marquee">
              {marqueeItems.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-24 min-w-[220px] items-center justify-center px-6"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={72}
                    className="h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
