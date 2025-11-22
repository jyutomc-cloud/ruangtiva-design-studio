import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, FileText, Box, RefreshCw, CheckCircle, UserCheck } from "lucide-react";

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Konsultasi",
      description: "Diskusi kebutuhan dan visi proyek",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Konsep",
      description: "Pengembangan ide desain awal",
    },
    {
      icon: FileText,
      number: "03",
      title: "Teknis",
      description: "Penyusunan dokumen teknis",
    },
    {
      icon: Box,
      number: "04",
      title: "3D",
      description: "Visualisasi realistis",
    },
    {
      icon: RefreshCw,
      number: "05",
      title: "Revisi",
      description: "Penyesuaian sesuai feedback",
    },
    {
      icon: CheckCircle,
      number: "06",
      title: "Final",
      description: "Penyerahan dokumen final",
    },
    {
      icon: UserCheck,
      number: "07",
      title: "Pendampingan",
      description: "Supervisi konstruksi (opsional)",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Cara <span className="text-gold">Kerja</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Proses terstruktur dari konsultasi hingga realisasi proyek Anda.
          </p>
        </motion.div>

        <div ref={scrollRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-white/10 hidden lg:block">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gold"
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                {/* Number Badge */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold/60 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="w-10 h-10 text-navy" />
                  </div>
                  <span className="font-display text-4xl font-bold text-gold/30 absolute top-0">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 italic">
            Waktu pengerjaan disesuaikan dengan kompleksitas dan skala proyek
          </p>
        </motion.div>
      </div>
    </section>
  );
};
