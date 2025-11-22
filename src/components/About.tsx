import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-img.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Tentang <span className="text-luxury-gradient">RUANGTIVA STUDIO</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Studio desain dengan fokus pada estetika, fungsi, dan identitas. Kami percaya
              bahwa setiap ruang memiliki cerita yang perlu diwujudkan dengan pendekatan
              yang holistik dan personal.
            </p>
            <ul className="space-y-4">
              {[
                "Analisis kebutuhan mendalam untuk solusi tepat",
                "Desain berkarakter yang mencerminkan identitas Anda",
                "Keseimbangan sempurna antara visual dan teknis",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={aboutImg}
                alt="Ruangtiva Studio Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
