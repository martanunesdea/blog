import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = () => (
  <Layout>
    <SEO title="Articles"/>
      <h1>Articles</h1>
      <p>A compilation of single-topic posts, tutorials, complete project write-ups and everything in between.</p>
      <p>Search keywords or phrases to find relevant posts.</p>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Articles
