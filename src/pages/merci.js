import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "../components/Container"

import Check from "../images/svg/check-thanks.inline.svg"
import MaPrim from "../images/svg/maPrimRenov.inline.svg"

import { pxToRem, colors, layout, media } from "../theme/helpers"

const Thanks = ({ className }) => (
  <Layout>
    <SEO title="merci" />
    <Container className={className}>
      <div id="Thanks">
        <Check />
        <h1>Nous avons enregistré votre demande d’éligibilité</h1>
        <div></div>
        <p>Un conseiller va prendre contact avec vous sous 24 à 48 heures</p>
        <MaPrim style={{ marginTop: pxToRem(40) }} />
      </div>
    </Container>
  </Layout>
)

export default styled(Thanks)`
  ${layout()}
  align-content: center;
  min-height: 90vh;
  #Thanks {
    margin: ${pxToRem(20)} auto;
    border-radius: 53px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: ${pxToRem(40)} ${pxToRem(15)};
    text-align: center;
    max-width: 95%;

    h1 {
      color: ${colors.blue};
      text-transform: uppercase;
      font-size: ${pxToRem(22)};
      font-weight: 800;
    }
    div {
      width: ${pxToRem(600)};
      max-width: 70%;
      height: ${pxToRem(5)};
      background-color: ${colors.green};
    }
    p {
      font-size: ${pxToRem(19)};
      align-self: center;
      text-align: center;
    }
  }

  ${media.small`
  #Thanks {
   padding: ${pxToRem(50)};
   max-width: 95%;
   h1{
    font-size:  1.7rem;
   }
   p {
      font-size: 1.2rem;
    }
   }
  `}
`
