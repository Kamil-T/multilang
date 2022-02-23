import { useLanguages } from '../contexts/LanguagesContext'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const Flag = ({ name }) => {
  const { languages, setLanguages } = useLanguages()
  const toggle = () => {
    // @ts-ignore
    setLanguages((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], status: !prevState[name].status },
    }))
  }

  return (
    <span className=''>
      {getUnicodeFlagIcon(languages[name].flagUnicode)}
      <input
        type='checkbox'
        checked={languages[name].status}
        onChange={toggle}
      />
    </span>
  )
}

export default Flag
