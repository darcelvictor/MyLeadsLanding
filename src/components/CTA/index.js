import React from "react"
import styled from "styled-components"
import { pxToRem, colors } from "../../theme/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

const CTA = ({ className, children, fontSize }) => {
  return (
    <div className={className}>
      <CTAButton onClick={() => scrollTo("#form")} fontSize={fontSize}>
        {children}
      </CTAButton>
      <p>Demande gratuite et sans engagement.</p>
    </div>
  )
}

export default styled(CTA)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: center;
  margin: ${pxToRem(24)};
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
    align-self: center;
    color: ${colors.lightGrey};
  }
`
export const CTAButton = styled.button`
  font-size: ${props => pxToRem(props.fontSize)};
  text-transform: uppercase;
`
