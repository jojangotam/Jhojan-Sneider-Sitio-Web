import { motion, type Variants } from 'framer-motion';

const INSTAGRAM_URL = 'https://www.instagram.com/algoscom/';

// Línea de tiempo del icono (2.1s): aparece en grande con glow → pausa → se encoge girando
const ICON_DURATION = 2.1;
const ICON_TIMES = [0, 0.33, 0.57, 1];

const pillVariants: Variants = {
  hidden: {
    backgroundColor: 'rgba(15, 10, 14, 0)',
    borderColor: 'rgba(225, 48, 108, 0)',
    boxShadow: '0 0 0px rgba(225, 48, 108, 0)',
  },
  visible: {
    backgroundColor: 'rgba(15, 10, 14, 0.85)',
    borderColor: 'rgba(225, 48, 108, 0.4)',
    boxShadow: '0 0 20px rgba(225, 48, 108, 0.35), 0 4px 24px rgba(0, 0, 0, 0.5)',
    transition: { delay: ICON_DURATION, duration: 0.6 },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: 0,
    filter: 'drop-shadow(0 0 0px rgba(225, 48, 108, 0))',
  },
  visible: {
    opacity: [0, 1, 1, 1],
    scale: [0.3, 2.2, 2.2, 1],
    rotate: [0, 0, 0, 360],
    filter: [
      'drop-shadow(0 0 0px rgba(225, 48, 108, 0))',
      'drop-shadow(0 0 35px rgba(225, 48, 108, 0.95))',
      'drop-shadow(0 0 35px rgba(225, 48, 108, 0.95))',
      'drop-shadow(0 0 12px rgba(225, 48, 108, 0.6))',
    ],
    transition: { duration: ICON_DURATION, times: ICON_TIMES, ease: 'easeInOut' },
  },
};

const textVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 'auto',
    opacity: 1,
    transition: { delay: ICON_DURATION, duration: 0.7, ease: 'easeOut' },
  },
};

export function InstagramBanner() {
  return (
    // Contenedor de altura cero: marca la línea divisoria entre Inicio y Sobre mí
    <div id="instagram" className="relative z-30 h-0">
      <motion.a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sígueme en Instagram"
        className="absolute left-1/2 top-0 flex items-center gap-3 sm:gap-4 rounded-full border px-4 py-2.5 sm:px-6 sm:py-3 backdrop-blur-sm"
        style={{ x: '-50%', y: '-50%' }}
        variants={pillVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        whileHover={{ scale: 1.06 }}
      >
        <motion.img
          src="/instagram.svg"
          alt="Instagram"
          className="w-11 h-11 sm:w-14 sm:h-14 object-contain shrink-0"
          variants={iconVariants}
          style={{ willChange: 'transform' }}
        />

        <motion.span
          className="audiowide overflow-hidden whitespace-nowrap text-base sm:text-xl md:text-2xl"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #FFC107 0%, #F1423B 45%, #B93088 80%, #9C27B0 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 0 10px rgba(225, 48, 108, 0.45))',
          }}
          variants={textVariants}
        >
          Sígueme en Instagram
        </motion.span>
      </motion.a>
    </div>
  );
}
