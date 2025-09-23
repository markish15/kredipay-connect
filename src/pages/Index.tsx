import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import GeographicCoverage from '@/components/sections/GeographicCoverage';
import BusinessModel from '@/components/sections/BusinessModel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <GeographicCoverage />
        <BusinessModel />
      </main>
    </div>
  );
};

export default Index;
