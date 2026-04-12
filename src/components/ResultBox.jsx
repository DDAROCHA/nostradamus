export default function ResultBox({ result }) {
  const copy = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div>
      <textarea value={result} readOnly rows={10} style={{ width: '100%' }} />
      <button onClick={copy}>Copiar</button>
    </div>
  );
}
