import type { JSX } from 'react';
import { About, Contacts, CustomBusiness, Footer, Header, Hero, Owners, Partners, Projects, ForOwners } from './sections';

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#040d1f] text-zinc-100">
      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <CustomBusiness />
        <ForOwners />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}