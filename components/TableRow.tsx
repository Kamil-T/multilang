import { useLanguages } from '../contexts/LanguagesContext'

const TableRow = ({ words }) => {
  const { languages } = useLanguages()
  const { english, spanish, portuguese, italian, french } = words
  return (
    <p className='table-row border-collapse'>
      <span className='table-cell border'>{english}</span>

      {languages.spanish.status && (
        <span className='table-cell border'>{spanish}</span>
      )}
      {languages.portuguese.status && (
        <span className='table-cell border'>{portuguese}</span>
      )}
      {languages.italian.status && (
        <span className='table-cell border'>{italian}</span>
      )}
      {languages.french.status && (
        <span className='table-cell border'>{french}</span>
      )}
    </p>
  )
}

export default TableRow
