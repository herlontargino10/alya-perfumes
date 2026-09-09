import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Mariana S.",
    rating: 5,
    text: "Simplesmente apaixonada! O Yara é maravilhoso, dura o dia inteiro e recebo elogios sempre. Entrega rápida e embalagem impecável.",
    product: "Yara Rosa Claro - Lattafa",
  },
  {
    id: 2,
    name: "Carlos R.",
    rating: 5,
    text: "Melhor custo-benefício que já encontrei. O Club de Nuit é idêntico a fragrâncias muito mais caras. Super recomendo a ALYA PERFUMES!",
    product: "Club de Nuit Woman - Armaf",
  },
  {
    id: 3,
    name: "Juliana M.",
    rating: 5,
    text: "Terceira compra aqui! Atendimento excelente pelo WhatsApp, tiraram todas as minhas dúvidas. A fragrância que escolhi é maravilhosa e chegou tudo certinho.",
    product: "Sabah Al Ward",
  },
  {
    id: 4,
    name: "Fernando L.",
    rating: 5,
    text: "Fiquei impressionado com a qualidade. Os frascos são lindos e as fragrâncias têm uma fixação absurda. Virei cliente fiel!",
    product: "Asad - Lattafa",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Quem Compra, <span className="text-gradient-gold">Ama</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 border border-border/50 rounded-lg p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
