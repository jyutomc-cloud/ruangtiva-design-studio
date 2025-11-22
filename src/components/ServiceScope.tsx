import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Home, Store, Warehouse, Wrench } from "lucide-react";

export const ServiceScope = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scopes = [
    { icon: Building2, title: "Arsitektur", color: "from-navy to-navy/70" },
    { icon: Home, title: "Eksterior", color: "from-gold/80 to-gold/50" },
    { icon: Store, title: "Interior", color: "from-navy/80 to-gold/30" },
    { icon: Warehouse, title: "Restorasi & Renovasi", color: "from-gold/70 to-navy/50" },
    { icon: Wrench, title: "Perhitungan Struktur", color: "from-navy/90 to-navy/60" },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Lingkup <span className="text-luxury-gradient">Layanan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bidang pekerjaan yang kami tangani dengan keahlian dan dedikasi tinggi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {scopes.map((scope, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${scope.color} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                  <scope.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {scope.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
