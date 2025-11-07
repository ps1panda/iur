import Image from "next/image";

import { navItems } from "../data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5">
        <Image
          src="/group.svg"
          alt="Логотип Invest Urban Rent"
          width={170}
          height={60}
          className="h-10 w-auto"
          priority
        />
        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacts"
            className="rounded-full bg-[#f8c545] px-9 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  );
}
