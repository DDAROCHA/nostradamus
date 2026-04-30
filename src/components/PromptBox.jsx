import { useState, useRef } from 'react';

export default function PromptBox({ onSubmit }) {
  const [prompt, setPrompt] = useState('');
  const textareaRef = useRef(null);
  const [isDirty, setIsDirty] = useState(false);

  const handleSubmit = () => {
    if (!prompt) return;
    onSubmit(prompt);
    setIsDirty(false);
  };

  const handleClear = () => {
    setPrompt('');
    textareaRef.current?.focus();
    setIsDirty(false);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      {/* 🔹 Header con botón limpiar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span className="text-green-400 font-semibold text-lg tracking-wide">Escribe tu plan:</span>
        <button
          onClick={handleClear}
          disabled={!prompt}
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
          "
        >
          Limpiar 🧹
        </button>
      </div>

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
        ref={textareaRef}
        placeholder="Ej: Quiero organizar un evento al aire libre la semana que viene..."
        value={prompt}
        onChange={e => {
          setPrompt(e.target.value);
          setIsDirty(true);
        }}
        rows={4}
        style={{ width: '100%' }}
      />

      <button
        disabled={!isDirty}
        onClick={handleSubmit}
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
          "
      >
        Predecir 🔮
      </button>
    </div>
  );
}
