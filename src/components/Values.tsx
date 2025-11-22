import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Award, Microscope, Users, Zap } from "lucide-react";

export const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Lightbulb,
      title: "Kreativitas",
      description: "Inovasi dalam setiap solusi desain",
    },
    {
      icon: Award,
      title: "Profesionalisme",
      description: "Standar tinggi di setiap pekerjaan",
    },
    {
      icon: Microscope,
      title: "Detail-Oriented",
      description: "Perhatian pada setiap elemen desain",
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Kerjasama yang solid dengan klien",
    },
    {
      icon: Zap,
      title: "Efisiensi",
      description: "Proses kerja yang terstruktur dan efektif",
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
            Nilai <span className="text-luxury-gradient">Utama</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prinsip yang menjadi fondasi setiap karya dan layanan kami.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="bg-background p-6 rounded-lg border border-border hover:border-gold transition-all duration-300 hover:shadow-xl text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-navy/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-gold/20 group-hover:to-gold/30 transition-all">
                <value.icon className="w-8 h-8 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
