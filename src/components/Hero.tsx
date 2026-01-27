import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroProduct from "@/assets/hero-product.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
            >
              Por Momentum
            </motion.span>
            
            <h1 className="heading-display text-foreground mb-6">
              100 Citas{" "}
              <span className="text-elegant text-primary">Juntos</span>
            </h1>
            
            <p className="text-body text-muted-foreground mb-8 max-w-md">
              Redescubre el amor con 100 experiencias únicas diseñadas para crear 
              momentos inolvidables. Cada tarjeta es una invitación a conectar más 
              profundamente con tu pareja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Ordenar Ahora — $49
              </Button>
              <Button variant="elegant" size="xl">
                Ver Experiencias
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-champagne border-2 border-background flex items-center justify-center text-xs font-medium text-soft-brown"
                  >
                    ❤️
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">+2,500 parejas</p>
                <p className="text-xs text-muted-foreground">creando recuerdos juntos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-champagne/50 to-blush/50 rounded-3xl blur-2xl opacity-60" />
              <img
                src={heroProduct}
                alt="100 Citas Juntos - Caja de experiencias románticas"
                className="relative w-full rounded-2xl shadow-elevated animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
