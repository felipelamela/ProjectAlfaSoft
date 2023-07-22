import type { AppProps } from 'next/app'
import GlobalTheme from '../src/GobalTheme/GlobalTheme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalTheme />
      <Component {...pageProps} />
    </>

  )
}