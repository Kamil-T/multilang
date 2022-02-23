import Link from 'next/link'
import { useLanguages } from '../contexts/LanguagesContext'
import Flag from './Flag'

const Header = () => {
  const { languages } = useLanguages()
  let keys = Object.keys(languages)

  return (
    <div className='m-3 flex justify-between'>
      <span className='text-lg font-medium'>
        <Link
          href={{
            pathname: `/`,
          }}
          passHref>
          <a>Home</a>
        </Link>
      </span>
      <span>
        {keys.map((name) => (
          <Flag key={name} name={name} />
        ))}
      </span>
    </div>
  )
}
export default Header
