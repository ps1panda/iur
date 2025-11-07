export function Contacts() {
  return (
    <section id="contacts" className="mx-auto w-full max-w-[1440px] px-6 pb-28">
      <div className="grid gap-10 rounded-[40px] border border-white/10 bg-[#050b1d] p-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.35em] text-white/60">Контакты</span>
          <h2 className="text-4xl font-semibold text-white">
            Свяжитесь, чтобы обсудить потенциал вашего объекта
          </h2>
          <p className="text-base text-white/75">
            Расскажите нам о задаче, и мы подготовим экспресс-анализ с вариантами сценариев. Менеджер ответит в течение рабочего дня.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Телефон</p>
              <a href="tel:+74950000000" className="mt-3 block text-lg font-semibold text-white">
                +7 (495) 000-00-00
              </a>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Почта</p>
              <a
                href="mailto:contact@iur.ru"
                className="mt-3 block text-lg font-semibold text-white"
              >
                contact@iur.ru
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Офис</p>
            <p className="mt-3 text-sm text-white/75">
              Москва, БЦ «Прага», 2-й Красногвардейский проезд, 7 стр. 1
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-8">
          <h3 className="text-lg font-semibold text-white">Запросить консультацию</h3>
          <label className="text-xs uppercase tracking-[0.35em] text-white/60">
            Имя
            <input
              type="text"
              placeholder="Как к вам обращаться"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f8c545] focus:outline-none"
            />
          </label>
          <label className="text-xs uppercase tracking-[0.35em] text-white/60">
            Телефон или e-mail
            <input
              type="text"
              placeholder="+7 (___) ___-__-__"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f8c545] focus:outline-none"
            />
          </label>
          <label className="text-xs uppercase tracking-[0.35em] text-white/60">
            Кратко о задаче
            <textarea
              placeholder="Например: нужен редевелопмент бизнес-центра на 4 000 м²"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#040a1c] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f8c545] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-4 rounded-full bg-[#f8c545] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-950 transition-colors duration-200 hover:bg-[#ffd669]"
          >
            Отправить заявку
          </button>
          <p className="text-[11px] leading-relaxed text-white/50">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных и получение информационных материалов от Invest Urban Rent.
          </p>
        </form>
      </div>
    </section>
  );
}
