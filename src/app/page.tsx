import type { JSX } from "react";

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

export default function Home(): JSX.Element {
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
