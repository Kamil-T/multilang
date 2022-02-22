import { useLanguages } from '../contexts/LanguagesContext'
import Flag from './Flag'

const Header = () => {
  const { languages } = useLanguages()
  let keys = Object.keys(languages)
  return (
    <div>
      <p>
        {keys.map((name) => (
          <Flag key={name} name={name} />
        ))}
      </p>
    </div>
  )
}
export default Header
