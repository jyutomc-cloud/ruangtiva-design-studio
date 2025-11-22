import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PortfolioCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder for portfolio images - in a real implementation, these would be actual project images
  const portfolioItems = [
    { title: "Modern Villa", category: "Residensial" },
    { title: "Corporate Office", category: "Komersial" },
    { title: "Boutique Hotel", category: "Hospitality" },
    { title: "Luxury Apartment", category: "Residensial" },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Lihat Hasil <span className="text-luxury-gradient">Kerja Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Portofolio proyek yang telah kami selesaikan dengan dedikasi dan keahlian tinggi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative aspect-square bg-gradient-to-br from-navy/90 to-gold/30 rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-all duration-300" />
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
              >
                <span className="text-gold text-sm font-semibold mb-2 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </motion.div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-gold/90 to-transparent flex items-end justify-center pb-8"
              >
                <span className="text-carbon font-semibold">Lihat Detail</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-carbon font-semibold px-8 py-6 text-lg btn-magnetic group"
          >
            Lihat Portofolio Lengkap
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
