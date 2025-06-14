import Link from 'next/link';

export default function AnalysisPage() {
  return (
    <div className="container">
      <h1>📊 Advanced Image Analysis</h1>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3468/3468374.png" 
        alt="Analysis Icon"
        style={{ width: '90px', marginBottom: '20px' }}
      />
      <p>This feature will soon show deep-learning-based insights such as:</p>
      <ul style={{ textAlign: 'left' }}>
        <li>Object classification</li>
        <li>Facial features & emotions</li>
        <li>Shape & text overlays</li>
      </ul>
      <Link href="/upload">
        <button style={{ marginTop: '20px' }}>Upload New Image</button>
      </Link>
    </div>
  );
}
