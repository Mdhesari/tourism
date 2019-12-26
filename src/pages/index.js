import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import { Link, graphql } from "gatsby"
import About from "../components/Home/About"
import Tips from "../components/Home/Tips"
import StyledHero from "../components/StyledHero"

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
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
    <StyledHero img={data.defaultBcg.childImageSharp.fluid} home="true">
      <Banner
        title="Be Awesome"
        info="Always think as you are the best verion of yourself..."
      >
        <Link to="/places" className="btn-white">
          Explore Places
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Tips />
  </Layout>
)
