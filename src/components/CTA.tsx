import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const includes = [
  "100 tarjetas de citas únicas",
  "Caja premium de presentación",
  "Guía de experiencias",
  "Envío gratis a toda LATAM",
];

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
            Comienza Hoy
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Tu historia de amor merece{" "}
            <span className="text-elegant text-primary">100 capítulos más</span>
          </h2>
          <p className="text-body text-muted-foreground mb-10 max-w-xl mx-auto">
            No dejes que la rutina apague la chispa. Invierte en los momentos que 
            realmente importan.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated mb-10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Precio especial
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="heading-display text-primary">$49</span>
                  <span className="text-muted-foreground line-through">$79</span>
                </div>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Button variant="hero" size="xl" className="w-full">
                  Ordenar Ahora
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  30 días de garantía de satisfacción
                </p>
              </div>
            </div>
          </motion.div>

          <p className="text-sm text-muted-foreground">
            ¿Tienes preguntas?{" "}
            <a href="mailto:hola@momentum.com" className="text-primary hover:underline">
              Escríbenos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
