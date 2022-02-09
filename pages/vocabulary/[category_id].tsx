import React from 'react'
import prisma from '../../lib/prisma'
import {GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'

export const getStaticPaths: GetStaticPaths = async () => {
  const feed = await prisma.vocabulary_categories.findMany()

  const paths = feed.map((category) => ({
    params: { category_id: String(Number(category?.category_id) || -1) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
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
    <Layout>
      <div className='page'>
        <h1>Public Feed</h1>
        <p>
          <span>English</span>
          <span>Spanish</span>
          <span>Portuguese</span>
          <span>Italian</span>
          <span>French</span>
        </p>
        {props.feed.map((vocabulary) => (
          <div key={vocabulary.word_id}>
            <p className='table'>
              <span>{vocabulary.english}</span>
              <span>{vocabulary.spanish}</span>
              <span>{vocabulary.portuguese}</span>
              <span>{vocabulary.italian}</span>
              <span>{vocabulary.french}</span>
            </p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .page {
        }
        .table {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </Layout>
  )
}

export default Category
