import Link from "next/link"
import Image from 'next/image'

import Pagination from "../../../components/pagination"
import { getAllBlogs, blogsPerPage } from "../../../utils/mdQueries"

const PaginationPage = async(props) => {
  const { blogs, numberPages } = await getAllBlogs()

  // ページ番号を取得
  const currentPage = props.params.pagination

  // 1ページあたりに表示するブログ記事をslice()で制限
  const limitedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
  
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Blog</h1>
          <p>sample blog.</p>

          {limitedBlogs.map((blog, index) =>
            <article key={index} className="blogCard">
              <div className="cardContainer">
                <h2>{blog.frontmatter.title}</h2>
                <p>{blog.frontmatter.date}</p>
                <Link href={`/blog/${blog.slug}`}>Read More</Link>
              </div>
              <figure className="blogImg">
                <Image src={blog.frontmatter.image} alt="card image" height={300} width={1000} quality={90} priority={true} />
              </figure>
            </article>
          )}
        </div>
        <Pagination numberPages={numberPages} />

      </div>
    </>
  )
}

export default PaginationPage

export async function generateStaticParams() {
  // 必要なページ数（numberPages）からslugにつける数字を出し、pathsに入れる
  const { numberPages } = await getAllBlogs()
  let paths = []
  Array.from({ length: numberPages }).map((_, index) => paths.push(`/blog/page/${index + 2}`))

  return paths
}