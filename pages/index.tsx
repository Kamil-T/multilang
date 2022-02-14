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
    <div className='m-4'>
      <h1 className='m-4'>Categories</h1>
      <div className='m-2'>
        {props.feed.map((category) => (
          <p key={category.category_id} className='m-1'>
            <Link
              href={{
                pathname: `/vocabulary/[category]`,
                query: {
                  category: category.category_id,
                },
              }}
              as={`/vocabulary/${category.category_id}`}
              passHref>
              <a>
                <span>{category.category_id}.</span>
                <span>{category.category_name}</span>
              </a>
            </Link>
          </p>
        ))}
      </div>
    </div>
  )
}

export default Blog
