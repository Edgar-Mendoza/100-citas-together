import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-medium text-foreground tracking-tight">
            Momentum
          </span>
        </div>
        <Button variant="elegant" size="sm">
          Comprar Ahora
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
