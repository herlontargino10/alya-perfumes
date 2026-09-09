import { motion } from "framer-motion";
import { Clock, Sparkles, Gift } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Durabilidade Superior",
    description: "Concentração EDP e Elixir para fragrâncias que duram o dia inteiro.",
  },
  {
    icon: Sparkles,
    title: "Fragrâncias Exclusivas",
    description: "Notas ricas e exóticas que você não encontra em marcas convencionais.",
  },
  {
    icon: Gift,
    title: "Embalagem de Luxo",
    description: "Frascos artesanais que decoram e impressionam como presente.",
  },
];

const BenefitsSection = () => {
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
            Por que <span className="text-gradient-gold">Perfumes Árabes</span>?
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="relative mb-6 inline-flex">
                <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
