import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { pxToRem } from "../../../theme/helpers"

const Footer1 = ({ className }) => {
  return (
    <div className={className}>
      <p>© 2021 mon-eco-habitat.fr - Tous droits réservés</p>
      <p>
        <Link to="politique">Politique de confidentialité</Link>
        {" - "}
        <Link to="mentions-legales">Mentions légales</Link>
      </p>
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
  justify-self: center;
  p {
    font-family: Roboto;
    margin-top: 0;
    font-size: ${pxToRem(16)};
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    align-self: center;
    color: #ffffff;
    a {
      font-size: ${pxToRem(14)};
      margin: 0;
      text-decoration: none;
      color: white;
      font-weight: normal;
    }
  }
`
