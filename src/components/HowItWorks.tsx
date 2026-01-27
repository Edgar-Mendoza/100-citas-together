import { motion } from "framer-motion";
import cardsDetail from "@/assets/cards-detail.jpg";

const steps = [
  {
    number: "01",
    title: "Elige una Tarjeta",
    description: "Cada semana, seleccionen juntos una tarjeta al azar o elijan según su humor.",
  },
  {
    number: "02",
    title: "Planifiquen Juntos",
    description: "Cada tarjeta incluye sugerencias para hacer la experiencia aún más especial.",
  },
  {
    number: "03",
    title: "Vivan el Momento",
    description: "Desconéctense del mundo y conéctense entre ustedes.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-champagne/30 rounded-3xl blur-2xl" />
            <img
              src={cardsDetail}
              alt="Detalle de las tarjetas de citas"
              className="relative w-full rounded-2xl shadow-elevated"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              Cómo Funciona
            </span>
            <h2 className="heading-section text-foreground mb-12">
              Tres pasos hacia{" "}
              <span className="text-elegant text-primary">momentos mágicos</span>
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                    <span className="font-serif text-lg font-medium text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground mb-2">{step.title}</h3>
                    <p className="text-small text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
