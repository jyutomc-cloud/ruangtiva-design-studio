import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const philosophies = [
    {
      title: "Modern",
      description: "Desain kontemporer yang relevan dengan zaman",
    },
    {
      title: "Human-Centered",
      description: "Mengutamakan kenyamanan dan kebutuhan pengguna",
    },
    {
      title: "Harmonis",
      description: "Keseimbangan antara estetika dan fungsi",
    },
    {
      title: "Timeless",
      description: "Nilai desain yang bertahan lama",
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
            Filosofi <span className="text-luxury-gradient">Desain</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ruang yang kami ciptakan dirancang untuk meningkatkan kenyamanan, produktivitas,
            dan kualitas hidup penghuninya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, index) => (
            <TiltCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({
  item,
  index,
  isInView,
}: {
  item: { title: string; description: string };
  index: number;
  isInView: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-navy to-navy/80 p-8 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)" }}>
        <h3 className="font-heading text-2xl font-bold text-gold mb-3">
          {item.title}
        </h3>
        <p className="text-white/80">{item.description}</p>
      </div>
    </motion.div>
  );
};
