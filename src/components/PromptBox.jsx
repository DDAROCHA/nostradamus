import { useState } from 'react';

export default function PromptBox({ onSubmit }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = () => {
    if (!prompt) return;
    onSubmit(prompt);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <textarea
        placeholder="Ej: Quiero organizar un evento al aire libre la semana que viene..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        rows={4}
        style={{ width: '100%' }}
      />
      <button onClick={handleSubmit}>Predecir 🔮</button>
    </div>
  );
}
