export const navItems = [
  { id: "hero", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "custom-business", label: "Бизнес на заказ" },
  { id: "owners", label: "Собственникам" },
  { id: "projects", label: "Объекты" },
  { id: "partners", label: "Партнёры" },
  { id: "contacts", label: "Контакты" },
] as const;

export const processSteps = [
  {
    title: "Стратегия",
    description:
      "Анализ локации, аудит потенциального спроса и финансовое моделирование будущего объекта.",
  },
  {
    title: "Проектирование",
    description:
      "Создаём архитектурную концепцию, просчитываем инженерные решения и формируем смету реализации.",
  },
  {
    title: "Реализация",
    description:
      "Берём на себя подбор подрядчиков, контроль сроков и качества строительства или редевелопмента.",
  },
  {
    title: "Операция",
    description:
      "Настраиваем эксплуатацию, привлекаем арендаторов и обеспечиваем прозрачную отчётность по доходности.",
  },
] as const;

export const ownerBenefits = [
  {
    title: "Финансовая прозрачность",
    description:
      "Ежемесячная отчётность с ключевыми показателями и прогнозом доходности по каждому объекту.",
  },
  {
    title: "Рост стоимости",
    description:
      "Повышаем капитализацию активов за счёт редевелопмента, оптимизации управляющих расходов и маркетинга.",
  },
  {
    title: "Операционный комфорт",
    description:
      "Полностью берём на себя юридический, бухгалтерский и технический блок, освобождая собственника от рутины.",
  },
] as const;

export const projects = [
  {
    title: "IUR Loft",
    location: "Москва, Большая Никитская",
    area: "3 400 м²",
    status: "Заполненность 94%",
    image:
      "https://images.unsplash.com/photo-1505692794403-55b39e8392e3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Depot Point",
    location: "Санкт-Петербург, Невский проспект",
    area: "2 100 м²",
    status: "Редевелопмент 2025",
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Atelier Offices",
    location: "Екатеринбург, Вайнера",
    area: "1 750 м²",
    status: "Доходность 16,2%",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const partners = [
  { name: "Аптеки Горздрав", image: "/partners/gorzdrav.svg" },
  { name: "Wildberries", image: "/partners/wildberries.svg" },
  { name: "OZON", image: "/partners/ozon.svg" },
  { name: "Fix Price", image: "/partners/fix-price.svg" },
  { name: "Четыре Лапы", image: "/partners/chetyre-lapy.svg" },
  { name: "Пятёрочка", image: "/partners/pyaterochka.svg" },
  { name: "ВкусВилл", image: "/partners/vkusvill.svg" },
  { name: "Invitro", image: "/partners/invitro.svg" },
  { name: "Улыбка Радуги", image: "/partners/ulybka-radugi.svg" },
  { name: "Магнит Косметик", image: "/partners/magnit-kosmetik.svg" },
  { name: "Планета Здоровья", image: "/partners/planeta-zdorovya.svg" },
  { name: "Перекрёсток", image: "/partners/perekrestok.svg" },
  { name: "Буханка пекарня", image: "/partners/buhanka.svg" },
  { name: "Додо Пицца", image: "/partners/dodo-pizza.svg" },
  { name: "Билайн", image: "/partners/beeline.svg" },
  { name: "МТС", image: "/partners/mts.svg" },
  { name: "Якитория", image: "/partners/yakitoriya.svg" },
  { name: "KFC", image: "/partners/kfc.svg" },
] as const;
