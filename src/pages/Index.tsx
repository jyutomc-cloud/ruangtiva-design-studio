import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Commitment } from "@/components/Commitment";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { Advantages } from "@/components/Advantages";
import { VisionMission } from "@/components/VisionMission";
import { Values } from "@/components/Values";
import { ServiceScope } from "@/components/ServiceScope";
import { ProjectTypes } from "@/components/ProjectTypes";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { PortfolioCTA } from "@/components/PortfolioCTA";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="overflow-x-hidden">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <Commitment />
        <div id="services">
          <Services />
        </div>
        <Philosophy />
        <Advantages />
        <VisionMission />
        <Values />
        <ServiceScope />
        <ProjectTypes />
        <div id="packages">
          <Packages />
        </div>
        <Process />
        <PortfolioCTA />
        <Testimonials />
        <div id="contact">
          <Contact />
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
