import React from 'react'
import prisma from '../../lib/prisma'
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const feed = await prisma.vocabulary_categories.findMany()

  const paths = feed.map((category) => ({
    params: { category_id: String(Number(category?.category_id) || -1) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const feed = await prisma.vocabulary.findMany({
    where: { category_id: Number(params?.category_id) || -1 },
  })

  return { props: { feed } }
}

type vocabularyProps = {
  word_id: string
  category_id: number
  english: string
  spanish: string
  portuguese: string
  italian: string
  french: string
}
type Props = {
  feed: vocabularyProps[]
}

const Category: React.FC<Props> = (props) => {
  console.log(props)
  return (
    <div className='table w-11/12 m-auto my-3 table-fixed border-2 border-solid border-black '>
      <div className='table-header-group'>
        <p className='table-row '>
          <span className='table-cell'>English</span>
          <span className='table-cell'>Spanish</span>
          <span className='table-cell'>Portuguese</span>
          <span className='table-cell'>Italian</span>
          <span className='table-cell'>French</span>
        </p>
      </div>
      <div className='table-row-group '>
        {props.feed.map((vocabulary) => (
          <p className='table-row border-collapse ' key={vocabulary.word_id}>
            <span className='table-cell border'>{vocabulary.english}</span>
            <span className='table-cell border'>{vocabulary.spanish}</span>
            <span className='table-cell border'>{vocabulary.portuguese}</span>
            <span className='table-cell border'>{vocabulary.italian}</span>
            <span className='table-cell border'>{vocabulary.french}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export default Category
