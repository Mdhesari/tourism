import React from "react"
import Layout from "../components/layout"
import SimpleHero from "../components/simpleHero"
import Banner from "../components/banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Tips from "../components/Home/Tips"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Be Awesome"
        info="Always think as you are the best verion of yourself..."
      >
        <Link to="/places" className="btn-white">
          Explore Places
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Tips />

  </Layout>
)
