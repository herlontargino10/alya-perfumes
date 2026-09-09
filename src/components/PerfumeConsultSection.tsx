import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { generateWhatsAppConsultLink } from "@/data/products";

const PerfumeConsultSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-border/50 text-center"
    >
      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground mb-3">
        Não encontrou o{" "}
        <span className="text-gradient-gold">perfume que procura?</span>
      </h3>

      <p className="text-muted-foreground max-w-xl mx-auto mb-6">
        Consulte outras fragrâncias disponíveis diretamente pelo WhatsApp.
      </p>

      <a
        href={generateWhatsAppConsultLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button variant="goldOutline" size="lg" className="uppercase tracking-wider">
          Consultar pelo WhatsApp
        </Button>
      </a>
    </motion.div>
  );
};

export default PerfumeConsultSection;
