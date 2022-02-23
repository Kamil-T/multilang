import Link from 'next/link'
import { useEffect } from 'react'
import { useLanguages } from '../contexts/LanguagesContext'
import Flag from './Flag'

const Header = () => {
  const { languages } = useLanguages()
  let keys = Object.keys(languages)

  return (
    <div className='m-3'>
      <p>
        <span>
          <Link
            href={{
              pathname: `/`,
            }}
            passHref>
            <a>Home</a>
          </Link>
        </span>
        {keys.map((name) => (
          <Flag key={name} name={name} />
        ))}
      </p>
    </div>
  )
}
export default Header
