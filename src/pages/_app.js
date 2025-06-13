// pages/_app.js
import '../styles/globals.css';
import Layout from '../../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <components {...pageProps} />
    </Layout>
  );
}
