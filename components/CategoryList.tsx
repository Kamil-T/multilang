import Link from 'next/link'

const CategoryList = ({ category }) => {
  const { category_id, category_name } = category
  return (
    <p className='m-1'>
      <Link
        href={{
          pathname: `/vocabulary/[category]`,
          query: {
            category: category_id,
          },
        }}
        as={`/vocabulary/${category_id}`}
        passHref>
        <a>
          <span>{category_id}.</span>
          <span>{category_name}</span>
        </a>
      </Link>
    </p>
  )
}

export default CategoryList
