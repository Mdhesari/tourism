import React from "react"
import { graphql } from "gatsby"
import styles from "../css/blog-single.module.css"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Blog = ({ data }) => {
  const {
    id,
    title,
    author,
    createdAt,
    body: { childMarkdownRemark },
  } = data.articles

  const text = childMarkdownRemark.html

  return (
    <Layout>
      <section className={styles.blog}>
        <div key={id} className={styles.center}>
          <h1>{title}</h1>
          {/* {image !== null ? <StyledHero img={image.fluid} /> : ""} */}
          <h4>Published at {createdAt}</h4>
          {author !== null ? <h4>{author}</h4> : ""}
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
          <AniLink to="/blog" className="btn btn-primary">
            Go back to blog
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    articles: contentfulArticles(slug: { eq: $slug }) {
      id: contentful_id
      title
      author
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString: "YYYY/MM/DD")
    }
  }
`

export default Blog
