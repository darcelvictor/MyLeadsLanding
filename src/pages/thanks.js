import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="merci" />
    <h1>merci</h1>
    <p>Merci nous vous recontacterons</p>
    <Link to="/">home</Link>
  </Layout>
)

export default NotFoundPage
