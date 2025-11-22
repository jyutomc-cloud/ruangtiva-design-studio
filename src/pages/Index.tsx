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
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Commitment />
      <Services />
      <Philosophy />
      <Advantages />
      <VisionMission />
      <Values />
      <ServiceScope />
      <ProjectTypes />
      <Packages />
      <Process />
      <PortfolioCTA />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
