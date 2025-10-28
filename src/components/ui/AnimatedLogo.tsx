import { motion } from 'framer-motion';
import zatasLogo from '@/public/images/Identidade_visual/zatas-blue.svg';

const AnimatedLogo = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <motion.img
        src={zatasLogo.src}
        alt="ZATAS"
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut"
        }}
      />
      
      <motion.div
        className="absolute inset-0 blur-3xl opacity-30 -z-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;