import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <h1>👁️‍🗨️ Welcome to InSightAI</h1>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/7437/7437542.png" 
        alt="AI Vision" 
        style={{ width: '100px', marginBottom: '20px' }}
      />
      <p>Choose a feature to begin exploring AI-powered image analysis:</p>

      <Link href="/upload">
        <button style={{ margin: '10px' }}>📤 Upload Image</button>
      </Link>
      <Link href="/result">
        <button style={{ margin: '10px' }}>📑 View Last Result</button>
      </Link>
      <Link href="/analysis">
        <button style={{ margin: '10px' }}>📊 Advanced Analysis</button>
      </Link>
    </div>
  );
}
