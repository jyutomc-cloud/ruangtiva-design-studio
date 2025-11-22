import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-carbon text-white/80 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display text-3xl font-bold text-white mb-2">
            RUANGTIVA STUDIO
          </h3>
          <p className="text-gold/80 italic mb-4">
            Merancang Ruang. Mewujudkan Cerita.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-sm text-white/60">
            &copy; 2025 RUANGTIVA STUDIO. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
