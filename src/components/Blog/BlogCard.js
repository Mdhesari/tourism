import React from "react"
import styles from "../../css/block-card.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ article }) => {
  const { title, image, slug } = article

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        {image !== null ? (
          <Image fluid={image.fluid} className={styles.img} alt={title} />
        ) : (
          ""
        )}

        <AniLink fade to={`/blog/${slug}`} className={styles.link}>
          Read more
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
