import { ArrowRight, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
}

const ButtonTextWrapper = ({ children, isLoading }: Props) => {
  const utils = { transition: { duration: 0.2 } };

  return (
    <AnimatePresence>
      <span className="flex items-center gap-2">
        {isLoading && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Loader2 className="animate-spin" size={16} />
          </motion.div>
        )}

        {children}

        {!isLoading && (
          <motion.div {...utils} initial={{ scale: 1 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <ArrowRight size={16} />
          </motion.div>
        )}
      </span>
    </AnimatePresence>
  );
};

export default ButtonTextWrapper;
