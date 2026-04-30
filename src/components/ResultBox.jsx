import { motion } from 'framer-motion';

export default function ResultBox({ result }) {
  const copy = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div>
      <textarea
        className="
          bg-white/5 
          backdrop-blur-md 
          p-8 
          rounded-xl 
          border border-green-500/40 
          shadow-[0_0_20px_rgba(34,197,94,0.4)] 
          text-white 
          placeholder-gray-400
          mb-3 
          max-w-5xl
          focus:outline-none
          focus:ring-2
          focus:ring-green-400
          focus:shadow-[0_0_30px_rgba(34,197,94,0.7)]
        "
        value={result}
        readOnly
        rows={10}
        style={{ width: '100%' }}
      />
      <button
        onClick={copy}
        className="
          bg-black/30
          text-white
          border border-green-500/40
          rounded-lg
          px-4 py-1.5
          backdrop-blur-md

          shadow-[0_0_10px_rgba(34,197,94,0.3)]

          hover:bg-green-500/10
          hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
          hover:border-green-400

          transition-all duration-300

          disabled:opacity-30
          disabled:cursor-not-allowed

          mb-10   // 👈 espacio abajo
        "
      >
        Copiar
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mt-6 mb-10 space-y-2"
        >
          {/* 👨‍💻 Autor */}
          <p
            className="text-sm text-gray-300"
            style={{
              textShadow: '0 0 6px rgba(34,197,94,0.6)',
            }}
          >
            Desarrollado por{' '}
            <span className="text-green-400 font-semibold hover:text-green-300 transition">
              Diego Da Rocha
            </span>
          </p>

          {/* 🧠 Stack */}
          <p className="text-xs text-gray-400 tracking-wide">
            React · Node.js · PostgreSQL · OpenAI
          </p>

          {/* © */}
          <p className="text-xs text-gray-500">
            © 2026 — Demo desarrollado para{' '}
            <span
              className="text-green-400 font-semibold"
              style={{
                textShadow: `
                0 0 6px rgba(34,197,94,0.9),
                0 0 12px rgba(34,197,94,0.7)
              `,
              }}
            >
              Cencosud S.A.
            </span>
          </p>
        </motion.div>
      )}
    </div>
  );
}
