// pages/index.js
import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="container">
      <h1>InSightAI - Image Analysis</h1>
      <div className="photo">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" alt="InSightAI Logo" />
      </div>
      <Link href="/home">
        <button>Enter App</button>
      </Link>
    </div>
  );
}
