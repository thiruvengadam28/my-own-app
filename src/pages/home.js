import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home</h1>
      <p>Select an option:</p>
      <Link href="/upload">
        <button style={{ marginBottom: '10px' }}>Upload Image</button>
      </Link>
      <br />
      <Link href="/analysis">
        <button>Advanced Analysis</button>
      </Link>
    </div>
  );
}