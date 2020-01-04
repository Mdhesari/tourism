import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/banner"
import Places from "../components/Places/Places"

export const query = graphql`
  query {
    places: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 20, maxHeight: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({data}) => (
  <Layout>
    <StyledHero img={data.places.childImageSharp.fluid}>
      <Banner
      title="Explore All Places"
      info="We are with you"
      ></Banner>
    </StyledHero>
    <Places />
  </Layout>
)
