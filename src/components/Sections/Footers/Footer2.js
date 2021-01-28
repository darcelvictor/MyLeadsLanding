import React from "react"
import styled from "styled-components"
import { pxToRem } from "../../../theme/helpers"

const Footer2 = ({ className }) => {
  return (
    <div className={className}>
      <p>
        Propulsé par <a href="https://myleads-agency.com/">MyLeads Agency</a>
      </p>
    </div>
  )
}

export default styled(Footer2)`
  width: 100%;
  padding: ${pxToRem(13)} ${pxToRem(27)};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p,
  a {
    align-self: center;
    margin: 0;
    text-decoration: none;
    font-family: Roboto;
    font-size: ${pxToRem(16)};
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: #bcbcbc;
  }
`
