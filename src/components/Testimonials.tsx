import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik Villa Modern",
      text: "Ruangtiva Studio berhasil mewujudkan impian kami memiliki villa modern yang elegan. Tim sangat profesional dan detail dalam setiap aspek desain.",
      rating: 5,
    },
    {
      name: "Sarah Wijaya",
      role: "CEO Startup Tech",
      text: "Desain kantor kami mencerminkan budaya perusahaan yang inovatif. Proses kolaborasi sangat menyenangkan dan hasilnya melebihi ekspektasi.",
      rating: 5,
    },
    {
      name: "Ahmad Rahman",
      role: "Pemilik Kafe",
      text: "Interior kafe kami menjadi daya tarik tersendiri. Ruangtiva Studio memahami konsep yang kami inginkan dan mengeksekusinya dengan sempurna.",
      rating: 5,
    },
    {
      name: "Diana Kusuma",
      role: "Developer Properti",
      text: "Kerjasama yang sangat baik dalam proyek apartemen kami. Perhitungan struktur akurat dan desain yang menarik untuk target pasar.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Testimoni <span className="text-luxury-gradient">Klien</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan klien adalah motivasi terbesar kami.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-navy to-navy/80 p-12 rounded-2xl relative"
            >
              <Quote className="w-16 h-16 text-gold/20 absolute top-8 left-8" />
              
              <div className="relative z-10">
                <p className="text-xl text-white/90 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gold/80">{testimonials[currentIndex].role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border-gold text-gold hover:bg-gold hover:text-carbon"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold w-8" : "bg-gold/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full border-gold text-gold hover:bg-gold hover:text-carbon"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
