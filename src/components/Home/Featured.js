import React from "react"
import styles from "../../css/items.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../Title"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Place from "../Places/Place"

const getFeaturedPlaces = graphql`
  query {
    featuredPlaces: allContentfulPlacesList(
      filter: { featured: { eq: true }, node_locale: { eq: "en-US" } }
      limit: 3
    ) {
      edges {
        node {
          contentful_id
          name
          slug
          featured
          pictures {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default () => {
  const { featuredPlaces } = useStaticQuery(getFeaturedPlaces)

  return (
    <section className={styles.places}>
      <Title title="Featured" subTitle="Places" />

      <div className={styles.center}>
        {featuredPlaces.edges.map(({ node }) => (
          <Place key={node.contentful_id} place={node} />
        ))}
      </div>

      <AniLink fade to="/places" className="btn-primary">
        Explore Places
      </AniLink>
    </section>
  )
}
