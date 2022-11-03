import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProductsProvider } from '../context/appContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}
