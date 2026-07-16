import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const CARD_BG = 'linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(255, 153, 51, 0.25) 50%, rgba(26, 26, 26, 0.7) 100%)';
const CARD_BORDER = 'rgba(255, 153, 51, 0.3)';

const extraSkills = [
  {
    icon: "🛠️",
    name: "Técnico de Software y Reparación de Cómputo",
    description: "Diagnóstico, mantenimiento y reparación de equipos de cómputo, tanto a nivel de hardware como de software.",
    specialties: ["Formateo e instalación", "Optimización", "Hardware", "Solución de fallos"],
  },
  {
    icon: "🤖",
    name: "Manejo de IA en ComfyUI",
    description: "Flujos de trabajo con inteligencia artificial en ComfyUI para producción visual avanzada.",
    specialties: ["Creación de videos", "Reescalado de video", "Generación de imagen"],
  },
  {
    icon: "🖨️",
    name: "Servicios de Impresión",
    description: "Experiencia en preparación de archivos y gestión de servicios de impresión de calidad.",
    specialties: ["Preparación de archivos", "Gestión de color", "Formatos de impresión"],
  },
  {
    icon: "🌐",
    name: "Creación y Publicación de Páginas Web",
    description: "Desarrollo y diseño de páginas web con Visual Studio Code y Figma, incluyendo su puesta en línea: montaje del servidor y configuración del dominio.",
    specialties: ["Visual Studio Code", "Figma", "Diseño responsive", "Despliegue en servidor", "Dominio"],
  },
];

export function ExtraSkills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="habilidades-extra" className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(255, 153, 51, 0.12) 25%, rgba(10, 10, 10, 0.95) 50%, rgba(255, 153, 51, 0.08) 75%, rgba(10, 10, 10, 0.95) 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-30" style={{
        background: `
          radial-gradient(circle at 80% 80%, rgba(255, 153, 51, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 20% 20%, rgba(255, 153, 51, 0.12) 0%, transparent 50%)
        `
      }} />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl mb-4 text-center text-primary neon-text"
          style={{ textShadow: '0 0 10px #ff9933, 0 0 20px rgba(255, 153, 51, 0.4), 0 0 30px #ff9933' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Habilidades Extra
        </motion.h2>

        <motion.p
          className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Conocimientos técnicos complementarios que amplían mis servicios más allá del diseño y la animación
        </motion.p>

        {/* ── ESCRITORIO: 4 tarjetas completas (oculto en móvil) ── */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {extraSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="backdrop-blur-sm rounded-xl border transition-all duration-300 relative overflow-hidden group p-6 flex flex-col"
              style={{ background: CARD_BG, borderColor: CARD_BORDER, willChange: 'transform' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="mx-auto mb-4 flex items-center justify-center rounded-full"
                style={{
                  width: 64,
                  height: 64,
                  fontSize: '2rem',
                  background: 'rgba(255, 153, 51, 0.15)',
                  border: `1px solid ${CARD_BORDER}`,
                }}
                aria-hidden="true"
              >
                {skill.icon}
              </div>

              <h3 className="text-lg text-center text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                {skill.name}
              </h3>

              <p className="text-sm text-center text-foreground/80 mb-5">{skill.description}</p>

              <div className="text-xs uppercase tracking-wider text-center mb-2" style={{ color: '#ff9933' }}>
                Especialidades:
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                {skill.specialties.map((s, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded border"
                    style={{ background: 'rgba(255, 153, 51, 0.15)', color: '#ff9933', borderColor: CARD_BORDER }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MÓVIL: solo emoji, se despliega al tocar (oculto en sm+) ── */}
        <div className="flex flex-col gap-3 sm:hidden">
          {extraSkills.map((skill, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={skill.name}
                className="backdrop-blur-sm rounded-xl border overflow-hidden"
                style={{ background: CARD_BG, borderColor: CARD_BORDER }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`extra-skill-${index}`}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: 48,
                      height: 48,
                      fontSize: '1.5rem',
                      background: 'rgba(255, 153, 51, 0.15)',
                      border: `1px solid ${CARD_BORDER}`,
                    }}
                    aria-hidden="true"
                  >
                    {skill.icon}
                  </span>
                  <span className="flex-1 text-sm text-foreground/90 leading-tight">
                    {skill.name}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: '#ff9933', fontSize: '1.5rem', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`extra-skill-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-4 pb-4">
                        <p className="text-sm text-foreground/80 mb-4">{skill.description}</p>
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#ff9933' }}>
                          Especialidades:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.specialties.map((s, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded border"
                              style={{ background: 'rgba(255, 153, 51, 0.15)', color: '#ff9933', borderColor: CARD_BORDER }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
