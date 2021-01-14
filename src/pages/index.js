import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import { Container } from "../components/Container/ContainerElements"
import CheckList from "../components/CheckList"
import Separator from "../components/Separator"
import MyForm from "../components/Form"
import { FirstSection } from "../components/Sections"

import data from "../theme/data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #4a74ff, rgba(69, 151, 186, 0.75) 51%, rgba(24, 145, 184, 0.51) 88%, rgba(255, 255, 255, 0.51))",
      }}
    >
      <Banner>
        Vous êtes propriétaire d’une maison chauffée au gaz, au fioul ou au
        charbon ?
      </Banner>
      <Separator />
      <h1>
        Bénéficiez de 20000€ d’aides pour l’installation de votre pompe à
        chaleur
      </h1>
      <CheckList data={data.firstCheckList} color="white" />
      <MyForm />
    </Container>
    <Container>
      <FirstSection />
      <CheckList
        data={data.secondCheckList}
        color="#676666"
        TitleColor="#707070"
      />
    </Container>
  </Layout>
)

export default IndexPage
