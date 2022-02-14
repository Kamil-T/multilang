const TableRow = ({ words }) => {
  const { english, spanish, portuguese, italian, french } = words
  return (
    <p className='table-row border-collapse'>
      <span className='table-cell border'>{english}</span>
      <span className='table-cell border'>{spanish}</span>
      <span className='table-cell border'>{portuguese}</span>
      <span className='table-cell border'>{italian}</span>
      <span className='table-cell border'>{french}</span>
    </p>
  )
}

export default TableRow
