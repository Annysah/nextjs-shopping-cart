import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProductsProvider } from '../context/appContext'
//import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}
