import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PaymentMethods from '@/components/sections/PaymentMethods';
import CoverageMap from '@/components/sections/CoverageMap';
import HomeCTA from '@/components/sections/HomeCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PaymentMethods />
        <CoverageMap />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
