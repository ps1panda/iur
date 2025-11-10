'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRevealGroup, useScrollReveal } from '@/hooks/useScrollReveal';
import { navItems } from '../data/content';
import './Header.css';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); // выставим корректное состояние при загрузке
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linksGroupRef = useRevealGroup<HTMLDivElement>({
    variant: 'down',
    distance: 12,
    delayBase: 140,
    step: 80,
  });

  const ctaRef = useScrollReveal<HTMLAnchorElement>({
    variant: 'up',
    distance: 12,
    delay: 220,
  });

  const headerClassName = useMemo(() => {
    const classes = ['site-header'];
    if (isHome && !scrolled) {
      classes.push('site-header--floating');
    } else {
      classes.push('site-header--fixed');
    }
    if (scrolled || !isHome) {
      classes.push('site-header--solid');
    } else {
      classes.push('site-header--transparent');
    }
    return classes.join(' ');
  }, [isHome, scrolled]);

  return (
    <>
      <header className={headerClassName}>
        <div className="site-header__inner">
          <Image
            src="/group.svg"
            alt="Логотип Invest Urban Rent"
            width={170}
            height={60}
            className="site-header__logo"
            priority
          />
          <div className="site-header__actions">
            <nav
              ref={linksGroupRef}
              className="site-header__nav"
              aria-label="Основная навигация"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="site-header__link"
                  data-reveal
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              ref={ctaRef}
              href="#contacts"
              className="site-header__cta"
              data-reveal
            >
              Связаться
            </a>
          </div>
        </div>
      </header>

      {/* Спейсер, чтобы контент не подпрыгивал на внутренних страницах */}
      {!isHome && <div aria-hidden className="header-spacer" />}
    </>
  );
}
