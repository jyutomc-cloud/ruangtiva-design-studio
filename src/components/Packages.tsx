import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const packages = [
    {
      name: "Basic",
      price: "Mulai 5 Juta",
      features: [
        "Konsultasi awal",
        "Konsep desain 2D",
        "2x revisi",
        "Gambar kerja dasar",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "Mulai 12 Juta",
      features: [
        "Konsultasi mendalam",
        "Konsep desain 2D & 3D",
        "4x revisi",
        "Gambar kerja lengkap",
        "Perhitungan struktur",
        "Spesifikasi material",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "Mulai 25 Juta",
      features: [
        "Konsultasi unlimited",
        "Konsep 2D & 3D detail",
        "Revisi unlimited",
        "Gambar kerja penuh",
        "Perhitungan struktur",
        "Pendampingan konstruksi",
        "Desain MEP",
      ],
      highlighted: false,
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
            Paket <span className="text-luxury-gradient">Layanan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan paket yang disesuaikan dengan kebutuhan dan budget Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative bg-card rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                pkg.highlighted
                  ? "border-gold shadow-xl scale-105 bg-gradient-to-b from-gold/5 to-transparent"
                  : "border-border hover:border-gold"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-carbon px-6 py-1 rounded-full text-sm font-semibold">
                  Paling Populer
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold text-gold">{pkg.price}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.highlighted
                    ? "bg-gold hover:bg-gold/90 text-carbon"
                    : "bg-navy hover:bg-navy/90 text-white"
                }`}
                size="lg"
              >
                Pilih Paket
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          *Harga dapat disesuaikan berdasarkan kompleksitas dan luas proyek
        </motion.p>
      </div>
    </section>
  );
};
