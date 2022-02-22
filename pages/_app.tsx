import { AppProps } from 'next/app'
import Header from '../components/Header'
import LanguagesProvider from '../contexts/LanguagesContext'
import '../globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LanguagesProvider>
      <Header />
      <Component {...pageProps} />
    </LanguagesProvider>
  )
}

export default App
