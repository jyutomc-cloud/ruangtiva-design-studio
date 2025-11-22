import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Pencil, Box, FileText, Calculator, Hammer, UserCheck } from "lucide-react";

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Pencil,
      title: "Konsep Desain",
      description: "Pengembangan ide kreatif menjadi konsep visual yang jelas dan terarah",
    },
    {
      icon: Box,
      title: "Visualisasi 3D",
      description: "Rendering realistis untuk preview hasil akhir sebelum konstruksi",
    },
    {
      icon: FileText,
      title: "Dokumen Teknis",
      description: "Gambar kerja lengkap dan spesifikasi detail untuk pelaksanaan",
    },
    {
      icon: Calculator,
      title: "Perhitungan Struktur",
      description: "Analisis struktural untuk keamanan dan efisiensi konstruksi",
    },
    {
      icon: Hammer,
      title: "Gambar Kerja",
      description: "Detail teknis konstruksi untuk panduan tim pelaksana",
    },
    {
      icon: UserCheck,
      title: "Pendampingan",
      description: "Supervisi dan konsultasi selama proses konstruksi berlangsung",
    },
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
            Layanan <span className="text-luxury-gradient">Terintegrasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap dari konsep hingga konstruksi dalam satu kesatuan layanan profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative bg-card p-8 rounded-lg border border-border hover:border-gold transition-all duration-300 hover:shadow-xl group"
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-navy to-gold/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-gold group-hover:to-gold/60"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {service.title}
              </h3>

              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.7,
                  height: hoveredIndex === index ? "auto" : "auto",
                }}
                className="text-muted-foreground"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
