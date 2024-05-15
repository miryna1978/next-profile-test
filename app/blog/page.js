import Link from "next/link"
import Image from 'next/image'

import { getAllBlogs } from "../utils/mdQueries"

const Blog = async() => {
  const { blogs } = await getAllBlogs()
  
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Blog</h1>
          <p>sample blog.</p>

          {blogs.map((blog, index) =>
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
      </div>
    </>
  )
}

export default Blog