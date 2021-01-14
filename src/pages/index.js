import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import MaPrimRenov from "../images/svg/maPrimRenov.inline.svg"
import { Container } from "../components/Container/ContainerElements"
import CheckList from "../components/CheckList"

import data from "../theme/data"
import Separator from "../components/Separator"
import MyForm from "../components/Form"

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
      <CheckList
        data={data.secondCheckList}
        color="#676666"
        TitleColor="#707070"
      />
      <MaPrimRenov style={{ marginLeft: "auto", marginRight: "auto" }} />
    </Container>
  </Layout>
)

export default IndexPage
