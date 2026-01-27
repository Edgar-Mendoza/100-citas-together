import { motion } from "framer-motion";
import { Star } from "lucide-react";
import coupleMoment from "@/assets/couple-moment.jpg";

const testimonials = [
  {
    quote: "Después de 8 años juntos, pensamos que lo habíamos hecho todo. Estas tarjetas nos demostraron lo contrario.",
    author: "María & Carlos",
    location: "Ciudad de México",
  },
  {
    quote: "El regalo de aniversario perfecto. Cada cita es una oportunidad de enamorarnos de nuevo.",
    author: "Ana & Roberto",
    location: "Buenos Aires",
  },
  {
    quote: "Simple, elegante y efectivo. Nuestras tardes de domingo nunca volverán a ser aburridas.",
    author: "Laura & Diego",
    location: "Madrid",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
            Historias de Amor
          </span>
          <h2 className="heading-section text-foreground">
            Parejas que{" "}
            <span className="text-elegant text-primary">confían en nosotros</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-soft"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-body text-foreground mb-6 italic font-serif">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lifestyle Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={coupleMoment}
              alt="Pareja disfrutando de una cita con las tarjetas"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-elegant text-primary-foreground text-xl md:text-2xl">
                "El amor no se encuentra, se construye día a día"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
