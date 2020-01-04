import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PlacesList from "./PlacesList"

const getPlaces = graphql`
  query {
    places: allContentfulPlacesList(filter: { node_locale: { eq: "en-US" } }) {
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
  const { places } = useStaticQuery(getPlaces)

  return <PlacesList places={places} />
}
