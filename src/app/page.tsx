import type { JSX } from 'react';
import { About, Contacts, CustomBusiness, Footer, Header, Hero, Partners, Projects, ForOwners } from './sections';

export default function Home(): JSX.Element {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-main">
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