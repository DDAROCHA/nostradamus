import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutModal({ open, onClose }) {
  const [visible, setVisible] = useState(open);

  // 🔄 sincroniza apertura
  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  // ❌ cierre con animación
  const handleClose = () => {
    setVisible(false);

    setTimeout(() => {
      onClose();
    }, 250); // duración de la animación de salida
  };

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-6"
          onClick={e => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(4px)' }} // 🔥 salida suave
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="
                w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar
                bg-white/5 backdrop-blur-md
                rounded-xl p-8
                border border-green-500/40
                shadow-[0_0_30px_rgba(34,197,94,0.4)]
                text-white
                "
          >
            {/* ❌ cerrar */}
            <div className="flex justify-end mb-4">
              <button onClick={handleClose} className="text-gray-400 hover:text-red-400 transition">
                ✕
              </button>
            </div>

            {/* 🧠 TITLE */}
            <h2 className="text-3xl text-green-400 mb-6 text-center font-semibold">
              Sobre Nostradamus
            </h2>

            {/* 📌 DESCRIPCIÓN */}
            <section className="mb-6">
              <p className="text-gray-300">
                <span className="text-green-300 font-semibold">Nostradamus</span> es una aplicación
                de predicción inteligente orientada a la planificación de eventos y decisiones
                comerciales, utilizando múltiples fuentes de datos en tiempo real.
              </p>
            </section>

            {/* 🧭 USO */}
            <section className="mb-6">
              <h3 className="text-green-400 mb-2 font-semibold">Cómo usar</h3>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Ingresar un plan o idea en el prompt</li>
                <li>Presionar "Predecir"</li>
                <li>Analizar la recomendación generada por IA</li>
              </ul>
            </section>

            {/* ⚙️ TECNOLOGÍAS */}
            <section className="mb-6">
              <h3 className="text-green-400 mb-3 font-semibold text-lg">Tecnologías</h3>

              {/* CORE STACK */}
              <div className="mb-4">
                <p className="text-green-300 text-sm font-semibold mb-1">Core Stack</p>
                <p className="text-gray-300 text-sm">
                  React · Node.js · APIs externas · Inteligencia Artificial (OpenAI / Gemini)
                </p>
              </div>

              {/* FRONTEND */}
              <div className="mb-4">
                <p className="text-green-300 text-sm font-semibold mb-1">Frontend</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  React · React Router · Axios · Framer Motion · tsParticles · Tailwind CSS · React
                  Scripts · Web Vitals
                </p>
              </div>

              {/* BACKEND */}
              <div>
                <p className="text-green-300 text-sm font-semibold mb-1">Backend</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Node.js · Express · PostgreSQL (pg) · JWT · bcrypt · dotenv · CORS · rate-limiting
                  · Fuse.js · OpenAI SDK · Google Generative AI
                </p>
              </div>
            </section>

            {/* 🔗 FUNCIONAMIENTO */}
            <section className="mb-6">
              <h3 className="text-green-400 mb-3 font-semibold text-lg">Cómo funciona</h3>

              <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                <li>
                  📅{' '}
                  <span className="text-green-300 font-semibold">
                    Calendario (Feriados Argentina)
                  </span>
                  <br />
                  <span className="text-gray-400 text-xs">
                    https://api.argentinadatos.com/v1/feriados/{'{year}'}
                  </span>
                </li>

                <li>
                  💰{' '}
                  <span className="text-green-300 font-semibold">
                    Economía (IPC + Canasta básica)
                  </span>
                  <br />
                  <span className="text-gray-400 text-xs">
                    https://api.argly.com.ar/api/ipc · https://api.argly.com.ar/api/canasta
                  </span>
                </li>

                <li>
                  📰 <span className="text-green-300 font-semibold">Noticias en tiempo real</span>
                  <br />
                  <span className="text-gray-400 text-xs">https://gnews.io/api/v4/search</span>
                </li>

                <li>
                  🌦️{' '}
                  <span className="text-green-300 font-semibold">
                    Clima (Forecast geolocalizado)
                  </span>
                  <br />
                  <span className="text-gray-400 text-xs">
                    https://www.meteosource.com/api/v1/free/point
                  </span>
                </li>

                <li>
                  🤖 <span className="text-green-400 font-semibold">Motor de IA</span>
                  <br />
                  <span className="text-gray-400 text-xs">
                    OpenAI GPT / Google Gemini (configurable según entorno)
                  </span>
                </li>

                <li>
                  🔄 Todos los datos se consolidan en un único prompt estructurado y se procesan
                  mediante IA para generar una recomendación contextual.
                </li>
              </ul>
            </section>

            {/* 👨‍💻 CV */}
            <section>
              <h3 className="text-green-400 mb-2 font-semibold">Sobre el desarrollador</h3>

              <p className="text-gray-300 text-sm">
                <span className="text-green-300 font-semibold">Diego Da Rocha</span>— Full Stack
                Developer especializado en desarrollo de aplicaciones web modernas, integración de
                APIs, automatización y soluciones basadas en inteligencia artificial.
              </p>

              <p className="text-gray-400 text-xs mt-2">
                Skills: React · Node.js · SQL · APIs · UX/UI · AI Integration
              </p>
            </section>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
