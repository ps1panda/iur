import {
  About,
  Contacts,
  CustomBusiness,
  Footer,
  Header,
  Hero,
  Owners,
  Partners,
  Projects,
} from "./sections";

const partners = [
  "Сбер",
  "ВТБ",
  "Pioneer",
  "MR Group",
  "Samol",
  "Sawatzky",
];

const projects = [
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
];

const partners = [
  "Сбер",
  "ВТБ",
  "Pioneer",
  "MR Group",
  "Samol",
  "Sawatzky",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040d1f] text-zinc-100">
      <Header />
      <main>
        <Hero />
        <About />
        <CustomBusiness />
        <Owners />
        <Projects />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
