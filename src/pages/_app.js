// pages/_app.js
import '../styles/globals.css';
import Alayout from '../components/Alayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Alayout>
      <Component {...pageProps} />
    </Alayout>
  );
}