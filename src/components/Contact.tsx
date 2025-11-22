import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6282242007345", "_blank");
  };

  return (
    <section ref={ref} className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl mb-2 font-light">RUANGTIVA STUDIO</p>
          <p className="text-lg text-white/80 mb-4">
            Arsitektur. Interior. Struktur.
          </p>
          <p className="text-2xl font-semibold text-gold mb-8 flex items-center justify-center gap-2">
            <Phone className="w-6 h-6" />
            0822 4200 7345
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-gold hover:bg-gold/90 text-carbon font-semibold px-12 py-6 text-lg btn-magnetic animate-pulse hover:animate-none"
            >
              <Phone className="mr-2 w-5 h-5" />
              Hubungi Sekarang
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-white/60 italic"
          >
            Konsultasi gratis untuk proyek pertama Anda
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
