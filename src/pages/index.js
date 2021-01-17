import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// IMAGES
import MaPrimRenov from "../images/svg/maPrimRenov.inline.svg"
import Image from "../components/image"

//sections
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "../components/Sections"
import { Footer1, Footer2 } from "../components/Sections/Footers"
import Container from "../components/Container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section1 />
    <Section2 />
    <Section3 />
    <div id="HomeImage" style={{ maxWidth: `600px`, margin: `0 0` }}>
      <Image />
    </div>
    <Section4 />
    {/* ----------5EME PARTIE ----------*/}
    <Section5 />
    <Section2 />
    {/* ----------6EME PARTIE ----------*/}
    <Section6 />
    {/* ----------7EME PARTIE ----------*/}

    <Container>
      <MaPrimRenov style={{ margin: "70 auto" }} />
    </Container>
    <footer>
      <Footer1 />
      <Footer2 />
    </footer>
  </Layout>
)

export default IndexPage
