import React from "react"
import styled from "styled-components"
import { pxToRem, colors } from "../../../theme/helpers"

const CTA = ({ className, children }) => {
  return (
    <div className={className}>
      <btn>{children}</btn>
      <p>Demande gratuite et sans engagement.</p>
    </div>
  )
}

export default styled(CTA)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-top: ${pxToRem(10)};
    font-family: Roboto;
    font-size: ${pxToRem(17)};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: ${colors.lightGrey};
  }
`
