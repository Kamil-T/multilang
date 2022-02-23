import Link from 'next/link'

const CategoryList = ({ category }) => {
  const { category_id, category_name } = category

  return (
    <span className='basis-1/4 m-2 text-center rounded-full border-2 border-gray-300 bg-gray-200'>
      <Link href={`/vocabulary/${category_id}`} passHref>
        <a>
          <span>{category_id}.</span>
          <span>{category_name}</span>
        </a>
      </Link>
    </span>
  )
}

export default CategoryList
