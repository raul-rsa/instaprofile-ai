import { motion } from "framer-motion";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center gap-4 py-16">
    <motion.div
      className="relative h-12 w-12"
      animate={{ rotate: 360 }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-muted" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary" />
    </motion.div>
    <motion.p
      className="text-sm text-muted-foreground"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Analyzing profile...
    </motion.p>
  </div>
);

export default LoadingSpinner;
