import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  icon,
  variant = 'primary',
  onClick 
}: { 
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-8 py-4 rounded-lg font-medium text-base overflow-hidden
        flex items-center justify-center gap-2 min-w-[180px]
        ${isPrimary 
          ? 'bg-blue-600 text-white' 
          : 'bg-transparent text-gray-900 border-2 border-gray-900'
        }
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: isPrimary ? 1.7 : 1.85,
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Fundo animado no hover */}
      <motion.div
        className={`absolute inset-0 ${
          isPrimary ? 'bg-blue-700' : 'bg-gray-900'
        }`}
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </motion.button>
  );
};


export default AnimatedButton;