import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaTypo3, FaClock } from "react-icons/fa"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PlaceTemplate = ({ data }) => {
  const { name, timeRequired, timing, entryFees, pictures } = data.place

  const [mainImage, ...placeImages] = pictures

  const description = data.place.description.json

  console.log(description)

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {placeImages.map((item, index) => (
              <Img
                key={index}
                fluid={item.fluid}
                alt="single"
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            {entryFees !== null ? (
              <p>
                <FaMoneyBillWave className={styles.icon} /> Entry Fees -
                {entryFees}
              </p>
            ) : (
              ""
            )}

            {timing !== null ? (
              <p>
                <FaTypo3 className={styles.icon} /> {timing}
              </p>
            ) : (
              ""
            )}

            {timeRequired !== null ? (
              <p>
                <FaClock className={styles.icon} /> {timeRequired}
              </p>
            ) : (
              ""
            )}
          </div>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(description),
            }}
          ></p>
          <AniLink to="/places" className="btn-primary">
            Back to Tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    place: contentfulPlacesList(slug: { eq: $slug }) {
      featured
      entryFees
      name
      timeRequired
      timing
      pictures {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        json
      }
    }
  }
`

export default PlaceTemplate
