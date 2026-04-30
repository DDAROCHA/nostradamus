import { useState } from 'react';
import Header from '../components/Header';
import PromptBox from '../components/PromptBox';
import LoadingSpinner from '../components/LoadingSpinner';
import ResultBox from '../components/ResultBox';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { getPrediction } from '../services/api';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async prompt => {
    setLoading(true);
    setResult('');

    try {
      const res = await getPrediction(prompt);
      setResult(res.data.result);
    } catch (err) {
      setResult('Error obteniendo predicción');
    }

    setLoading(false);
  };

  return (
    <>
      <ParticlesBackground />
      <div style={{ maxWidth: 600, margin: 'auto', position: 'relative', zIndex: 1 }}>
        <Header />
        <PromptBox onSubmit={handleSubmit} />
        {loading && <LoadingSpinner />}
        {result && <ResultBox result={result} />}
      </div>
    </>
  );
}
