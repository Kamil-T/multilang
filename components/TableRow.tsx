import { useLanguages } from '../contexts/LanguagesContext'

const TableRow = ({ words }) => {
  const { languages } = useLanguages()
  const { english, spanish, portuguese, italian, french, word_id } = words
  let bgcolor = word_id % 2 !== 0
  return (
    <p
      className={`table-row border-collapse 
      ${bgcolor ? 'bg-gray-100' : 'bg-gray-200'}`}>
      {languages.english.status && (
        <span className='table-cell border'>{english}</span>
      )}
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
