import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Briefcase, Coffee, Factory, RefreshCw } from "lucide-react";

export const ProjectTypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const types = [
    {
      icon: Home,
      title: "Residensial",
      description: "Hunian pribadi, apartemen, villa",
    },
    {
      icon: Briefcase,
      title: "Komersial",
      description: "Perkantoran, retail, pusat bisnis",
    },
    {
      icon: Coffee,
      title: "Hospitality",
      description: "Hotel, restoran, kafe",
    },
    {
      icon: Factory,
      title: "Industri",
      description: "Fasilitas produksi dan gudang",
    },
    {
      icon: RefreshCw,
      title: "Renovasi",
      description: "Pembaruan dan restorasi bangunan",
    },
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
            Tipe <span className="text-luxury-gradient">Proyek</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman kami mencakup berbagai jenis proyek dengan kompleksitas beragam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ rotateY: 5, scale: 1.05 }}
              className="bg-background p-6 rounded-lg border-2 border-border hover:border-gold transition-all duration-300 hover:shadow-xl text-center group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-navy/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-gold/20 group-hover:to-gold/30 transition-all">
                <type.icon className="w-8 h-8 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                {type.title}
              </h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
