'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItems } from '../data/content';

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

  // Позиционирование:
  // - На главной до скролла: absolute поверх hero
  // - После скролла или на внутренних: fixed top-0
  const positionClass =
    isHome && !scrolled
      ? 'absolute top-0 left-0 w-full'
      : 'fixed top-0 left-0 w-full';

  // Визуальный стиль при скролле
  const scrolledClass =
    scrolled || !isHome
      ? 'bg-white/80 backdrop-blur-md shadow-sm text-zinc-900'
      : 'bg-transparent backdrop-blur-sm text-white';

  return (
    <>
      <header
        className={`${positionClass} z-50 transition-all duration-500 ${scrolledClass}`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5">
          <Image
            src="/group.svg"
            alt="Логотип Invest Urban Rent"
            width={170}
            height={60}
            className="h-10 w-auto transition-all duration-500"
            priority
          />
          <div className="hidden items-center gap-10 md:flex">
            <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="no-underline transition-colors duration-200 hover:text-[var(--color-primary-dark)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacts"
              className="no-underline rounded-full bg-[var(--color-contrast)] px-9 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
            >
              Связаться
            </a>
          </div>
        </div>
      </header>

      {/* Спейсер, чтобы контент не подпрыгивал на внутренних страницах */}
      {!isHome && <div aria-hidden className="h-[68px] md:h-[80px]" />}
    </>
  );
}
