import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Compass } from "lucide-react";

export const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Visi</h2>
            </div>
            <TypewriterText
              text="Menjadi studio desain terpercaya yang menghadirkan solusi desain modern dan bernilai tinggi untuk setiap klien."
              isInView={isInView}
            />
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center">
                <Compass className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Misi</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Menghadirkan desain yang menyatukan estetika dan fungsi",
                "Memberikan pelayanan profesional dengan pendekatan personal",
                "Menggunakan teknologi desain terkini untuk hasil adaptif",
                "Menyediakan paket layanan fleksibel untuk berbagai kebutuhan",
                "Membangun kolaborasi berkelanjutan dengan klien dan mitra",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TypewriterText = ({ text, isInView }: { text: string; isInView: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, isInView]);

  return (
    <p className="text-xl text-white/90 font-light leading-relaxed min-h-[80px]">
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-6 bg-gold ml-1 animate-pulse" />
      )}
    </p>
  );
};
