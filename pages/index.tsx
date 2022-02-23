import prisma from '../lib/prisma'
import { GetStaticProps } from 'next'
import CategoryList from '../components/CategoryList'
import Header from '../components/Header'

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

const Blog = (props: Props) => {
  return (
    <>
      <Header />
      <div className='m-4'>
        <h1 className='m-4 text-lg'>Categories</h1>
        <div className='m-2 flex flex-wrap justify-between'>
          {props.feed.map((category) => (
            <CategoryList key={category.category_id} category={category} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog
