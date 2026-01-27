import { motion } from "framer-motion";
import { Heart, Sparkles, Calendar, Gift } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Conexión Profunda",
    description: "Cada cita está diseñada para fortalecer el vínculo emocional entre ustedes.",
  },
  {
    icon: Sparkles,
    title: "Experiencias Únicas",
    description: "Desde aventuras al aire libre hasta noches íntimas en casa.",
  },
  {
    icon: Calendar,
    title: "Todo un Año",
    description: "100 ideas significa que nunca se quedarán sin planes especiales.",
  },
  {
    icon: Gift,
    title: "Regalo Perfecto",
    description: "Ideal para aniversarios, cumpleaños o simplemente porque sí.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
            ¿Por qué elegirlo?
          </span>
          <h2 className="heading-section text-foreground">
            Más que tarjetas,{" "}
            <span className="text-elegant text-primary">son memorias</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blush flex items-center justify-center group-hover:bg-champagne transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card text-foreground mb-3">{benefit.title}</h3>
              <p className="text-small text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
