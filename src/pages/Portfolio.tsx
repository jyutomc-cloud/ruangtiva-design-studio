import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, User } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Portfolio {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  project_date: string;
  client_name?: string;
  location?: string;
}

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .order("display_order");

      if (error) throw error;
      setPortfolios(data || []);
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["all", ...Array.from(new Set(portfolios.map((p) => p.category)))];

  const filteredPortfolios =
    selectedCategory === "all"
      ? portfolios
      : portfolios.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/80">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Portofolio Proyek
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Koleksi karya terpilih yang menunjukkan dedikasi kami dalam menciptakan
              ruang yang indah, fungsional, dan berkarakter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gold text-carbon shadow-lg"
                    : "bg-background text-foreground hover:bg-gold/20"
                }`}
              >
                {category === "all" ? "Semua" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-lg" />
              ))}
            </div>
          ) : (
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredPortfolios.map((portfolio, index) => (
                  <motion.div
                    key={portfolio.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedPortfolio(portfolio)}
                    className="group relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                    style={{ backgroundImage: `url(${portfolio.image_url})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent group-hover:from-navy/95 transition-all" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block px-3 py-1 bg-gold/90 text-carbon text-sm font-semibold rounded-full mb-2">
                        {portfolio.category}
                      </span>
                      <h3 className="font-heading text-2xl font-bold mb-2">
                        {portfolio.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {portfolio.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPortfolio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPortfolio(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedPortfolio(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={24} />
                </button>
                
                <img
                  src={selectedPortfolio.image_url}
                  alt={selectedPortfolio.title}
                  className="w-full h-[400px] object-cover rounded-t-xl"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
                  {selectedPortfolio.category}
                </span>
                
                <h2 className="font-display text-4xl font-bold text-navy mb-4">
                  {selectedPortfolio.title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {selectedPortfolio.description}
                </p>

                <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-border">
                  {selectedPortfolio.project_date && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span>{new Date(selectedPortfolio.project_date).getFullYear()}</span>
                    </div>
                  )}
                  {selectedPortfolio.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span>{selectedPortfolio.location}</span>
                    </div>
                  )}
                  {selectedPortfolio.client_name && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="w-5 h-5 text-gold" />
                      <span>{selectedPortfolio.client_name}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Portfolio;
