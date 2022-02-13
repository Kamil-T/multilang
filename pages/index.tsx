import React from 'react'
import prisma from '../lib/prisma'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.vocabulary_categories.findMany()

  return { props: { feed } }
}

type VocabularyCategoriesProps = {
  category_id: number
  category_name: string
}
type Props = {
  feed: VocabularyCategoriesProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <div className='page'>
      <h1>Public Feed</h1>
      <div>
        <p>
          <span>Category</span>
        </p>
        {props.feed.map((category) => (
          <Link
            key={category.category_id}
            href={{
              pathname: `/vocabulary/[category]`,
              query: { category: category.category_id },
            }}>
            <p className='table'>
              <span>{category.category_id}.</span>
              <span>{category.category_name}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
