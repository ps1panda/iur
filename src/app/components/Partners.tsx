import Image from "next/image";
import { partners } from "../data/content";
import "./Partners.css";

export function Partners() {
  // дублируем для бесшовной прокрутки
  const marqueeItems = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="partners-section"
      aria-label="Наши партнёры — логотипы брендов"
    >
      <div className="partners-container">
        <div className="partners-block">
          <div className="partners-header">
            <h2 className="partners-title">Партнёры</h2>
          </div>

          <div className="partners-marquee-wrap">
            <ul className="partners-marquee" aria-hidden="true">
              {marqueeItems.map((partner, i) => (
                <li key={`${partner.name}-${i}`} className="partner-tile">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={72}
                    className="partner-logo"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 200px"
                    priority={i === 0} // небольшой буст LCP первому
                  />
                </li>
              ))}
            </ul>

            {/* визуальные края через mask-image — без лишних элементов */}
          </div>
        </div>
      </div>
    </section>
  );
}
