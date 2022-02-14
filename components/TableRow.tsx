const TableRow = ({ vocabulary }) => {
  return (
    <p className='table-row border-collapse'>
      <span className='table-cell border'>{vocabulary.english}</span>
      <span className='table-cell border'>{vocabulary.spanish}</span>
      <span className='table-cell border'>{vocabulary.portuguese}</span>
      <span className='table-cell border'>{vocabulary.italian}</span>
      <span className='table-cell border'>{vocabulary.french}</span>
    </p>
  )
}

export default TableRow
