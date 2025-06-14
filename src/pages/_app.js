import '../styles/globals.css';
import DateTimeDisplay from '@/components/datetimedisplay';
import ImageInfoBox from '@/components/imageinfobox';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
