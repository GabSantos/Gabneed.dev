import { AppProps } from 'next/app';

import '../styles/global.scss'
import '../styles/fonts.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
