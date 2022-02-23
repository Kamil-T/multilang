import React from 'react'
import prisma from '../../lib/prisma'
import { GetStaticProps, GetStaticPaths } from 'next'
import TableRow from '../../components/TableRow'
import Header from '../../components/Header'

export const getStaticPaths: GetStaticPaths = async () => {
  const feed = await prisma.vocabulary_categories.findMany()

  const paths = feed.map((category) => ({
    params: {
      category_id: String(Number(category?.category_id) || -1),
    },
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

const Category = (props: Props) => {
  const languages = {
    english: 'English',
    spanish: 'Spanish',
    portuguese: 'Portuguese',
    italian: 'Italian',
    french: 'French',
  }
  return (
    <>
      <Header />
      <div className='table w-11/12 m-auto my-3 table-fixed border-2 border-solid border-black '>
        <div className='table-header-group'>
          <TableRow words={languages} />
        </div>
        <div className='table-row-group '>
          {props.feed.map((vocabulary) => (
            <TableRow key={vocabulary.word_id} words={vocabulary} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Category
