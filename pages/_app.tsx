import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/Header.components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo List - NextJS</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
