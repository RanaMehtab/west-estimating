import { useEffect, useState } from 'react';
import { api } from '../api.js';
import { services as staticServices } from '../data/services.js';
import Hero from '../components/Hero.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import Stats from '../components/Stats.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Process from '../components/Process.jsx';
import Trades from '../components/Trades.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';

export default function Home() {
  // Start with static data so the page renders instantly,
  // then hydrate with whatever the backend returns.
  const [services, setServices] = useState(staticServices);

  useEffect(() => {
    let cancelled = false;
    api
      .listServices()
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length) {
          setServices(data);
        }
      })
      .catch(() => {
        /* fall back silently to static data */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Hero />
      <ServicesGrid services={services} limit={8} />
      <Stats />
      <WhyChooseUs />
      <Process />
      <Trades />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
