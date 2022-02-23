import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export type languagesContextType = {
  english: {
    status: boolean
    flagUnicode: string
  }
  spanish: {
    status: boolean
    flagUnicode: string
  }
  portuguese: {
    status: boolean
    flagUnicode: string
  }
  italian: {
    status: boolean
    flagUnicode: string
  }
  french: {
    status: boolean
    flagUnicode: string
  }
}

type languagesContextTypeWithCallBacks = {
  languages: languagesContextType
  setLanguages: (newLanguages: languagesContextType) => void
}

const languagesContextDefVal: languagesContextType = {
  english: {
    status: true,
    flagUnicode: 'US',
  },
  spanish: {
    status: true,
    flagUnicode: 'ES',
  },
  portuguese: {
    status: true,
    flagUnicode: 'PT',
  },
  italian: {
    status: true,
    flagUnicode: 'IT',
  },
  french: {
    status: true,
    flagUnicode: 'FR',
  },
}

export const LanguagesContext =
  createContext<languagesContextTypeWithCallBacks | null>(null)

export const useLanguages = () => {
  return useContext(LanguagesContext)
}
type Props = {
  children: ReactNode
}

const LanguagesProvider = ({ children }: Props) => {
  const [languages, setLanguages] = useState<languagesContextType>(
    languagesContextDefVal
  )

  useEffect(() => {
    setLanguages(
      JSON.parse(window.localStorage.getItem('languages')) ||
        languagesContextDefVal
    )
  }, [])

  useEffect(() => {
    window.localStorage.setItem('languages', JSON.stringify({ ...languages }))
  }, [languages])

  return (
    <LanguagesContext.Provider value={{ languages, setLanguages }}>
      {children}
    </LanguagesContext.Provider>
  )
}

export default LanguagesProvider
