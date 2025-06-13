// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link href="/">🏠 Home</Link>
        <Link href="/upload">📤 Upload</Link>
        <Link href="/result">📑 Result</Link>
        <Link href="/analysis">📊 Analysis</Link>
      </nav>
      <main style={{ paddingTop: '60px' }}>{children}</main>
    </>
  );
}