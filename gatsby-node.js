const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      places: allContentfulPlacesList(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
      articles: allContentfulArticles(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.places.edges.forEach(({ node }) => {
    createPage({
      path: `places/${node.slug}`,
      component: path.resolve("./src/templates/place-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.articles.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
