import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

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
      <section>
        <h2>Places page</h2>
      </section>
    </StyledHero>
  </Layout>
)
