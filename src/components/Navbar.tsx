import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="font-serif text-xl md:text-2xl text-gradient-gold">
              ALYA PERFUMES
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                Início
              </a>
              <button
                onClick={scrollToProducts}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                Perfumes
              </button>
              <Button variant="goldOutline" size="sm" onClick={scrollToProducts}>
                Comprar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/98 backdrop-blur-lg border-b border-border/50 md:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                <a
                  href="/"
                  className="text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  Início
                </a>
                <button
                  onClick={scrollToProducts}
                  className="text-left text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  Perfumes
                </button>
                <Button variant="gold" onClick={scrollToProducts} className="mt-2">
                  Comprar Agora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
