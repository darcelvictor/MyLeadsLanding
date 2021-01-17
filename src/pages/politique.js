import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Politique from "../components/Politique"
import { Footer1, Footer3 } from "../components/Sections"

const MentionsLegales = () => (
  <Layout>
    <SEO title="Mentions Légales" />
    <Politique />
    <Footer1 />
    <Footer3 />
  </Layout>
)

export default MentionsLegales
