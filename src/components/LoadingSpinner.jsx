import { useEffect, useState } from 'react';

const messages = [
  'Revisando Calendario Argentino...',
  'Consultando Pronóstico del Tiempo...',
  'Analizando Datos Económicos...',
  'Estudiando Noticias Locales...',
  'Elaborando informe de Respuesta...',
];

export default function LoadingSpinner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stepTime = 2400;

    const interval = setInterval(() => {
      setIndex(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-6">
      {/* 🧠 Texto dinámico */}
      <div
        key={index}
        className="
          text-white
          text-sm md:text-base
          tracking-wide
          text-center
        "
        style={{
          textShadow: `
            0 0 6px rgba(34,197,94,0.9),
            0 0 12px rgba(34,197,94,0.7)
          `,
          animation: 'fadeIn 0.4s ease',
          minHeight: 24,
        }}
      >
        {messages[index]}
      </div>

      {/* 🔄 Spinner verde glow */}
      <div className="relative">
        <div
          className="
          w-14 h-14
          rounded-full
          border-4 border-green-500/20
          border-t-green-400
          animate-spin
          shadow-[0_0_20px_rgba(34,197,94,0.7)]
        "
        />

        {/* glow extra */}
        <div
          className="
          absolute inset-0
          rounded-full
          blur-md
          bg-green-500/20
        "
        />
      </div>

      {/* ✨ Animación */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
