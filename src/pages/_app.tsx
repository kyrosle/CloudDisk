import '@/styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Test /> */}
      <Head>
        <title>App</title>
      </Head>
      {/* <Test /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
