import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/banner"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    places: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxHeight: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <StyledHero img={data.places.childImageSharp.fluid}>
      <Banner
        title="There is more to learn"
        info="Never miss learning"
      ></Banner>
    </StyledHero>
  </Layout>
)
