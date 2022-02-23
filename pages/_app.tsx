import { AppProps } from 'next/app'
import LanguagesProvider from '../contexts/LanguagesContext'
import '../globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LanguagesProvider>
      <Component {...pageProps} />
    </LanguagesProvider>
  )
}

export default App
