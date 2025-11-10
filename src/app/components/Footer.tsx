'use client';

import { useRevealGroup } from '@/hooks/useScrollReveal';
import './Footer.css';

export function Footer() {
  const footerGroupRef = useRevealGroup<HTMLDivElement>({
    variant: 'up',
    distance: 14,
    delayBase: 0,
    step: 120,
  });

  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div ref={footerGroupRef} className="site-footer__inner" data-reveal>
        <span className="site-footer__brand" data-reveal>
          Invest Urban Rent
        </span>
        <p className="site-footer__copy" data-reveal>
          © {year} Invest Urban Rent. Все права защищены.
        </p>
        <a className="site-footer__link" data-reveal href="#privacy">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
