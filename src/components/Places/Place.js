import React from "react"
import styles from "../../css/place.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ place }) => {
  const { name, slug, pictures } = place
  const mainImage = pictures[0].fluid

  return (
    <article className={styles.place}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <AniLink fade className={styles.link} to={`/places/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3 className="text-center">{name}</h3>
      </div>
    </article>
  )
}
