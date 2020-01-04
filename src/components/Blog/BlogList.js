import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getArticles = graphql`
  query {
    articles: allContentfulArticles {
      edges {
        node {
          author
          id: contentful_id
          slug
          text {
            json
          }
          title
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { articles } = useStaticQuery(getArticles)

  console.log(articles)

  return (
    <section className={styles.blog}>
      <Title title="Latest Articles" subTitle="Find out more and learn more" />
      <div className={styles.center}>
        {articles.edges.map(({ node }) => {
          return <BlogCard key={node.id} article={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
