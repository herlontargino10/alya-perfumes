import { motion } from "framer-motion";
import { generateWhatsAppContactLink } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WhatsAppButton = () => {
  const whatsappLink = generateWhatsAppContactLink();

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-card text-foreground text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-border/50">
        Fale conosco!
      </span>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
};

export default WhatsAppButton;
