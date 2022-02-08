import React from 'react'
import prisma from '../lib/prisma'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.vocabulary.findMany({
    where: { category_id: 1 },
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

const Blog: React.FC<Props> = (props) => {
  console.log(props.feed)
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

export default Blog
