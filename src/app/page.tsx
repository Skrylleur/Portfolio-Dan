import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Parcours from '@/components/Parcours';
import Alternance from '@/components/Alternance';
import Formations from '@/components/Formations';
import Projets from '@/components/Projets';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Parcours />
      <Alternance />
      <Formations />
      <Projets />
      <Contact />
      <Footer />
    </main>
  );
}
