import Link from 'next/link';

export default function AnalysisPage() {
  return (
    <div className="container">
      <h1>Advanced Analysis</h1>
      <p>This page will show detailed AI results in the future.</p>
      <Link href="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}