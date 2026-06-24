import { motion } from 'framer-motion';

const ICONS: Record<string, string> = {
  "After Effects": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
  "Blender": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
  "Premiere Pro": "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
  "OpenToonz": "https://i.postimg.cc/m2SFh287/Opentoonz-1.png",
  "Ilustrator": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
  "Photoshop": "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  "Godot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
};

const ICON_FILTER = 'grayscale(1) invert(1) sepia(1) saturate(3) brightness(0.85)';
const CARD_BG = 'linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(255, 153, 51, 0.25) 50%, rgba(26, 26, 26, 0.7) 100%)';
const CARD_BORDER = 'rgba(255, 153, 51, 0.3)';

const featuredSkills = [
  { name: "Blender", level: 88, description: "Modelado 3D, animación, rendering", specialties: ["Cycles/Eevee", "Shading", "Rigging", "Uv editing", "Fisicas"] },
  { name: "After Effects", level: 95, description: "Animación, Efectos visuales, composición compleja", specialties: ["Animación vectorial", "Rotoscopia"] },
];

const secondarySkills = [
  { name: "Ilustrator", level: 82, description: "Vectorización, diseño gráfico", specialties: ["Identificadores gráficos", "Diseño de personajes"] },
  { name: "Premiere Pro", level: 92, description: "Edición profesional, manejo de color, composición de audio", specialties: ["Lumetri", "Audio mastering", "Layers"] },
  { name: "Photoshop", level: 85, description: "Retoque digital, composición, corrección de color avanzada", specialties: ["Camera Raw", "Digital art", "Restauración de fotos antiguas"] },
  { name: "OpenToonz", level: 78, description: "Animación fotograma a fotograma", specialties: ["character design", "high framerate"] },
  { name: "Godot", level: 70, description: "Desarrollo de videojuegos 2D y 3D", specialties: ["GDScript", "Animaciones", "Física de juego"] },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(255, 153, 51, 0.08) 25%, rgba(10, 10, 10, 0.95) 50%, rgba(255, 153, 51, 0.12) 75%, rgba(10, 10, 10, 0.95) 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-30" style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 153, 51, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 153, 51, 0.12) 0%, transparent 50%)
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
          Habilidades Técnicas
        </motion.h2>

        <motion.p
          className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Dominio avanzado en las herramientas más poderosas del motion graphics y efectos visuales
        </motion.p>

        {/* Fila principal — 2 tarjetas grandes */}
        <div className="grid gap-6 mb-6" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {featuredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="backdrop-blur-sm rounded-xl border transition-all duration-300 relative overflow-hidden group
                         h-32 sm:h-auto p-4 sm:p-8 flex items-center justify-center sm:block"
              style={{ background: CARD_BG, borderColor: CARD_BORDER, willChange: 'transform' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              {ICONS[skill.name] && (
                <img src={ICONS[skill.name]} alt="" aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain p-6 pointer-events-none select-none"
                  style={{ filter: ICON_FILTER, opacity: 0.18 }}
                />
              )}

              {/* Móvil */}
              <div className="flex flex-col items-center justify-center sm:hidden text-center relative z-10">
                {ICONS[skill.name] && (
                  <img src={ICONS[skill.name]} alt={skill.name} className="w-12 h-12 mb-1 object-contain" />
                )}
                <span className="text-sm text-foreground/80 mt-1">{skill.name}</span>
              </div>

              {/* Escritorio */}
              <div className="hidden sm:block relative z-10">
                <h3 className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-5">
                  {skill.name}
                </h3>
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden mb-5">
                  <motion.div
                    className="h-2 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
                    style={{ transformOrigin: 'left', background: 'linear-gradient(90deg, #ff9933 0%, #ffcc55 100%)', willChange: 'transform' }}
                  />
                </div>
                <p className="text-sm text-foreground/80 mb-5">{skill.description}</p>
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#ff9933' }}>Especialidades:</div>
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
          ))}
        </div>

        {/* Fila secundaria — 5 tarjetas más pequeñas */}
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {secondarySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="backdrop-blur-sm rounded-xl border transition-all duration-300 relative overflow-hidden group
                         h-24 sm:h-auto p-3 sm:p-6 flex items-center justify-center sm:block"
              style={{ background: CARD_BG, borderColor: CARD_BORDER, willChange: 'transform' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Layout único — el overflow-hidden del card recorta en móvil */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                {/* Título encima del icono */}
                <h3 className="text-base text-foreground group-hover:text-primary transition-colors duration-300" style={{ marginBottom: '8px', position: 'relative', zIndex: 10 }}>
                  {skill.name}
                </h3>

                {/* Icono en el medio */}
                {ICONS[skill.name] && (
                  <img src={ICONS[skill.name]} alt="" aria-hidden="true"
                    className="pointer-events-none select-none"
                    style={{ width: '100%', height: '80px', objectFit: 'contain', margin: '10px 0', filter: ICON_FILTER, opacity: 0.35 }}
                  />
                )}

                {/* Contenido debajo del icono */}
                <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
                  <div className="w-full bg-background/50 rounded-full overflow-hidden" style={{ height: '6px', marginBottom: '8px' }}>
                    <motion.div
                      className="rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
                      style={{ height: '6px', transformOrigin: 'left', background: 'linear-gradient(90deg, #ff9933 0%, #ffcc55 100%)', willChange: 'transform' }}
                    />
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed" style={{ marginBottom: '8px' }}>{skill.description}</p>
                  <div className="text-xs uppercase tracking-wider" style={{ color: '#ff9933', marginBottom: '6px' }}>Especialidades:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px' }}>
                    {skill.specialties.map((s, i) => (
                      <span key={i} className="text-xs rounded border" style={{ padding: '2px 6px', background: 'rgba(255, 153, 51, 0.15)', color: '#ff9933', borderColor: CARD_BORDER }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
