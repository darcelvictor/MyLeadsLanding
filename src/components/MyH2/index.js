import styled from "styled-components"
import React from "react"
import GreenLine from "../GreenLine"
import { media, pxToRem } from "../../theme/helpers"

const MyH2 = ({ className, children }) => {
  return (
    <div className={className}>
      <h2>{children}</h2>
      <GreenLine className="GreenLine" />
    </div>
  )
}

export default styled(MyH2)`
  .GreenLine {
    display: none;
  }
  ${media.large`
  
  align-self:flex-start;
  justify-content: flex-start;
  h2{
    text-align:left;
    margin-bottom : ${pxToRem(5)};
  }
  .GreenLine {
    display:block;
  }
  `}
`
