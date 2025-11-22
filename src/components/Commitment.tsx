import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export const Commitment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const commitments = [
    "Pendekatan analitis untuk memahami kebutuhan unik setiap klien",
    "Desain profesional yang mengedepankan estetika dan fungsi",
    "Standar teknis akurat untuk hasil konstruksi optimal",
    "Tim arsitektur dan teknik berpengalaman dan terkoordinasi",
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
            Komitmen pada <span className="text-luxury-gradient">Hasil Terbaik</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Setiap proyek adalah tanggung jawab kami untuk memberikan solusi desain
            yang melampaui ekspektasi.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start gap-4 bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
