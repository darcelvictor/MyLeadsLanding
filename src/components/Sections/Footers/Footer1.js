import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { pxToRem } from "../../../theme/helpers"

const Footer1 = ({ className }) => {
  return (
    <div className={className}>
      <p>© 2021 mon-eco-habitat.fr - Tous droits réservés</p>
      <div>
        <Link to="politique">Politique de confidentialité</Link>
        <Link to="mentions-legales">Mentions légales</Link>
      </div>
    </div>
  )
}

export default styled(Footer1)`
  width: 100%;
  padding: ${pxToRem(13)} ${pxToRem(27)};
  background-color: #07448e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    font-family: Roboto;
    font-size: ${pxToRem(16)};
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    a {
      font-size: ${pxToRem(20)};
      margin: 0 ${pxToRem(10)};
      text-decoration: none;
      color: white;
      font-weight: normal;
    }
  }
`
