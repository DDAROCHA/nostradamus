import { useState } from 'react';
import Header from '../components/Header';
import PromptBox from '../components/PromptBox';
import Loader from '../components/Loader';
import ResultBox from '../components/ResultBox';
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
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <Header />
      <PromptBox onSubmit={handleSubmit} />
      {loading && <Loader />}
      {result && <ResultBox result={result} />}
    </div>
  );
}
