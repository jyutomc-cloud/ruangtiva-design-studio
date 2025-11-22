import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Eye, Scale, Image as ImageIcon, Package, MessageCircle } from "lucide-react";
import advantagesImg from "@/assets/advantages-img.jpg";

export const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Sparkles,
      title: "Desain Fleksibel",
      description: "Adaptif dengan berbagai gaya dan kebutuhan",
    },
    {
      icon: Eye,
      title: "Proses Transparan",
      description: "Komunikasi terbuka di setiap tahap proyek",
    },
    {
      icon: Scale,
      title: "Struktur & Estetika Seimbang",
      description: "Keindahan yang tidak mengorbankan keamanan",
    },
    {
      icon: ImageIcon,
      title: "Visualisasi Realistis",
      description: "Preview akurat sebelum konstruksi",
    },
    {
      icon: Package,
      title: "Paket Fleksibel",
      description: "Pilihan layanan sesuai budget dan kebutuhan",
    },
    {
      icon: MessageCircle,
      title: "Komunikasi Responsif",
      description: "Respon cepat untuk setiap pertanyaan",
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
            Mengapa Memilih <span className="text-luxury-gradient">RUANGTIVA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keunggulan yang membedakan kami dalam memberikan solusi desain terbaik.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card p-6 rounded-lg border border-border hover:border-gold transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-gold/20 group-hover:to-gold/30 transition-all">
                  <advantage.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <motion.img
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={advantagesImg}
                alt="Luxury Interior Design"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold/20 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
