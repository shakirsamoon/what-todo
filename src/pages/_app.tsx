import Layout from '@components/common/Layout';
import TodoDataProvider from '@store/TodoData.Context';
import type { AppProps } from 'next/app'
import '@styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TodoDataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoDataProvider>
  );
}
