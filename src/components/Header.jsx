import { useState } from 'react';
import cerebro from '../cerebro.png';
import AboutModal from '../components/AboutModal';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginBottom: 5 }}>
      <div className="flex justify-center mb-1">
        <img
          src={cerebro}
          alt="Logo"
          className="
            w-44 md:w-60
            scale-[0.8]
            drop-shadow-[0_0_25px_rgba(34,197,94,0.9)]
            hover:scale-[0.85]
            hover:drop-shadow-[0_0_40px_rgba(34,197,94,1)]
            transition-all duration-300
          "
        />
        <button
          onClick={() => setOpen(true)}
          className="
            absolute top-2 right-10
            w-12 h-12
            flex items-center justify-center

            text-xl font-bold

            rounded-full
            border border-green-400/60
            text-green-300
            backdrop-blur-md
            bg-black/40

            animate-breathe   /* 👈 magia */

            hover:scale-110
            hover:shadow-[0_0_50px_rgba(34,197,94,1)]

            transition-all duration-300
          "
        >
          ?
        </button>
      </div>

      <h1
        className="text-5xl md:text-7xl text-center mb-2"
        style={{
          fontFamily: "'UnifrakturCook', cursive",
          color: '#d1fae5', // 👈 verde MUY clarito (casi blanco)

          WebkitTextStroke: '1.5px rgba(34,197,94,0.9)', // 👈 borde verde

          textShadow: `
          0 0 8px rgba(34,197,94,0.8),
          0 0 18px rgba(34,197,94,0.6),
          0 0 35px rgba(34,197,94,0.5)
        `,
        }}
      >
        Nostradamus
      </h1>

      <p
        className="text-white text-sm md:text-base max-w-2xl leading-relaxed mb-8"
        style={{
          textShadow: `
          0 0 6px rgba(34,197,94,0.9),
          0 0 12px rgba(34,197,94,0.8),
          0 0 24px rgba(34,197,94,0.7)
        `,
        }}
      >
        Predicciones inteligentes para planificar tu semana usando clima, noticias, economía y
        eventos locales de Buenos Aires.
      </p>

      <AboutModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
