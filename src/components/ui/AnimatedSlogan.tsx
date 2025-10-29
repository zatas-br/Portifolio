import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Slogan = () => {
  const t = useTranslations('Slogan');
  const words = t.raw('words') as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.8,
        ease: "easeOut"
      }}
      className="flex items-center justify-center gap-4 text-gray-800 text-text-slogan md:text-xl tracking-wide"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.2 + i * 0.1,
            duration: 0.5
          }}
          className={word === '|' ? 'text-primary' : ''}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Slogan;