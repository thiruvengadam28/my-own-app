import Link from 'next/link';

export default function ResultPage() {
  return (
    <div className="container">
      <h1>Analysis Result</h1>
      <label>Detected Elements:</label>
      <ul style={{ textAlign: 'left' }}>
        <li>Text: 92% match</li>
        <li>Face: Not Detected</li>
        <li>Shape: Circle & Rectangle</li>
      </ul>
      <label>AI Suggestions:</label>
      <textarea
        placeholder="This section provides smart AI feedback..."
        rows="4"
        defaultValue="Consider improving image clarity for better OCR."
      />
      <br />
      <Link href="/upload">
        <button style={{ marginTop: '20px' }}>Analyze Another Image</button>
      </Link>
    </div>
  );
}