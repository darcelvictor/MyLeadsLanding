import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "../components/Container"

import Check from "../images/svg/check-thanks.inline.svg"
import MaPrim from "../images/svg/maPrimRenov.inline.svg"

const Thanks = () => (
  <Layout>
    <SEO title="merci" />
    <Container>
      <div>
        <Check />
        <h1>Nous avons enregistré votre demande d’éligibilité</h1>
        <div></div>
        <p>Un conseiller va prendre contact avec vous sous 24 à 48 heures</p>
        <MaPrim />
      </div>
    </Container>
  </Layout>
)

export default Thanks
