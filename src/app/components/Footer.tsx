export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-6 py-10 text-center text-xs uppercase tracking-[0.35em] text-white/40 md:flex-row md:items-center md:justify-between">
        <span className="text-sm font-semibold text-white/80">Invest Urban Rent</span>
        <p>© {new Date().getFullYear()} Invest Urban Rent. Все права защищены.</p>
        <a href="#privacy" className="hover:text-white">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
