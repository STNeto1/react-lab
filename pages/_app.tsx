import type { AppProps } from 'next/app'
import { GenericProvider } from '../src/context/Generic'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GenericProvider>
      <Component {...pageProps} />
    </GenericProvider>
  )
}

export default MyApp
